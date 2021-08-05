const config = require('../helpers/config.json');
export const getTopManagement2 = (id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/jobs_by_industry.php?industry_id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const topmanagement = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_TOPMANAGEMENT",
                topmanagement: topmanagement,
                topmanagementResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_TOPMANAGEMENT",
                topmanagement: {},
                topmanagementResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

