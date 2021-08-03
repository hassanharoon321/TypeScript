const config = require('../helpers/config.json');
export const getDashboardJob = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/home_job_base.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,"auth_id": `${userId}`, },
            // auth_id:"215E/LqrKva/mvrc",
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const dashboardjob = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_DASHBOARDJOB",
                dashboardjob: dashboardjob,
                dashboardjobResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_DASHBOARDJOB",
                dashboardjob: {},
                dashboardjobResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

