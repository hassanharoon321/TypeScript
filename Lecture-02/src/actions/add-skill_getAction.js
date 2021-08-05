const config = require('../helpers/config.json');
export const getSkill = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/add_skills_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, }
        }).then(res => res.json()).then((response) => {
            const addSkill = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_SKILL",
                addSkill: addSkill,
                addSkillResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_SKILL",
                addSkill: {},
                addSkillResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

export const createSkill = (userId, skills, user_added) => {
    console.log(userId, skills, user_added)
    return (dispatch) => {
        dispatch({
            type: "SKILL_RESET",
            loader:false,
        });
        var data =
        {
            "skills": skills,
            "user_added": user_added,

        }
            ;
        console.log("ffffff",data)
        /// post request
        fetch(`${config['baseUrl']}/user/add_skills.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}` },
            body: JSON.stringify({
                "skills": skills,
                "user_added": user_added,

            })
        }).then((response) => {
            console.log("pppppp", response.json());
            dispatch({
                type: "SKILL_SUCCESS",
                addSkillResponse: response,
                loader:true,
            });
            window.location="/dashboard"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "SKILL_FAIL",
                addSkillResponse: "creation failed",
                loader:true,
            });
        })
    }
}


