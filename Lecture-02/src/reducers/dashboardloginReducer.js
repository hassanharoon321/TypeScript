const initState = {
    dashboardlogin: {},
    dashboardloginResponse: null,
    premium: null,

}

const dashboardLoginReducer = (state = initState, action) => {
    if (action.type === 'GET_DASHBOARDLOGIN') {
        return {
            ...state,
            dashboardlogin: action.dashboardlogin,
            dashboardloginResponse: action.dashboardloginResponse,
            premium: action.premium
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'DASHBOARDLOGIN_RESET') {
        return {
            ...state,

            dashboardloginResponse: null,

        }
    }
    else if (action.type === 'DASHBOARDLOGIN_SUCCESS') {
        return {
            ...state,

            dashboardloginResponse: action.dashboardloginResponse,
        }
    }
    else if (action.type === 'DASHBOARDLOGIN_FAIL') {
        return {
            ...state,

            dashboardloginResponse: action.dashboardloginResponse,
        }
    }

    return state;
}
export default dashboardLoginReducer;