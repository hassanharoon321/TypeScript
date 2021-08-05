const config = require('../helpers/config.json');
export const getSkillsLogin = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/add_skills_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, }
        }).then(res => res.json()).then((response) => {
            const addSkill = response.data
            const arr=response.data.stored_values
            // console.log("dfgh",arr)
            dispatch({
                type: "GET_SKILL",
                addSkill: addSkill,
                addSkillResponse: "got it",
                loading:true
            });
            localStorage.setItem("skill",arr)
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_SKILL",
                addSkill: {},
                addSkillResponse: null,
                loading:true
            });
        })

    }
}

export const createSkillsLogin = (userId, skills, user_added) => {
    console.log(userId, skills, user_added)
    return (dispatch) => {
        dispatch({
            type: "SKILL_RESET",
            loading:false,
        });
        var data =
        {
            "skills": skills,
            "user_added": user_added,

        }
            ;
        console.log("ffffff",data)
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
                loading:true,

            });
            window.location="/profile"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "SKILL_FAIL",
                addSkillResponse: "creation failed",
                loading:true,
            });
        })
    }
}


