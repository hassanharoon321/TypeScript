const initState = {
    homejob: {},
    homejobResponse: null,

}

const homejobReducer = (state = initState, action) => {
    if (action.type === 'GET_HOMEJOB') {
        return {
            ...state,
            homejob: action.homejob,
            homejobResponse: action.homejobResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'HOMEJOB_RESET') {
        return {
            ...state,

            homejobResponse: null,

        }
    }
    else if (action.type === 'HOMEJOB_SUCCESS') {
        return {
            ...state,

            homejobResponse: action.homejobResponse,
        }
    }
    else if (action.type === 'HOMEJOB_FAIL') {
        return {
            ...state,

            homejobResponse: action.homejobResponse,
        }
    }

    return state;
}
export default homejobReducer;