const config = require('../helpers/config.json');
export const logOut = (userId) => {
    console.log()
    return (dispatch) => {
        dispatch({
            type: "LOGOUT_RESET",
        });
        fetch(`${config['baseUrl']}/user/logout.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "auth_id": localStorage.getItem("auth_id") },
            body: JSON.stringify({
              

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
                type: "LOGOUT_SUCCESS",
                logoutResponse: response,

            });
            localStorage.removeItem('auth_id');
                window.location="/"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "LOGOUT_FAIL",
                logoutResponse: "creation failed",
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

