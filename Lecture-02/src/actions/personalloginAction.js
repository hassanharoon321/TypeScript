const config = require('../helpers/config.json');
export const getPersonalLogin = (userId) => {
    return (dispatch) => {
            fetch(`${config['baseUrl']}/user/add_personal_get.php`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', "auth_id": `${userId}`, },
            }).then(res => res.json()).then((response) => {
                const personal = response.data
                console.log(personal)
                // const personalLang = response.data.stored_values.languages
                // console.log("kjhgf",personal)
                dispatch({
                    type: "GET_PERSONAL",
                    personal: personal,
                    personalResponse: "got it",
                    loader: true,
                });
               
            }).catch((error) => {
                console.log("error", error);
                dispatch({
                    type: "GET_PERSONAL",
                    personal: {},
                    personalResponse: null,
                    loader: true,
                });
                // alert("Please Check Your Internet Connection...")
            })

    }


}

