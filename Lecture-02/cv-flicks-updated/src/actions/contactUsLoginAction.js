const config = require('../helpers/config.json');

export const postContactUs = (userId,name,email,message) => {
    console.log(userId,name,email,message)
    return (dispatch) => {
        dispatch({
            type: "CONTACT_US_LOGIN_RESET",
        });
        var data = 
            {
                "name":name,
                "email":email,
                "message":message,
            }
        
        console.log("ddddd",data)
        /// post request
        fetch(`${config['baseUrl']}/user/contact_us.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: JSON.stringify({
                "name":name,
                "email":email,
                "message":message,
            })
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "CONTACT_US_LOGIN_SUCCESS",
                contactUsLoginResponse: response,

            });
                window.location="/dashboard"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "CONTACT_US_LOGIN_FAIL",
                contactUsLoginResponse: "creation failed",
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}


export const postContactUsWithoutLogin = (name,email,message) => {
    console.log(name,email,message)
    return (dispatch) => {
        dispatch({
            type: "CONTACT_US_LOGIN_RESET",
        });
        var data = 
            {
                "name":name,
                "email":email,
                "message":message,
            }
        
        console.log("ddddd",data)
        /// post request
        fetch(`${config['baseUrl']}/user/contact_us.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                "name":name,
                "email":email,
                "message":message,
            })
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "CONTACT_US_LOGIN_SUCCESS",
                contactUsLoginResponse: response,

            });
                window.location="/home"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "CONTACT_US_LOGIN_FAIL",
                contactUsLoginResponse: "creation failed",
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}