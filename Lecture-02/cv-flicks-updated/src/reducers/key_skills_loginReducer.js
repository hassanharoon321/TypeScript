const initState = {
    addSkill: {},
    addSkillResponse: null,
    loading:false,
}

const keySkillsLogin = (state = initState, action) => {
    if (action.type === 'GET_SKILL') {
        return {
            ...state,
            addSkill: action.addSkill,
            addSkillResponse: action.addSkillResponse,
            loading:action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'SKILL_RESET') {
        return {
            ...state,

            addSkillResponse: null,
            loading:action.loading,

        }
    }
    else if (action.type === 'SKILL_SUCCESS') {
        return {
            ...state,

            addSkillResponse: action.addSkillResponse,
            loading:action.loading,
        }
    }
    else if (action.type === 'SKILL_FAIL') {
        return {
            ...state,

            addSkillResponse: action.addSkillResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default keySkillsLogin;