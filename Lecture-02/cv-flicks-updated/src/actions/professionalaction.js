const config = require('../helpers/config.json');
export const getProfessional = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/edit_professional_detail.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}` },
            auth_id: "215E/LqrKva/mvrc",
        }).then(res => res.json()).then((response) => {
            const professional = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_PROFESSIONAL",
                professional: professional,
                professionalResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_PROFESSIONAL",
                professional: {},
                professionalResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}


export const createProfessional = (userId, exp_level, industry, functional_area, wrk_lvl, salary, availability, employed_status, curr_title,
    curr_rec, employer_city, working_from) => {
    console.log(userId, exp_level, industry, functional_area, wrk_lvl, salary, availability, employed_status, curr_title,
        curr_rec, employer_city, working_from)
    return (dispatch) => {
        dispatch({
            type: "PROFESSIONAL_RESET",
            loading:false,
        });
        var data =
        {
            "eeeee": userId,
            "exp_level": exp_level !== null ? Number(exp_level) : exp_level,
            "industry": industry !== null ? Number(industry) : industry,
            "functional_area": functional_area !== null ? Number(functional_area) : functional_area,
            "wrk_lvl": wrk_lvl !== null ? Number(wrk_lvl) : wrk_lvl,
            "salary": salary !== null ? Number(salary) : salary,
            "availability": availability !== null ? Number(availability) : availability,
            "employed_status": employed_status !== null ? Number(employed_status) : employed_status,
            "curr_title": curr_title,
            "curr_rec": curr_rec,
            "employer_city": employer_city !== null ? Number(employer_city) : employer_city,
            "working_from": working_from,

        }
            ;
        console.log(data)
        /// post request
        fetch(`${config['baseUrl']}/user/add_proffessional_detail.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}` },
            body: JSON.stringify({
                "exp_level": exp_level !== null ? Number(exp_level) : exp_level,
                "industry": industry !== null ? Number(industry) : industry,
                "functional_area": functional_area !== null ? Number(functional_area) : functional_area,
                "wrk_lvl": wrk_lvl !== null ? Number(wrk_lvl) : wrk_lvl,
                "salary": salary !== null ? Number(salary) : salary,
                "availability": availability !== null ? Number(availability) : availability,
                "employed_status": employed_status !== null ? Number(employed_status) : employed_status,
                "curr_title": curr_title,
                "curr_rec": curr_rec,
                "employer_city": employer_city !== null ? Number(employer_city) : employer_city,
                "working_from": working_from,

            })
        }).then(res => {
            console.log("res aqib", res)
            if (res.status !== 200) {
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "PROFESSIONAL_SUCCESS",
                professionalResponse: response,
                loading:true,

            });
            window.location = "/qualificationdetails"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "PROFESSIONAL_FAIL",
                professionalResponse: "creation failed",
                loading:true,
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

