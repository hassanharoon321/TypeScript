const initState = {
    jobIndustry: {},
    jobIndustryResponse: null,
    
}

const jobIndustryReducer = (state = initState, action) => {
    if (action.type === 'GET_JOBINDUSTRY') {
        return {
            ...state,
            jobIndustry: action.jobIndustry,
            jobIndustryResponse:action.jobIndustryResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'JOBINDUSTRY_RESET') {
        return {
            ...state,
            jobIndustryResponse: null,
            
        }
    }
    else if (action.type === 'JOBINDUSTRY_SUCCESS') {
        return {
            ...state,
            
            jobIndustryResponse: action.jobIndustryResponse,
        }
    }
    else if (action.type === 'JOBINDUSTRY_FAIL') {
        return {
            ...state,
            
            jobIndustryResponse: action.jobIndustryResponse,
        }
    }

    return state;
}

export default jobIndustryReducer;