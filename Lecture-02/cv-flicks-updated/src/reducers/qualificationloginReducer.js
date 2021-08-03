const initState = {
    qualificationlog: {},
    qualificationlogResponse: null,
    loading:false,
    loadingGet:true,
}

const qualificationloginReducer = (state = initState, action) => {
    if (action.type === 'GET_QUALIFICATIONLOG') {
        return {
            ...state,
            qualificationlog: action.qualificationlog,
            qualificationlogResponse:action.qualificationlogResponse,
            loading:action.loading,
            loadingGet:action.loadingGet,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'QUALIFICATIONLOG_RESET') {
        return {
            ...state,
            qualificationlogResponse: null,
            loading:action.loading,
            loadingGet:action.loadingGet,
            
        }
    }
    else if (action.type === 'QUALIFICATIONLOG_SUCCESS') {
        return {
            ...state,
            qualificationlogResponse: action.qualificationlogResponse,
            loading:action.loading,
            loadingGet:action.loadingGet,
        }
    }
    else if (action.type === 'QUALIFICATIONLOG_FAIL') {
        return {
            ...state,
            qualificationlogResponse: action.qualificationlogResponse,
            loading:action.loading,
            loadingGet:action.loadingGet,
        }
    }

    return state;
}
export default qualificationloginReducer;