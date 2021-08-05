const config = require('../helpers/config.json');
export const getJobDetailLogin = (userId,id) => {
    return (dispatch) => {
        
        /// get request
        fetch(`${config['baseUrl']}/user/job_base.php?id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then((response) => {
            const jobdetail = response.data
            dispatch({
                type: "GET_JOBDETAILLOGIN",
                jobdetail: jobdetail,
                jobdetailloginResponse: "got it",
                loading: true,
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_JOBDETAILLOGIN",
                jobdetail: {},
                jobdetailloginResponse: null,
                loading: true,
            });
        })

    }


}

