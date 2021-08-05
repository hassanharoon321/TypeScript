const config = require('../helpers/config.json');

export const createHeadlinesLogin = (userId,headline) => {
    console.log(headline)
    return (dispatch) => {
        dispatch({
            type: "HEADLINELOGIN_RESET",
            loading:false,
        });
        fetch(`${config['baseUrl']}/user/add_headline.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: JSON.stringify({
                "headline":headline,

            })
        }).then(res => {
            console.log("res aqib", res)
            if(res.status !== 200){
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "HEADLINELOGIN_SUCCESS",
                headlineloginResponse: response,
                loading:true,

            });
                window.location="/profile"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "HEADLINELOGIN_FAIL",
                headlineloginResponse: "creation failed",
                loading:true,
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

