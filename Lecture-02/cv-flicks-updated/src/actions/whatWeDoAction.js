const config = require('../helpers/config.json');

export const getWhatWeDo = () => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/user/a_vid.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then((response) => {
            const whatWeDo = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_WHATWEDO",
                whatWeDo: whatWeDo,
                whatWeDoResponse: "got it"
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_WHATWEDO",
                whatWeDo: {},
                whatWeDoResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

