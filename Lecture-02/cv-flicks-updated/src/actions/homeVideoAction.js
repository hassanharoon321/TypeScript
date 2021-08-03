const config = require('../helpers/config.json');

export const getHomeVideo = (userId, id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/home_vid.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const homeVideo = response.data
            dispatch({
                type: "GET_HOMEVIDEO",
                homeVideo: homeVideo,
                homeVideoResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_HOMEVIDEO",
                homeVideo: {},
                homeVideoResponse: null
            });
        })

    }


}

