const initState = {
    profile: {},
    profileResponse: null,
    
}

const profileReducer = (state = initState, action) => {
    if (action.type === 'GET_PROFILE') {
        return {
            ...state,
            profile: action.profile,
            // profileResponse:action.profileResponse
        }
    }
    // // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    // else if (action.type === 'PROFILE_RESET') {
    //     return {
    //         ...state,
            
    //         profileResponse: null,
            
    //     }
    // }
    // else if (action.type === 'PROFILE_SUCCESS') {
    //     return {
    //         ...state,
            
    //         profileResponse: action.profileResponse,
    //     }
    // }
    // else if (action.type === 'PROFILE_FAIL') {
    //     return {
    //         ...state,
            
    //         profileResponse: action.profileResponse,
    //     }
    // }

    return state;
}
export default profileReducer;