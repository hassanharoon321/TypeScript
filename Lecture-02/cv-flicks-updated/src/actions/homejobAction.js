const config = require('../helpers/config.json');
export const getHomeJob = () => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/home_job_base.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // auth_id:"215E/LqrKva/mvrc",
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const homejob = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_HOMEJOB",
                homejob: homejob,
                homejobResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_HOMEJOB",
                homejob: {},
                homejobResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

