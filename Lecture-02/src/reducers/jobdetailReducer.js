const initState = {
    jobdetail: {},
    jobdetailResponse: null,
    
}

const jobdetailReducer = (state = initState, action) => {
    if (action.type === 'GET_JOBDETAIL') {
        return {
            ...state,
            jobdetail: action.jobdetail,
            jobdetailResponse:action.jobdetailResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'JOBDETAIL_RESET') {
        return {
            ...state,
            
            jobdetailResponse: null,
            
        }
    }
    else if (action.type === 'JOBDETAIL_SUCCESS') {
        return {
            ...state,
            
            jobdetailResponse: action.jobdetailResponse,
        }
    }
    else if (action.type === 'JOBDETAIL_FAIL') {
        return {
            ...state,
            
            jobdetailResponse: action.jobdetailResponse,
        }
    }

    return state;
}
export default jobdetailReducer;