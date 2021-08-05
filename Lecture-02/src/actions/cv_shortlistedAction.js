const config = require('../helpers/config.json');

export const getCvShortlisted = (userId) => {

    return (dispatch) => {
        fetch(`${config['baseUrl']}/user/progress.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const cvShortlisted = response.data
            // console.log("kkkkk", response);
            dispatch({
                type: "GET_CVSHORTLISTED",
                cvShortlisted: cvShortlisted,
                cvShortlistedResponse: "got it",
                loading: true
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_CVSHORTLISTED",
                cvShortlisted: [],
                cvShortlistedResponse: null,
                loading: true
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

