const config = require('../helpers/config.json');
export const getTopManagementAfter = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/all_jobs_base.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id":`${userId}` },
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

