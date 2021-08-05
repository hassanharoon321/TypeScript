const initState = {
    headline: {},
    headlineResponse: null,
    
}

const headlineReducer = (state = initState, action) => {
    if (action.type === 'GET_HEADLINE') {
        return {
            ...state,
            headline: action.headline,
            headlineResponse:action.headlineResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'HEADLINE_RESET') {
        return {
            ...state,
            
            headlineResponse: null,
            
        }
    }
    else if (action.type === 'HEADLINE_SUCCESS') {
        return {
            ...state,
            
            headlineResponse: action.headlineResponse,
        }
    }
    else if (action.type === 'HEADLINE_FAIL') {
        return {
            ...state,
            
            headlineResponse: action.headlineResponse,
        }
    }

    return state;
}
export default headlineReducer;