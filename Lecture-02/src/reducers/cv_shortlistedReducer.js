const initState = {
    cvShortlisted: [],
    cvShortlistedResponse: null,
    loading:false,

}

const cvShortlisteddReducer = (state = initState, action) => {
    if (action.type === 'GET_CVSHORTLISTED') {
        return {
            ...state,
            cvShortlisted: action.cvShortlisted,
            cvShortlistedResponse: action.cvShortlistedResponse,
            loading:action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'CVSHORTLISTED_RESET') {
        return {
            ...state,
            cvShortlistedResponse: null,
            loading:action.loading,

        }
    }
    else if (action.type === 'CVSHORTLISTED_SUCCESS') {
        return {
            ...state,
            cvShortlistedResponse: action.cvShortlistedResponse,
            loading:action.loading,
        }
    }
    else if (action.type === 'CVSHORTLISTED_FAIL') {
        return {
            ...state,
            cvShortlistedResponse: action.cvShortlistedResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default cvShortlisteddReducer;