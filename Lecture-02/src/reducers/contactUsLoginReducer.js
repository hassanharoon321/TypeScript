const initState = {
    contactUsLogin: {},
    contactUsLoginResponse: null,

}

const contactUsLoginReducer = (state = initState, action) => {
    if (action.type === 'GET_CONTACT_US_LOGIN') {
        return {
            ...state,
            contactUsLogin: action.contactUsLogin,
            contactUsLoginResponse: action.contactUsLoginResponse,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'CONTACT_US_LOGIN_RESET') {
        return {
            ...state,
            contactUsLoginResponse: null,

        }
    }
    else if (action.type === 'CONTACT_US_LOGIN_SUCCESS') {
        return {
            ...state,
            contactUsLoginResponse: action.contactUsLoginResponse,
        }
    }
    else if (action.type === 'CONTACT_US_LOGIN_FAIL') {
        return {
            ...state,
            contactUsLoginResponse: action.contactUsLoginResponse,
        }
    }

    return state;
}
export default contactUsLoginReducer;