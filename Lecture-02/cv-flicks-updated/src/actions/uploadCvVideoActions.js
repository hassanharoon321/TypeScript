const config = require('../helpers/config.json');

export const getUploadCvVideo = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/user_videos.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const uploadCvVideo = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_UPLOADCVVIDEO",
                uploadCvVideo: uploadCvVideo,
                uploadCvVideoResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_UPLOADCVVIDEO",
                uploadCvVideo: {},
                uploadCvVideoResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

