const initState = {
    personal: {},
    personalResponse: null,
    loading: true,

}

const personalReducer = (state = initState, action) => {
    if (action.type === 'GET_PERSONAL') {
        return {
            ...state,
            personal: action.personal,
            personalResponse: action.personalResponse,
            loading: action.loading,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'PERSONAL_RESET') {
        return {
            ...state,

            personalResponse: null,

        }
    }
    else if (action.type === 'PERSONAL_SUCCESS') {
        return {
            ...state,

            personalResponse: action.personalResponse,
        }
    }
    else if (action.type === 'PERSONAL_FAIL') {
        return {
            ...state,

            personalResponse: action.personalResponse,
        }
    }

    return state;
}
export default personalReducer;