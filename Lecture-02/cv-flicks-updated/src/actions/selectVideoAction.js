const config = require('../helpers/config.json');
export const createSelectVideo = (userId, job_id, videos) => {
    console.log(userId, job_id, videos)
    return (dispatch) => {
        dispatch({
            type: "SELECTVIDEO_RESET",
        });

        var editvidio = JSON.stringify({
            "job_id": job_id !== null ? Number(job_id) : job_id,
            "videos": videos !== null ? Number(videos) : videos,

        })
        console.log("yyyy", userId, editvidio)

        fetch(`${config['baseUrl']}/user/apply_job.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
            body: editvidio
        }).then(res => {
            console.log("res aqib", res)
            if (res.status !== 200) {
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "SELECTVIDEO_SUCCESS",
                selectVideoResponse: response,

            });
            if (response.status == 404) {
                alert("Application Exist")
            }
            else {
                window.location = "/applied-success"
            }


        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "SELECTVIDEO_FAIL",
                selectVideoResponse: "creation failed",
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}



export const deleteVideo = (userId,vid) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/delete_user_vid.php?vid_id=${vid}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,"auth_id":`${userId}`,},
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const Searchlogin = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_SEARCHLOGIN",
                Searchlogin: Searchlogin,
                SearchloginResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_SEARCHLOGIN",
                Searchlogin: {},
                SearchloginResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}