const initState = {
    jobdetail: {},
    jobdetailloginResponse: null,
    loading:true,
}

const jobdetailloginReducer = (state = initState, action) => {
    if (action.type === 'GET_JOBDETAILLOGIN') {
        return {
            ...state,
            jobdetail: action.jobdetail,
            jobdetailloginResponse:action.jobdetailloginResponse,
            loading:action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'JOBDETAILLOGIN_RESET') {
        return {
            ...state,
            
            jobdetailloginResponse: null,
            
        }
    }
    else if (action.type === 'JOBDETAILLOGIN_SUCCESS') {
        return {
            ...state,
            
            jobdetailloginResponse: action.jobdetailloginResponse,
        }
    }
    else if (action.type === 'JOBDETAILLOGIN_FAIL') {
        return {
            ...state,
            
            jobdetailloginResponse: action.jobdetailloginResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default jobdetailloginReducer;