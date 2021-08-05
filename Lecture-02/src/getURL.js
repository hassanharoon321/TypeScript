// import React, { Component } from 'react';
// import Linked from "../src/Assests/linked-in-register.svg";
// import { LinkedIn } from 'react-linkedin-login-oauth2';
// import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'
// import "./index.css";
// import axios from 'axios';


// class LinkedInPage2 extends Component {
//   state = {
//     code: '',
//     errorMessage: '',
//   };

//   handleSuccess = (data) => {
//     this.setState({
//       code: data.code,
//       errorMessage: '',
//     });
//   }

//   handleFailure = (error) => {
//     this.setState({
//       code: '',
//       errorMessage: error.errorMessage,
//     });
//   }

//   callbackLinkedIn = ()=>{
//     const res = axios.get("https://www.linkedin.com/oauth/v2/accessToken",{
//       params:{
//         grant_type:"authorization_code",
//         code:this.state.code,
//         redirect_uri:"http://localhost:3000/linkedin",
//         client_id:"77ul9euvdop3a4",
//         client_secret:"A1chg63cqvG4l5y0",
//         scope:"r_liteprofile+r_emailaddress"
//       }
//     })
//     console.log(res)
//   }

//   render() {
//     const { code, errorMessage } = this.state;
//     return (
//       <div>
//         <LinkedIn
//           clientId="77ul9euvdop3a4"
//           callback={this.callbackLinkedIn}
//           onFailure={this.handleFailure}
//           onSuccess={this.handleSuccess}
//           redirectUri="http://localhost:3000/linkedin"
//           >
//           <img src={Linked} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
//         </LinkedIn>
//       </div>
//     );
//   }
// }

// export default LinkedInPage2;


import React, { useState, useEffect } from 'react'
import Linked from "../src/Assests/linked-in-register.svg";
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'
import "./index.css";
import axios from 'axios';

function LinkedInPage2() {
  const [code, setCode] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    callbackLinkedIn()
  }, [])


  const callbackLinkedIn = async() => {
    const res = await axios.get("https://www.linkedin.com/oauth/v2/accessToken", {
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "https://cvvlogs.com/cv-tube/auth.php",
        client_id: "77ul9euvdop3a4",
        client_secret: "A1chg63cqvG4l5y0",
        scope: "r_liteprofile+r_emailaddress"
      }
    })
    console.log(res)
  }


  const handleSuccess = (data) => {
    setCode(data.code)
  }

  const handleFailure = (error) => {
    setMessage(error.errorMessage)
  }
  return (
    <div>
      <LinkedIn
        clientId="77ul9euvdop3a4"
        callback={callbackLinkedIn}
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/linkedin"
      >
        <img src={Linked} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
      </LinkedIn>
    </div>
  )
}

export default LinkedInPage2













