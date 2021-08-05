const initState = {
    personal: {},
    personalResponse: null,
    loader:false,
    
}

const personalloginReducer = (state = initState, action) => {
    if (action.type === 'GET_PERSONAL') {
        // console.log("ASdasd", action.personal);
        return {
            ...state,
            personal: action.personal,
            personalResponse:action.personalResponse,
            loader:action.loader,
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'PERSONAL_RESET') {
        return {
            ...state,
            personalResponse: null,
            loader:action.loader,
            
        }
    }
    else if (action.type === 'PERSONAL_SUCCESS') {
        return {
            ...state,
            personalResponse: action.personalResponse,
            loader:action.loader,
        }
    }
    else if (action.type === 'PERSONAL_FAIL') {
        return {
            ...state,
            personalResponse: action.personalResponse,
            loader:action.loader,
        }
    }

    return state;
}
export default personalloginReducer;