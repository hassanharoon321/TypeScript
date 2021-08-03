// import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import "./Login.css";
import Google from "../../Assests/google-register.svg";
import Facebook from "../../Assests/facebook.svg";
import LinkedIn from "../../Assests/linked-in-register.svg";
import React, { Component , AsyncStorage} from 'react';
import { Link } from 'react-router-dom';
import {signIn} from '../../actions/authAction' 
import { connect } from 'react-redux';

Modal.setAppElement("#root");

class  Login extends React.Component{
  // const [LoginmodalIsOpen, setLoginModalIsOpen] = useState(false);
  constructor(props) {
    super(props);
this.state={
  username:'',
  password:'',
  auth_id:'',
  LoginmodalIsOpen:false

}


}



onSubmit = async(username,password) => {


    console.log('Success:', username,password);
    await this.props.signIn(username,password)
// console.log("login data",this.props.auth)
// if(this.props.auth.authToken!==null){
// 	window.open("/")
// }


};
        render(){  
    // if(this.props.auth.auth_id!==null){
    //  this.props.history.push("/dashboard")
    // }
    console.log("ggggg",this.props)

  return (
    <div>
      {/* <button onClick={() => this.setState({LoginmodalIsOpen:true})}>Login</button> */}

      <Modal
        isOpen={LoginmodalIsOpen}
        onRequestClose={() => this.setState({LoginmodalIsOpen:false})}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          content: {
            position: "absolute",
            margin: "0 auto",
            width: "350px",
            top: "100px",
            left: "0",
            right: "0",
            bottom: "100px",
            border: "1px solid #ccc",
            background: "#fff",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            boxShadow: "0 0 5px 5px #f2f2f2",
            borderRadius: "20px",
            background: "#fff",
            border: "1px solid #fff",
          },
        }}
      >
        {/* Heading Starts */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="login-head">Login</h1>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* Heading Starts */}

        {/* Input Starts */}
        <div className="row">
          <div className="col-md-12 mt-3">
          <label className="label-color-login">Username or Email</label>
          <input
          onChange={(text) => this.setState({
            username:text.target.value
           })}
            type="text"
            className="form-control m-0 p-0"
            placeholder="Type your username or email"
            id="login-inp"
          />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
          <label className="label-color-login">Password</label>
          <input
          onChange={(text) => this.setState({
            password:text.target.value
           })}
            type="text"
            className="form-control m-0 p-0"
            placeholder="Type your password"
            id="login-inp"
          />
          </div>
        </div>
          <div className="row mt-1 mb-3">
          <div className="col-md-12 d-flex justify-content-end">
          <small className="forget-pass-login">Forget Password?</small>
          </div>
          </div>
        {/* Input Ends */}

        {/* Button Starts */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 d-flex justify-content-center">
            <button className="btn btn-warning w-100 btn-login"  onClick={()=>this.onSubmit(this.state.username,this.state.password)}>Login</button>
            {/* onClick={() => setLoginModalIsOpen(false)}  */}
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Button Ends */}

        {/* Horizontal Rule Starts */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <hr />
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Horizontal Rule Ends */}

        {/* Icons Starts */}
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 m-0 p-0 d-flex justify-content-center">
            <button className="m-0 p-0 icon-reg-btn">
              <img src={Google} alt="" />
            </button>
            <button className="m-0 p-0 icon-reg-btn">
              <img src={Facebook} alt="" />
            </button>
            <button className="m-0 p-0 icon-reg-btn">
              <img src={LinkedIn} alt="" />
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* Icons Ends */}

        {/* Footer Starts */}
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <p className="footer-reg-color">
              Dont have an account?
              <span className="login-foot-reg"> Register here</span>
            </p>
          </div>
        </div>
        {/* Footer Ends */}
      </Modal>
    </div>
  );
      }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (username,password) => dispatch(signIn(username,password)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
