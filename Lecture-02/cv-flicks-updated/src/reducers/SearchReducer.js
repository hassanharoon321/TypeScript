const initState = {
    Search: {},
    SearchResponse: null,
    searchData: {}
}

const SearchReducer = (state = initState, action) => {
    if (action.type === 'GET_SEARCH') {
        return {
            ...state,
            Search: action.Search,
            // searchData: action.searchData,
            SearchResponse: action.SearchResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'SEARCH_RESET') {
        return {
            ...state,
            searchData: action.searchData,
            SearchResponse: null,

        }
    }
    else if (action.type === 'SEARCH_SUCCESS') {
        return {
            ...state,
            searchData: action.searchData,
            SearchResponse: action.SearchResponse,
        }
    }
    else if (action.type === 'SEARCHL_FAIL') {
        return {
            ...state,
            searchData: {},
            SearchResponse: action.SearchResponse,
        }
    }

    return state;
}
export default SearchReducer;