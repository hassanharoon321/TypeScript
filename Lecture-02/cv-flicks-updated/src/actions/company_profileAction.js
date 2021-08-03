const config = require('../helpers/config.json');

export const getCompanyProfile = (userId, id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/company_info_web.php?id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const CompanyProfile = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_COMPANYPROFILE",
                CompanyProfile: CompanyProfile,
                CompanyProfileResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_COMPANYPROFILE",
                CompanyProfile: {},
                CompanyProfileResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

