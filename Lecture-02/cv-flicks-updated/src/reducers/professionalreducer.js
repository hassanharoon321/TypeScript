const initState = {
    professional: {},
    professionalResponse: null,
    loading:true,
    
}

const professionalReducer = (state = initState, action) => {
    if (action.type === 'GET_PROFESSIONAL') {
        return {
            ...state,
            professional: action.professional,
            professionalResponse:action.professionalResponse,
            loading:action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'PROFESSIONAL_RESET') {
        return {
            ...state,
            professionalResponse: null,
            loading:action.loading,
            
        }
    }
    else if (action.type === 'PROFESSIONAL_SUCCESS') {
        return {
            ...state,
            professionalResponse: action.professionalResponse,
            loading:action.loading,
        }
    }
    else if (action.type === 'PROFESSIONAL_FAIL') {
        return {
            ...state,
            professionalResponse: action.professionalResponse,
            loading:action.loading,
        }
    }

    return state;
}
export default professionalReducer;