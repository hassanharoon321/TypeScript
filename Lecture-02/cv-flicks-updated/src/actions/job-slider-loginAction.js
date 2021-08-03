const config = require('../helpers/config.json');
export const jobSLiderLogin = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/web_home.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id":`${userId}` },
        }).then(res => res.json()).then((response) => {
            const dashboard = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_DASHBOARD",
                dashboard: dashboard,
                dashboardResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_PERSONAL",
                dashboard: {},
                dashboardResponse: null
            });
        })

    }


}

