const config = require('../helpers/config.json');

export const getJobsIndustry = (id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/web_job_by_industry.php?industry_id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        }).then(res => res.json()).then((response) => {
            const jobIndustry = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_JOBINDUSTRY",
                jobIndustry: jobIndustry,
                jobIndustryResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_JOBINDUSTRY",
                jobIndustry: {},
                jobIndustryResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

