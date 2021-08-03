const config = require('../helpers/config.json');

export const getProfileViewed = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/profile_viewers.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const profileViewed = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_PROFILEVIEWED",
                profileViewed: profileViewed,
                profileViewedResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_PROFILEVIEWED",
                profileViewed: {},
                profileViewedResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

