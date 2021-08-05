const initState = {
    logout: {},
    logoutResponse: null,
    
}

const logoutReducer = (state = initState, action) => {
    if (action.type === 'GET_LOGOUT') {
        return {
            ...state,
            logout: action.logout,
            logoutResponse:action.logoutResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'LOGOUT_RESET') {
        return {
            ...state,
            
            logoutResponse: null,
            
        }
    }
    else if (action.type === 'LOGOUT_SUCCESS') {
        return {
            ...state,
            
            logoutResponse: action.logoutResponse,
        }
    }
    else if (action.type === 'LOGOUT_FAIL') {
        return {
            ...state,
            
            logoutResponse: action.logoutResponse,
        }
    }

    return state;
}
export default logoutReducer;