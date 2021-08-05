const initState = {
    addSkill: {},
    addSkillResponse: null,
    loader: true,

}

const addSkillReducer = (state = initState, action) => {
    if (action.type === 'GET_SKILL') {
        return {
            ...state,
            addSkill: action.addSkill,
            addSkillResponse: action.addSkillResponse,
            loader: action.loader,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'SKILL_RESET') {
        return {
            ...state,

            addSkillResponse: null,
            loader: action.loader,

        }
    }
    else if (action.type === 'SKILL_SUCCESS') {
        return {
            ...state,

            addSkillResponse: action.addSkillResponse,
            loader: action.loader,
        }
    }
    else if (action.type === 'SKILL_FAIL') {
        return {
            ...state,

            addSkillResponse: action.addSkillResponse,
            loader: action.loader,
        }
    }

    return state;
}
export default addSkillReducer;