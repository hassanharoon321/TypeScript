const initState = {
    qualification: {},
    qualificationResponse: null,
    loading:true,
}

const qualificationReducer = (state = initState, action) => {
    if (action.type === 'GET_QUALIFICATION') {
        return {
            ...state,
            qualification: action.qualification,
            qualificationResponse:action.qualificationResponse,
            loading:action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'QUALIFICATION_RESET') {
        return {
            ...state,
            qualificationResponse: null,
            loading:action.loading,
            
        }
    }
    else if (action.type === 'QUALIFICATION_SUCCESS') {
        return {
            ...state,
            qualificationResponse: action.qualificationResponse,
            loading:action.loading,
        }
    }
    else if (action.type === 'QUALIFICATION_FAIL') {
        return {
            ...state,
            qualificationResponse: action.qualificationResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default qualificationReducer;