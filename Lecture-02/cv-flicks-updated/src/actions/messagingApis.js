const config = require('../helpers/config.json');
export const getAllChats = (userId) => {
    var id = localStorage.getItem("auth_id")
    return fetch(`${config['baseUrl']}/user/all_chats.php`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "auth_id": `${id}` },

    })
}

export const getSpecificChat = (chatId) => {
    var id = localStorage.getItem("auth_id")
    
    return fetch(`${config['baseUrl']}/user/all_messages.php?chat_id=${chatId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "auth_id": `${id}` },

    })
}
export const sendMessages = (chatId, reciever, message) => {
    // const[loader,showLoader,hideLoader]=useFullPageLoader()
    //const { userName, password } = credentials;
    var id = localStorage.getItem("auth_id")
    return fetch(`${config['baseUrl']}/user/message.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "auth_id": `${id}` },
        body: JSON.stringify({

            "chat_id": chatId,
            "reciever": reciever,
            "message": message

        })
    })

}


export const reportMesage = (chatId) => {
    // const[loader,showLoader,hideLoader]=useFullPageLoader()
    //const { userName, password } = credentials;
    var id = localStorage.getItem("auth_id")
    return fetch(`${config['baseUrl']}/user/report.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "auth_id": `${id}` },
        body: JSON.stringify({

            "chat_id": chatId,

        })
    })

}
export const deleteMessage = (chatId) => {
    // const[loader,showLoader,hideLoader]=useFullPageLoader()
    //const { userName, password } = credentials;
    var id = localStorage.getItem("auth_id")
    return fetch(`${config['baseUrl']}/user/delete_chat.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "auth_id": `${id}` },
        body: JSON.stringify({

            "chat_id": chatId,

        })
    })

}