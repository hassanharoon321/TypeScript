const initState = {
    whatWeDo: {},
    whatWeDoResponse: null,
    
}

const whatWeDoReducer = (state = initState, action) => {
    if (action.type === 'GET_WHATWEDO') {
        return {
            ...state,
            whatWeDo: action.whatWeDo,
            whatWeDoResponse:action.whatWeDoResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'WHATWEDO_RESET') {
        return {
            ...state,
            
            whatWeDoResponse: null,
            
        }
    }
    else if (action.type === 'WHATWEDO_SUCCESS') {
        return {
            ...state,
            
            whatWeDoResponse: action.whatWeDoResponse,
        }
    }
    else if (action.type === 'WHATWEDO_FAIL') {
        return {
            ...state,
            
            whatWeDoResponse: action.whatWeDoResponse,
        }
    }

    return state;
}
export default whatWeDoReducer;