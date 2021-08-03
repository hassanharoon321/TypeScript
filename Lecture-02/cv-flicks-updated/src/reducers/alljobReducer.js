const initState = {
    alljobs: {},
    alljobsResponse: null,
    
}

const alljobsReducer = (state = initState, action) => {
    if (action.type === 'GET_ALLJOBS') {
        return {
            ...state,
            alljobs: action.alljobs,
            alljobsResponse:action.alljobsResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'ALLJOBS_RESET') {
        return {
            ...state,
            
            alljobsResponse: null,
            
        }
    }
    else if (action.type === 'ALLJOBS_SUCCESS') {
        return {
            ...state,
            
            alljobsResponse: action.alljobsResponse,
        }
    }
    else if (action.type === 'ALLJOBS_FAIL') {
        return {
            ...state,
            
            alljobsResponse: action.alljobsResponse,
        }
    }

    return state;
}
export default alljobsReducer;