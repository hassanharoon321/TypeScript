import React, { Component } from "react";
import "./Message.css";
import Nav2 from "../../Components/Nav2/Nav2";
import MessageProfile from "../../Assests/messaging/message.png";
import PlusIcon from "../../Assests/messaging/Plus.svg";
import ImageIcon from "../../Assests/messaging/image.svg";
import ReportButton from "../../Assests/messaging/report-button.svg";
import { getAllChats, getSpecificChat, sendMessages, reportMesage, deleteMessage } from "../../actions/messagingApis";
import { useState, useEffect } from "react";
import ReactScrollableFeed from "react-scrollable-feed"
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
//import { useEffect } from "react";

class Messaging extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      allChats: [],
      allMsgs: [],
      chattId: null,
      userrId: null,
      msgText: null,
      userName: null,
      userImg: null,
      searchItem: "", chatLoading: false, chatLoading2: false
    };
  }
  //   const [allChats,setAllChats]=useState([])
  //   const [allMsgs,setAllMsgs]=useState([])
  //   const [chattId,setChattId]=useState(null)
  //   const [userrId,setUserrId]=useState(null)
  //   const [msgText,setMsgText]=useState(null)
  // const [userName,setUserName]=useState(null)
  // const [userImg,setUserImg]=useState(null)

  getAllChatMessages = async () => {
    await getAllChats().then(res => res.json()).then(response => {
      this.setState({
        chatLoading2: false
      })
      // console.log("llllllllll", response.data);
      if (JSON.stringify(response.data.all_chats) !== JSON.stringify(this.state.allChats)) {

        this.setState({
          allChats: response.data.all_chats
        })

      }
      //setAllChats(response.data.all_chats)
      //setTimeout(this.getAllChatMessages,1000)
    }).catch(e => {
      setTimeout(this.getAllChatMessages, 3000)
    })
  }
  onChatSelect = (chatId, userrId, username, userImg) => {
    // console.log(username);
    this.setState({
      allMsgs: [],
      chattId: null,
      userrId: null,
      userName: null,

    })
    // setAllMsgs([])
    // setUserName(null)
    // setChattId(null)
    // setUserrId(null)

    this.singleUserMessage(chatId, userrId, username, userImg)
  }

  singleUserMessage = async (chatId, userrId, username, userImg) => {
    // console.log(chatId, userrId, username);

    // if(this.state.userName==null){
    // //   setUserName(username)
    // //   setChattId(chatId)
    // // setUserrId(userrId)
    // this.setState({

    //   chattId:chatId,
    //   userrId:userrId,
    //   userName:username,

    // })
    // }
    //setAllMsgs([])
    //setUserName(username)
    await getSpecificChat(chatId).then(res => res.json()).then(response => {
      // console.log("ssssiii", response.data);
      //setAllChats(response.data.all_chats)


      //userName==null?setUserName(username):userName
      if (JSON.stringify(response.data.all_messages) !== JSON.stringify(this.state.allMsgs)) {
        this.setState({
          allMsgs: response.data.all_messages,

        })
        // console.log(("lists are  not equal"));
      }
      else if (JSON.stringify(response.data.all_messages) == JSON.stringify(this.state.allMsgs)) {
        // console.log("lists are eqaul");
      }
      this.setState({
        chatLoading: false
      })
      //setAllMsgs(response.data.all_messages)
      //setTimeout(this.singleUserMessage(chatId,userrId,username,userImg),1000)
    }).catch(e => {
      // console.log(e);
      //setTimeout(singleUserMessage,3000)
    })
  }
  sendMessage = async (e) => {

    if (this.state.msgText == '' || this.state.msgText == null || this.state.msgText == undefined) {
      alert('Enter Message please!')
      return
    }

    await sendMessages(this.state.chattId, this.state.userrId, this.state.msgText).then(res => res.json()).then(response => {
      // this.singleUserMessage(this.state.chattId, this.state.userrId)
      e.preventDefault()
      document.getElementById('msgbox').value = ''
      this.setState({
        msgText: ""
      })
    }).catch(e => {
      // console.log(e);
      document.getElementById('msgbox').value = ''
      this.setState({
        msgText: ""
      })
      setTimeout(this.singleUserMessage, 3000)
    })
  }

  reportMeassage = async () => {
    await reportMesage(this.state.chattId).then(res => res.json()).then(response => {
      window.location.reload(false)
    }).catch(e => {
      // console.log(e);
    })
  }
  deleteMeassage = async () => {
    await deleteMessage(this.state.chattId).then(res => res.json()).then(response => {
      window.location.reload(false)
    }).catch(e => {
      // console.log(e);
    })
  }
  // useEffect(()=>{
  //   getAllChatMessages()
  // },[])
  componentDidMount() {
    this.setState({
      chatLoading2: true
    })
    setInterval(() => this.getAllChatMessages(), 3000);
  }
  dispayChat = async (chatId, userrId, username, userImg) => {
    // console.log('apply api');
    //setInterval(()=>alert(chatId),3000)
    // setInterval(() => {
    //   alert(chatId)
    // }, 3000);
    this.setState({
      allMsgs: [],
      chattId: chatId,
      userrId: userrId,
      userName: username,
      chatLoading: true,


    })
    await setInterval(() => this.singleUserMessage(this.state.chattId, this.state.userrId, this.state.userName, userImg), 5000)

  }

  render() {
    const { allChats,
      allMsgs,
      chattId,
      userrId,
      msgText,
      userName,
      userImg } = this.state
    return (
      <>
        <Nav2 />
        <div className="container py-5 px-4">
          <h1 className="mb-3 messaging-head-main">Messages</h1>

          {allChats.length > 0 ?
            <div className="row rounded-lg overflow-hidden shadow">
              {/* Users box*/}
              <div className="col-3 px-0">
                <div className="bg-white">
                  <div className="px-4 py-2">
                    {/* Input of User Starts */}
                    <div className="inner-addon right-addon">
                      <i className="glyphicon glyphicon-search"></i>
                      <input
                        type="text"
                        onChange={(e) => this.setState({
                          searchItem: e.target.value
                        })}
                        className="form-control"
                        placeholder="Search users"
                        style={{ borderRadius: "30px", background: "#F8F8F8" }}
                      />
                    </div>
                    {/* Input of User Ends */}
                  </div>
                  <div className="messages-box">
                    <div className="list-group rounded-0">{
                      allChats.length > 0 ? allChats
                        .filter((val) => {
                          if (this.state.searchItem == "") {
                            return val;
                          } else if (
                            val.user_name
                              .toLowerCase()
                              .includes(this.state.searchItem.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map(chat => (
                          <>
                            {/* <button onClick={()=>console.log(chat)}>jjjj</button> */}
                            <button
                              onClick={() => this.dispayChat(chat.chat_id, chat.user_id, chat.user_name, chat.user_img)}
                              className="list-group-item list-group-item-action text-white rounded-0 pl-0 pl-lg-3 pl-md-3">
                              <div className="media">
                                <img
                                  src={chat.user_img}
                                  alt="user"
                                  width="85px"
                                  height="50px"
                                  className="rounded-circle d-lg-block d-md-block d-none"
                                />
                                <img
                                  src={chat.user_img}
                                  alt="user"
                                  className="rounded-circle d-lg-none d-md-none d-block"
                                  style={{ width: "100%", height: "40px" }}
                                />
                                <div className="media-body ml-4 pl-3 d-lg-block d-md-none d-none">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0 user-namecoloe-blue">
                                      {chat.user_name}
                                    </h6>
                                  </div>
                                  <p className="mb-0 text-small skill-color-messaing">
                                    {chat.last_message ? (chat.last_message.length < 10 ? chat.last_message : chat.last_message.slice(0, 10) + "...") : ""}
                                  </p>
                                </div>
                              </div>
                            </button>
                          </>
                        )) : ""
                    }

                      {/* Apis Starts Here */}

                      {/* Apis Ends here */}
                      {/* <a
                        href="#"
                        className="list-group-item list-group-item-action list-group-item-light rounded-0"
                      ></a> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Chat Box*/}
              <div className="col-9  px-0 pb-3">
                <div className="px-4 py-2" style={{ background: "#F8F8F8" }}>
                  {/* Head Section of user message Starts */}
                  <div className="row">
                    <div className="col-9 col-lg-11 col-md-10 col-9">
                      <h6 className="m-0 p-0 user-namecoloe-blue">{userName}</h6>
                      {/* <p className="m-0 p-0 skill-color-messaing">
                    Graphics Designing
                  </p> */}
                    </div>
                    <div className="col-lg-1 col-md-2 col-3">
                      {
                        userName !== "" && userName !== null && userName !== "" !== undefined ?
                          <>
                            <img src={ReportButton} alt=""
                              type="button"
                              className="btn dropdown-toggle pl-4 pt-1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <ul className="dropdown-menu border-0 text-center trans" >
                              <li
                                onClick={() => this.reportMeassage()}
                                style={{
                                  fontSize: "15px",
                                  color: "#707070",
                                  cursor: "pointer",
                                }}
                              >
                                Report
                              </li>
                              <li
                                onClick={() => this.deleteMeassage()}
                                className="pt-2"
                                style={{
                                  fontSize: "15px",
                                  color: "red",
                                  cursor: "pointer",
                                }}
                              >
                                Delete
                              </li>

                            </ul>
                          </>
                          :
                          ""
                      }
                    </div>
                  </div>
                  {/* Head Section of user message Ends */}
                </div>
                <div className=" py-5 bg-white" ref="messageList" style={{ height: "603px", overflowY: "hidden" }}>
                  <ReactScrollableFeed>
                    {/* Reciever Message*/}
                    {allMsgs.length > 0 ?
                      allMsgs.map(msg => (
                        <>
                          {msg.sent_or_recvd == 1 ?
                            <div className="media w-50 ml-auto mb-3">
                              <div className="media-body mainmain">
                                <div className="message-text-user-color rounded py-2 px-3 mb-2">
                                  <p className="text-small mb-0 text-white" style={{ overflowWrap: "anywhere" }}>
                                    {/* {we are sending msg} */}
                                    {msg.message}
                                  </p>
                                </div>
                              </div>
                            </div> :
                            <div className="media w-50 mb-3">
                              {/* <img
                src={MessageProfile}
                alt="user"
                width={50}
                className="rounded-circle"
              /> */}
                              <div className="media-body ml-3 ">
                                <div className="message-sender-user-color rounded py-2 px-3 mb-2">
                                  <p className="text-small mb-0 text-muted tezt-coodkn" style={{ overflowWrap: "anywhere" }}>
                                    {/* {we are recieving} */}
                                    {msg.message}
                                  </p>
                                </div>
                              </div>
                            </div>
                          }
                        </>
                      ))
                      :
                      <div className="text-center mt-5 pt-5"><p className="text-muted mt-5 pt-5">Tap to access messages!</p></div>
                    }
                  </ReactScrollableFeed>


                </div>
                {/* Typing area */}
                <div className="ml-4 mt-2">
                  <div className="row">

                    <div className="col-lg-11 col-md-10 col-9">
                      {chattId !== null && chattId !== undefined ?
                        <input
                          type="text"
                          id="msgbox"
                          onChange={(e) => this.setState({ msgText: e.target.value })}
                          className="form-control"
                          placeholder="Type your message here......"
                          style={{ borderRadius: "30px", background: "#F8F8F8" }}
                          onKeyPress={e => {
                            if (e.key === 'Enter') {
                              console.log("enterrrr");
                              this.sendMessage(e)
                            }
                          }}
                        /> : ""
                      }

                    </div>
                    <div className="col-lg-1 col-md-2 col-3 pl-0 pt-1" style={{ cursor: "pointer" }}>
                      {
                        allMsgs.length>0?
                        
                      <i className="fas fa-paper-plane border p-2 text-primary" style={{ borderRadius: "50%" }} onClick={(e) => this.sendMessage(e)}></i>
                      :""
                    }
                      {/* <img 
                  onClick={()=>this.sendMessage()}
                  src={PlusIcon} alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : "Message will appear here!"
          }
          {this.state.chatLoading2 ? <FullPageLoader /> : null}
          {this.state.chatLoading ? <FullPageLoader /> : null}
        </div>
      </>
    );
  }
}

export default Messaging;
