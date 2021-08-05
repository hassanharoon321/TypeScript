import {useHistory} from "react-router-dom"
const config = require('../helpers/config.json');
export const getSearchLogin = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/search_data_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,"auth_id":`${userId}`,},
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const Searchlogin = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_SEARCHLOGIN",
                Searchlogin: Searchlogin,
                SearchloginResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_SEARCHLOGIN",
                Searchlogin: {},
                SearchloginResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

export const createSearchLogin = (userId,keyword, ind, city, exp) => {
    console.log(userId,keyword, ind, city, exp)
    return (dispatch) => {
        dispatch({
            type: "SEARCHLOGIN_RESET",
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
            headers: { 'Content-Type': 'application/json' ,"auth_id":`${userId}` },
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
                type: "SEARCHLOGIN_SUCCESS",
                SearchloginResponse: response,
                searchData: sData,
            });
            // <Redirect to="/search-results" />
            // window.location="/search-results"
            // browserHistory.push("/search-results")
            // let history=useHistory()
            // history.push("/search-results")
            // <Link to="/search-results" />

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "SEARCHLOGIN_FAIL",
                SearchloginResponse: "creation failed",
                searchData: {}
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

