const initState = {
    dashboardjob: {},
    dashboardjobResponse: null,
    
}

const dashboardjobReducer = (state = initState, action) => {
    if (action.type === 'GET_DASHBOARDJOB') {
        return {
            ...state,
            dashboardjob: action.dashboardjob,
            dashboardjobResponse:action.dashboardjobResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'DASHBOARDJOB_RESET') {
        return {
            ...state,
            
            dashboardjobResponse: null,
            
        }
    }
    else if (action.type === 'DASHBOARDJOB_SUCCESS') {
        return {
            ...state,
            
            dashboardjobResponse: action.dashboardjobResponse,
        }
    }
    else if (action.type === 'DASHBOARDJOB_FAIL') {
        return {
            ...state,
            
            dashboardjobResponse: action.dashboardjobResponse,
        }
    }

    return state;
}
export default dashboardjobReducer;