const config = require('../helpers/config.json');

export const getJobAlert = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/job_alert_page_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const jobAlert = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_JOBALERT",
                jobAlert: jobAlert,
                jobAlertResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_JOBALERT",
                jobAlert:{},
                jobAlertResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}


export const createJobAlert = (userId,skills,exp,relocate,location) => {
    console.log(userId,skills,exp,relocate,location)
    return (dispatch) => {
        dispatch({
            type: "JOBALERT_RESET",
        });
        var data = 
            {
                "skills":skills,
                "exp":exp,
                "relocate":relocate,
                "location":location,
            }
        
        console.log("ddddd",data)
        /// post request
        fetch(`${config['baseUrl']}/user/create_job_alert.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: JSON.stringify({
                "skills":skills,
                "exp":exp,
                "relocate":relocate,
                "location":location,

            })
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "JOBALERT_SUCCESS",
                jobAlertResponse: response,

            });
                window.location="/dashboard"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "JOBALERT_FAIL",
                jobAlertResponse: "creation failed",
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}



