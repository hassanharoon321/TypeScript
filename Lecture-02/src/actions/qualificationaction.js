const config = require('../helpers/config.json');
export const getQualification = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/add_qualification_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}` },
        }).then(res => res.json()).then((response) => {
            const qualification = response.data
            dispatch({
                type: "GET_QUALIFICATION",
                qualification: qualification,
                qualificationResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_QUALIFICATION",
                qualification: {},
                qualificationResponse: null
            });
        })

    }
}

export const createQualification = (userId, qualification, course, course_spec, institute_name, institute_location, year) => {
    console.log(userId, qualification, course, course_spec, institute_name, institute_location, year)
    return (dispatch) => {
        dispatch({
            type: "QUALIFICATIONLOG_RESET",
            loading:false,
        });
        var data = [
            {
                "qualification": qualification !== null ? Number(qualification) : qualification,
                "course": course !== null ? Number(course) : course,
                "course_spec": course_spec !== null ? Number(course_spec) : course_spec,
                "institute_name": institute_name,
                "institute_location": institute_location !== null ? Number(institute_location) : institute_location,
                "year": year !== null ? Number(year) : year,
            }
        ];
        console.log("dddd", data)
        /// post request
        fetch(`${config['baseUrl']}/user/add_qualification_post.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
            body: JSON.stringify({
                "qualification": qualification !== null ? Number(qualification) : qualification,
                "course": course !== null ? Number(course) : course,
                "course_spec": course_spec !== null ? Number(course_spec) : course_spec,
                "institute_name": institute_name,
                "institute_location": institute_location !== null ? Number(institute_location) : institute_location,
                "year": year !== null ? Number(year) : year,
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
                type: "QUALIFICATIONLOG_SUCCESS",
                qualificationlogResponse: response,
                loading:true,

            });
            window.location = "/skills"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "QUALIFICATIONLOG_FAIL",
                qualificationlogResponse: "creation failed",
                loading:true,
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}



// createQualification