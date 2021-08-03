const initState = {
    dashboard: {},
    dashboardResponse: null,

}

const dashboardReducer = (state = initState, action) => {
    if (action.type === 'GET_DASHBOARD') {
        return {
            ...state,
            dashboard: action.dashboard,
            dashboardResponse: action.dashboardResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'DASHBOARD_RESET') {
        return {
            ...state,

            dashboardResponse: null,

        }
    }
    else if (action.type === 'DASHBOARD_SUCCESS') {
        return {
            ...state,

            dashboardResponse: action.dashboardResponse,
        }
    }
    else if (action.type === 'DASHBOARD_FAIL') {
        return {
            ...state,

            dashboardResponse: action.dashboardResponse,
        }
    }

    return state;
}
export default dashboardReducer;