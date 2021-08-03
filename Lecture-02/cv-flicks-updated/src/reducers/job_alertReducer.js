const initState = {
    jobAlert: {},
    jobAlertResponse: null,

}

const jobAlertReducer = (state = initState, action) => {
    if (action.type === 'GET_JOBALERT') {
        return {
            ...state,
            jobAlert: action.jobAlert,
            jobAlertResponse: action.jobAlertResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'JOBALERT_RESET') {
        return {
            ...state,

            jobAlertResponse: null,

        }
    }
    else if (action.type === 'JOBALERT_SUCCESS') {
        return {
            ...state,

            jobAlertResponse: action.jobAlertResponse,
        }
    }
    else if (action.type === 'JOBALERT_FAIL') {
        return {
            ...state,

            jobAlertResponse: action.jobAlertResponse,
        }
    }

    return state;
}
export default jobAlertReducer;