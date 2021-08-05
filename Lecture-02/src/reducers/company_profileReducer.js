const initState = {
    CompanyProfile: {},
    CompanyProfileResponse: null,

}

const CompanyProfiledReducer = (state = initState, action) => {
    if (action.type === 'GET_COMPANYPROFILE') {
        return {
            ...state,
            CompanyProfile: action.CompanyProfile,
            CompanyProfileResponse: action.CompanyProfileResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'COMPANYPROFILE_RESET') {
        return {
            ...state,

            CompanyProfileResponse: null,

        }
    }
    else if (action.type === 'COMPANYPROFILE_SUCCESS') {
        return {
            ...state,

            CompanyProfileResponse: action.CompanyProfileResponse,
        }
    }
    else if (action.type === 'COMPANYPROFILE_FAIL') {
        return {
            ...state,

            CompanyProfileResponse: action.CompanyProfileResponse,
        }
    }

    return state;
}
export default CompanyProfiledReducer;