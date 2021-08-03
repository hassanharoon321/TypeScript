const config = require('../helpers/config.json');
export const getSearch = () => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/search_data_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const Search = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_SEARCH",
                Search: Search,
                SearchResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_SEARCH",
                Search: {},
                SearchResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

export const createSearch = (keyword, ind, city, exp) => {
    console.log(keyword, ind, city, exp)
    return (dispatch) => {
        dispatch({
            type: "SEARCH_RESET",
        });
        var data =
        {
            "keyword": keyword,
            "ind": ind,
            "state": city,
            "exp": exp,

        }
            ;
        console.log(data)
        /// post request
        fetch(`${config['baseUrl']}/user/search.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "keyword": keyword,
                "ind": ind,
                "state": city,
                "exp": exp,

            })
        }).then(res => {
            console.log("res aqib", res)
            if (res.status !== 200) {
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            const sData = response.data;
            dispatch({
                type: "SEARCH_SUCCESS",
                SearchResponse: response,
                searchData: sData,

            });
            // window.location = "/search-result"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "SEARCH_FAIL",
                SearchResponse: "creation failed",
                searchData: {}
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

