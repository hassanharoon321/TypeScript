const initState = {
    profileViewed: {},
    profileViewedResponse: null,
    
}

const profileViewedReducer = (state = initState, action) => {
    if (action.type === 'GET_PROFILEVIEWED') {
        return {
            ...state,
            profileViewed: action.profileViewed,
            profileViewedResponse:action.profileViewedResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'PROFILEVIEWED_RESET') {
        return {
            ...state,
            
            profileViewedResponse: null,
            
        }
    }
    else if (action.type === 'PROFILEVIEWED_SUCCESS') {
        return {
            ...state,
            
            profileViewedResponse: action.profileViewedResponse,
        }
    }
    else if (action.type === 'PROFILEVIEWED_FAIL') {
        return {
            ...state,
            
            profileViewedResponse: action.profileViewedResponse,
        }
    }

    return state;
}
export default profileViewedReducer;