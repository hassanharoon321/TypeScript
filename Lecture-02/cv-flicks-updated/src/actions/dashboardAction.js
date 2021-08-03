const config = require('../helpers/config.json');
export const getDashboard = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/web_home.php`, {
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
            const dashboard = response.data

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
            // alert("Please Check Your Internet Connection...")
        })

    }


}

