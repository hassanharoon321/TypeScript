const config = require('../helpers/config.json');
export const getPersonal = (userId) => {
    return (dispatch) => {
        fetch(`${config['baseUrl']}/user/add_personal_get.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "auth_id": `${userId}` },
        }).then(res => res.json()).then((response) => {
            const personal = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_PERSONAL",
                personal: personal,
                personalResponse: "got it",
                loading: false,
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_PERSONAL",
                personal: {},
                personalResponse: null,
                loading: false,
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

