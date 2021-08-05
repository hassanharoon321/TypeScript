const initState = {
    forgetPassword: {},
    forgetPasswordResponse: null,

}

const forgetPasswordReducer = (state = initState, action) => {
    if (action.type === 'GET_FORGETPASSWORD') {
        return {
            ...state,
            forgetPassword: action.forgetPassword,
            forgetPasswordResponse: action.forgetPasswordResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'FORGETPASSWORD_RESET') {
        return {
            ...state,
            forgetPasswordResponse: null,

        }
    }
    else if (action.type === 'FORGETPASSWORD_SUCCESS') {
        return {
            ...state,
            forgetPasswordResponse: action.forgetPasswordResponse,
        }
    }
    else if (action.type === 'FORGETPASSWORD_FAIL') {
        return {
            ...state,
            forgetPasswordResponse: action.forgetPasswordResponse,
        }
    }

    return state;
}
export default forgetPasswordReducer;