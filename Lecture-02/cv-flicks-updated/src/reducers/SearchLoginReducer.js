const initState = {
    Searchlogin: {},
    SearchloginResponse: null,
    searchData: {}
}

const SearchLoginReducer = (state = initState, action) => {
    // console.log("asdas", action.type + " " + action.searchData);
    if (action.type === 'GET_SEARCHLOGIN') {
        return {
            ...state,
            Searchlogin: action.Searchlogin,
            // searchData: action.searchData,
            SearchloginResponse: action.SearchloginResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'SEARCHLOGIN_RESET') {
        return {
            ...state,
           searchData: action.searchData,
            SearchloginResponse: null,

        }
    }
    else if (action.type === 'SEARCHLOGIN_SUCCESS') {
        return {
            ...state,
            searchData: action.searchData,
            SearchloginResponse: action.SearchloginResponse,
        }
    }
    else if (action.type === 'SEARCHLOGIN_FAIL') {
        return {
            ...state,
            searchData: {},
            SearchloginResponse: action.SearchloginResponse,
        }
    }

    return state;
}
export default SearchLoginReducer;