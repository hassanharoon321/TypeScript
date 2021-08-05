const initState = {
    topmanagement: {},
    topmanagementResponse: null,
    
}

const topmanagementReducer = (state = initState, action) => {
    if (action.type === 'GET_TOPMANAGEMENT') {
        return {
            ...state,
            topmanagement: action.topmanagement,
            topmanagementResponse:action.topmanagementResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'TOPMANAGEMENT_RESET') {
        return {
            ...state,
            
            topmanagementResponse: null,
            
        }
    }
    else if (action.type === 'TOPMANAGEMENT_SUCCESS') {
        return {
            ...state,
            
            topmanagementResponse: action.topmanagementResponse,
        }
    }
    else if (action.type === 'TOPMANAGEMENT_FAIL') {
        return {
            ...state,
            
            topmanagementResponse: action.topmanagementResponse,
        }
    }

    return state;
}
export default topmanagementReducer;