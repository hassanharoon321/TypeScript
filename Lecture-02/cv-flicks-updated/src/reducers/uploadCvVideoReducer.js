const initState = {
    uploadCvVideo: {},
    uploadCvVideoResponse: null,
}

const uploadCvVideoReducer = (state = initState, action) => {
    if (action.type === 'GET_UPLOADCVVIDEO') {
        return {
            ...state,
            uploadCvVideo: action.uploadCvVideo,
            uploadCvVideoResponse:action.uploadCvVideoResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'UPLOADCVVIDEO_RESET') {
        return {
            ...state,
            
            uploadCvVideoResponse: null,
            
        }
    }
    else if (action.type === 'UPLOADCVVIDEO_SUCCESS') {
        return {
            ...state,
            
            uploadCvVideoResponse: action.uploadCvVideoResponse,
        }
    }
    else if (action.type === 'UPLOADCVVIDEO_FAIL') {
        return {
            ...state,
            
            uploadCvVideoResponse: action.uploadCvVideoResponse,
        }
    }

    return state;
}
export default uploadCvVideoReducer;