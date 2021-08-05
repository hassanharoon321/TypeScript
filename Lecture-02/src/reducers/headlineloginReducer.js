const initState = {
    headlinelogin: {},
    headlineloginResponse: null,
    loading:true,
    
}

const headlineloginReducer = (state = initState, action) => {
    if (action.type === 'GET_HEADLINELOGIN') {
        return {
            ...state,
            headlinelogin: action.headlinelogin,
            headlineloginResponse:action.headlineloginResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'HEADLINELOGIN_RESET') {
        return {
            ...state,
            headlineloginResponse: null,
            loading:action.loading,
            
        }
    }
    else if (action.type === 'HEADLINELOGIN_SUCCESS') {
        return {
            ...state,
            headlineloginResponse: action.headlineloginResponse,
            loading:action.loading,
        }
    }
    else if (action.type === 'HEADLINELOGIN_FAIL') {
        return {
            ...state,
            headlineloginResponse: action.headlineloginResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default headlineloginReducer;