import React, { Component } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'
//import Linked from "../Assests/";

class LinkedInPageTest extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  
  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
         <LinkedIn
          redirectUri={`https://cvvlogs.com/dashboard`}
          clientId="77ul9euvdop3a4"
          scope={["r_liteprofile", "r_emailaddress"]}
          state="34232423"
          
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          supportIE
          redirectPath='/linkedin'
          text=""
        > 
        
          {/* <img src={Linked} alt="Log in with Linked In" style={{ maxWidth: '180px' }} /> */}
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPageTest;