const initState = {
    professional: {},
    professionallogResponse: null,
    loading:false,
}

const professionalloginReducer = (state = initState, action) => {
    if (action.type === 'GET_PROFESSIONALLOG') {
        return {
            ...state,
            professional: action.professional,
            professionallogResponse:action.professionallogResponse,
            loading:action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'PROFESSIONALLOG_RESET') {
        return {
            ...state,
            professionallogResponse: null,
            loading:action.loading,
            
        }
    }
    else if (action.type === 'PROFESSIONALLOG_SUCCESS') {
        return {
            ...state,
            professionallogResponse: action.professionallogResponse,
            loading:action.loading,
        }
    }
    else if (action.type === 'PROFESSIONALLOG_FAIL') {
        return {
            ...state,
            professionallogResponse: action.professionallogResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default professionalloginReducer;