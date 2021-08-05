const config = require('../helpers/config.json');
export const getAllJobs = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/all_jobs_base.php`, {
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
            const alljobs = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_ALLJOBS",
                alljobs: alljobs,
                alljobsResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_ALLJOBS",
                alljobs: {},
                alljobsResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

