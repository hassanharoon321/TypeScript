const config = require('../helpers/config.json');
export const getProfessionalLogin = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/edit_professional_detail.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
        }).then(res => res.json()).then((response) => {
            const professional = response.data
            dispatch({
                type: "GET_PROFESSIONALLOG",
                professional: professional,
                professionallogResponse: "got it",
                loading:true,
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_PROFESSIONALLOG",
                professional: {},
                professionallogResponse: null,
                loading:true,
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}


export const createProfessionalLogin = (userId,exp_level,industry,functional_area,wrk_lvl,salary,availability,employed_status,curr_title,
    curr_rec,employer_city,working_from) => {
    console.log(userId,exp_level,industry,functional_area,wrk_lvl,salary,availability,employed_status,curr_title,
        curr_rec,employer_city,working_from)
    return (dispatch) => {
        dispatch({
            type: "PROFESSIONALLOG_RESET",
            loading:false,
        });
        // var data = 
        //     {
        //         "exp_level": exp_level !== null ? Number(exp_level) : exp_level,
        //         "industry": industry !== null ? Number(industry) : industry,
        //         "functional_area": functional_area !== null ? Number(functional_area) : functional_area,
        //         "wrk_lvl": wrk_lvl !== null ? Number(wrk_lvl) : wrk_lvl,
        //         "salary": salary !== null ? Number(salary) : salary,
        //         "availability": availability !== null ? Number(availability) : availability,
        //         "employed_status": employed_status !== null ? Number(employed_status) : employed_status,
        //         "curr_title": curr_title,
        //         "curr_rec": curr_rec,
        //         "employer_city": employer_city !== null ? Number(employer_city) : employer_city,
        //         "working_from": working_from,

        //     }
        // ;
        // console.log(data)
        /// post request

        var requestBody = JSON.stringify({
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

        console.log("Asd", requestBody);

        fetch(`${config['baseUrl']}/user/edit_proffessional_detail_post.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: requestBody
        }).then(res => {
            console.log("res aqib", res)
            if(res.status !== 200){
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            dispatch({
                type: "PROFESSIONALLOG_SUCCESS",
                professionallogResponse: response,
                loading:true

            });
                window.location="/profile"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "PROFESSIONALLOG_FAIL",
                professionallogResponse: "creation failed",
                loading:true
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

