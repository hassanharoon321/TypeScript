const config = require('../helpers/config.json');

export const createForgetPassword = (email) => {
    return (dispatch) => {
        dispatch({
            type: "FORGETPASSWORD_RESET",
        });
        // var data = [
        //     {
        //         "email": email,
        //     }
        // ];
        // console.log(data)
        /// post request
        fetch(`${config['baseUrl']}/user/forget_password.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
            })
        }).then((response) => {

            console.log("pppppp", response);
            dispatch({
                type: "FORGETPASSWORD_SUCCESS",
                forgetPasswordResponse: response,

            });
            window.location = "/"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "FORGETPASSWORD_FAIL",
                forgetPasswordResponse: "creation failed",
            });
            // alert("Please Check Your Internet Connection...")
        })
    }
}

