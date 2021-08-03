const config = require('../helpers/config.json');
export const getDashboardLogin = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/web_home.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const dashboardlogin = response.data
            const premium = response.data.profile.premium_status
            console.log("dddddd", premium)

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_DASHBOARDLOGIN",
                dashboardlogin: dashboardlogin,
                dashboardloginResponse: "got it",
                premium: premium
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_DASHBOARDLOGIN",
                dashboardlogin: {},
                dashboardloginResponse: null,
                premium: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

