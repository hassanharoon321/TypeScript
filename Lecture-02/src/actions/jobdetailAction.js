const config = require('../helpers/config.json');
export const getJobDetail = (userId,id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/job_base.php?id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const jobdetail = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_JOBDETAIL",
                jobdetail: jobdetail,
                jobdetailResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_JOBDETAIL",
                jobdetail: {},
                jobdetailResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

