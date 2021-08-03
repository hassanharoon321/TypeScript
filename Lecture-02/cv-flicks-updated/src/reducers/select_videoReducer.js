const initState = {
    selectVideo: {},
    selectVideoResponse: null,
    
}

const selectVideoReducer = (state = initState, action) => {
    if (action.type === 'GET_SELECTVIDEO') {
        return {
            ...state,
            selectVideo: action.selectVideo,
            selectVideoResponse:action.selectVideoResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'SELECTVIDEO_RESET') {
        return {
            ...state,
            selectVideoResponse: null,
            
        }
    }
    else if (action.type === 'SELECTVIDEO_SUCCESS') {
        return {
            ...state,
            selectVideoResponse: action.selectVideoResponse,
        }
    }
    else if (action.type === 'SELECTVIDEO_FAIL') {
        return {
            ...state,
            selectVideoResponse: action.selectVideoResponse,
        }
    }

    return state;
}
export default selectVideoReducer;