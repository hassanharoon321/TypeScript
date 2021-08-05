import React, { useState } from "react";
import Modal from "react-modal";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "../Login/Login.css";
import "../Register/Register.css";
import "../ForgetPassword/ForgetPassword.css";
import Logo from "../../Assests/final-logo.png";
import Google from "../../Assests/google-register.svg";
import Facebook from "../../Assests/facebook.svg";
import LinkedIn from "../../Assests/linked-in-register.svg";
import { createRegister } from "../../actions/registerAction";
import { createForgetPassword } from "../../actions/forgetPasswordAction";
import { connect } from "react-redux";
import { SignIn, facebookLogin, googleLogin } from "../../actions/authAction";
import LinkedInPage2 from "../../getURL";
import FullPageLoader from "../fullpageloader/fullPageLoader";

Modal.setAppElement("#root");

function Navbar(props) {
  // const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [LoginmodalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [forgetModalIsOpen, setForgetModalIsOpen] = useState(false);
  const [username, setusername] = useState("");
  const [passwordlog, setpasswordlog] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confrimpassword, setConfirmPassword] = useState("");
  const [termsCheck, setTermsCheck] = useState("");
  const [ForgetEmail, setForgetEmail] = useState("");

  const addNewRegister = (e) => {
    // e.preventDefault();
    console.log("qwerty");
    if (confrimpassword === password) {
      props.createRegister(first_name, last_name, email, number, password);
    } else {
      alert("Confim Password Not Matched....");
    }
    // window.location.reload(false);
  };

  const newForget = async () => {
    console.log("qwerty", ForgetEmail);
    await props.createForgetPassword(ForgetEmail);
    // window.location.reload(false);
  };

  const ForgetFunctionality = () => {
    setForgetModalIsOpen(true);
    setLoginModalIsOpen(false);
  };
  const ForgetFunctionality2 = () => {
    setLoginModalIsOpen(true);
    setForgetModalIsOpen(false);
  };

  const registermodal = () => {
    setLoginModalIsOpen(true);
    setRegisterModalIsOpen(false);
  };
  const registermodal2 = () => {
    setRegisterModalIsOpen(true);
    setLoginModalIsOpen(false);
  };

  // (e) => setEmail(e.target.value)
  const handleName = (e) => {
    setFirst_name(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLastName = (e) => {
    setLast_name(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setNumber(e.target.value);
  };

  const onSubmitLogin = async () => {
    // console.log("Success:", props.auth.loading);
    await props.SignIn(username, passwordlog);
  };

  // const handleForget = (e) => {
  //   setForgetEmail(e.target.value);
  // };

  // document.querySelector(".btn").click(function() {
  //   if (!document.querySelector(this).classList.contains('active')) {
  //     document.querySelector(".s4d_nav_button").classList.remove("active");
  //     document.querySelector(this).classList.add("active");
  //   }
  // })

  //   const color=(e)=>{
  // e.preventDefault()
  // var r=e.target
  // r.style.color="blue !important"
  // ReactDOM.findDOMNode(r).classList.remove("text_gray ")
  // console.log(e.target)
  //   }

  return (


    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow p-0 m-0">
        <div className="container px-3">
          <Link className="navbar-brand" to="/home">
            <img src={Logo} className="p-0 m-0" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1 ">
                <NavLink
                  exact
                  className="nav-link active"
                  activeClassName="something-new-cand"
                  style={{ fontSize: "12px", color: "#707070" }}
                  to="/home"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item mx-1 ">
                <NavLink
                  exact
                  className="nav-link active"
                  activeClassName="something-new-cand"
                  style={{ fontSize: "12px", color: "#707070" }}
                  to="/jobs"
                >
                  JOBS
                </NavLink>
              </li>
              <li className="nav-item mx-1 ">
                <NavLink
                  exact
                  className="nav-link active"
                  activeClassName="something-new-cand"
                  style={{ fontSize: "12px", color: "#707070" }}
                  to="/whatwedo"
                >
                  HOW IT WORKS
                </NavLink>
              </li>
              <li
                className="nav-item mx-1"
                onClick={() => setLoginModalIsOpen(true)}
              >
                <Link
                  className="nav-link active text_gray text-of-nav-cand"
                  aria-current="page"
                  activeClassName="active"
                >
                  MESSAGES
                </Link>
              </li>
              <li
                className="nav-item mx-1"
                onClick={() => setLoginModalIsOpen(true)}
              >
                <Link
                  className="nav-link active text_gray text-of-nav-cand"
                  aria-current="page"
                  activeClassName="active"
                  exact
                >
                  LOGIN
                </Link>
              </li>
              {/* Login Modal Start */}
              <Modal
                isOpen={LoginmodalIsOpen}
                onRequestClose={() => setLoginModalIsOpen(false)}
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: "1",
                  },
                  content: {
                    position: "absolute",
                    margin: "0 auto",
                    width: "350px",
                    height: "467px",
                    top: "100px",
                    left: "0",
                    right: "0",
                    bottom: "100px",
                    border: "1px solid #ccc",
                    background: "#fff",
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
                  {/* <button onClick={()=>console.log("dddddd",props.auth.loading)}>fffffffff</button> */}
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
                      <label className="label-color-login">
                        Username or Email
                      </label>
                      <input
                        onChange={(e) => setusername(e.target.value)}
                        type="email"
                        className="form-control m-0 p-0"
                        placeholder="Type your username or email"
                        id="login-inp"
                        style={{ color: "#000" }}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="label-color-login">Password</label>
                      <input
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            console.log("enterrrr");
                            onSubmitLogin()
                          }
                        }}
                        onChange={(e) => setpasswordlog(e.target.value)}
                        type="password"
                        className="form-control m-0 p-0"
                        placeholder="Type your password"
                        id="login-inp"
                        style={{ color: "#000" }}
                      />
                    </div>
                  </div>
                  <div className="row mt-1 mb-3">
                    <div className="col-md-12 d-flex justify-content-end">
                      <small
                        className="forget-pass-login"
                        onClick={ForgetFunctionality}
                        style={{ cursor: "pointer" }}
                      >
                        {/* ---------------------------------------- */}
                        Forget Password?
                      </small>
                    </div>
                  </div>
                  {/* Input Ends */}

                  {/* Button Starts */}
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 d-flex justify-content-center">
                      {/* <Link to="dashboard" className="w-100"> */}
                      <button
                        className="btn btn-warning w-100 btn-login"
                        onClick={() => onSubmitLogin()}
                        disabled={
                          !username === false && !passwordlog === false
                            ? false
                            : true
                        }
                      >
                        Log in
                      </button>
                      {/* </Link> */}
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
                    <button
                      className="m-0 p-0 icon-reg-btn"
                      onClick={() => props.googleLogin()}
                    >
                      <img src={Google} alt="" />
                    </button>
                    <button
                      onClick={() => props.facebookLogin()}
                      className="m-0 p-0 icon-reg-btn"
                    >
                      <img src={Facebook} alt="" />
                    </button>

                    <button className="m-0 p-0 icon-reg-btn">
                      <LinkedInPage2 />
                      {/* <img src={LinkedIn} alt="" /> */}
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
                      <span
                        className="login-foot-reg"
                        onClick={() => registermodal2()}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        Register here
                      </span>
                    </p>
                  </div>

                  {props.auth.loading == true ? <></> : <FullPageLoader />}
                </div>
                {/* Footer Ends */}
              </Modal>
              {/* Login Modal End */}
              <li
                className="nav-item"
                onClick={() => setRegisterModalIsOpen(true)}
              >
                <a
                  className="nav-link active text_white py-1 px-2 mr-2 mt-1 color-of-reg text-of-nav-cand btn-of-main-div-cand"
                  aria-current="page"
                  href="#"
                  style={{ borderRadius: "7px" }}
                >
                  <i className="far fa-user pr-1"></i>REGISTER
                </a>
              </li>
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              {/* Register Modal Starts */}
              <Modal
                isOpen={registerModalIsOpen}
                onRequestClose={() => setRegisterModalIsOpen(false)}
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: "1",
                  },
                  content: {
                    position: "absolute",
                    margin: "0 auto",
                    width: "700px",
                    height: "550px",
                    top: "50px",
                    left: "0",
                    right: "0",
                    bottom: "50px",
                    border: "1px solid #ccc",
                    background: "#fff",
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
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <h1 className="register-head">Register</h1>
                  </div>
                  <div className="col-md-4"></div>
                </div>
                {/* Heading Starts */}

                {/* FIrst Input Starts */}
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="label-color-reg mt-3">First Name</label>
                      <input
                        onChange={handleName}
                        value={first_name}
                        type="text"
                        placeholder="Type your first name here"
                        className="form-control per-det-input"
                        id="reg-form-all"
                      />
                    </div>
                    {/* Last name Starts */}
                    <div className="col-md-6">
                      <label className="label-color-reg mt-3 ">Last Name</label>
                      <input
                        onChange={handleLastName}
                        value={last_name}
                        type="text"
                        placeholder="Type your last name here"
                        className="form-control per-det-input"
                        id="reg-form-all"
                      />
                    </div>
                    {/* Last name ends */}
                  </div>
                  {/* FIrst Input Ends */}

                  {/* Second Input Starts */}
                  <div className="row">
                    {/* Email Starts */}
                    <div className="col-md-6">
                      <label className="label-color-reg mt-3">Email</label>
                      <input
                        onChange={handleEmail}
                        required
                        value={email}
                        type="email"
                        placeholder="Type your email here"
                        className="form-control per-det-input"
                        id="reg-form-all"
                      />
                    </div>
                    {/* Email Ends */}
                    {/* Phone Number Starts */}
                    <div className="col-md-6">
                      <label className="label-color-reg mt-3">
                        Phone Number
                      </label>
                      <div className="d-flex">
                        <h6 className="pr-3 pt-2">+1</h6>
                        <input
                          onChange={handlePhone}
                          value={number}
                          type="text"
                          placeholder="Type your phone number"
                          className="form-control per-det-input"
                          maxLength="10"
                          // min="1"
                          // max="10"
                          id="reg-form-all"
                        />
                        {/* <input type="text" pattern="\d*" maxlength="4" /> */}
                      </div>
                    </div>
                    {/* Phone Number ends */}
                  </div>
                  {/* Second Input Ends */}

                  {/* Third Input Starts */}
                  <div className="row">
                    <div className="col-md-6">
                      <label className="label-color-reg mt-3 ">Password</label>
                      <input
                        onChange={handlePassword}
                        value={password}
                        type="password"
                        placeholder="Type your password here"
                        className="form-control per-det-input"
                        id="reg-form-all"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="label-color-reg mt-3">
                        Confirm Password
                      </label>
                      <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        value={confrimpassword}
                        placeholder="Type your password again"
                        className="form-control per-det-input"
                        id="reg-form-all"
                      />
                    </div>
                  </div>
                  {/* Third Input Ends */}

                  {/* Terms & Cond Text Starts */}
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-3">
                      <p className="reg-para d-flex">
                        <input
                          className="mt-1"
                          defaultChecked={termsCheck}
                          onChange={() => setTermsCheck(!termsCheck)}
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              console.log("enterrrr");
                              addNewRegister()
                            }
                          }}
                        />
                        <label for="vehicle1">
                          {" "}
                          By clicking "Register" you agree to our{" "}
                          <Link
                            to="terms-and-condition"
                            onClick={() => setRegisterModalIsOpen(false)}
                          >
                            <span className="term-n-cond">
                              Terms {`&`} Conditions
                            </span>
                          </Link>{" "}
                          as well as our{" "}
                          <Link
                            to="privacy-policy"
                            onClick={() => setRegisterModalIsOpen(false)}
                          >
                            <span className="term-n-cond">Privacy Policy</span>
                          </Link>
                        </label>
                      </p>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                  {/* Terms & Cond Text Ends */}

                  {/* Register Btn Starts */}
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <button
                        onClick={(e) => addNewRegister(e)}
                        disabled={
                          !first_name === false &&
                          !last_name === false &&
                          !email === false &&
                          !number === false &&
                          !password === false &&
                          !confrimpassword === false &&
                          !termsCheck === false
                            ? false
                            : true
                        }
                        className="btn btn-warning reg-btn-main w-100"
                      >
                        Register
                      </button>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </form>
                {/* Register Btn Ends */}

                {/* Or Starts */}
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <hr className="ruler-reg" />
                  </div>
                  <div className="col-md-2"></div>
                </div>
                {/* Or Ends */}

                {/* Footer Starts */}
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <p className="footer-reg-color">
                      Already have an account?
                      <span
                        className="login-foot-reg"
                        onClick={() => registermodal()}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        Login here
                      </span>
                    </p>
                  </div>
                  <div className="col-md-3"></div>
                  {props.registerReducer.loading == true ? (
                    <></>
                  ) : (
                    <FullPageLoader />
                  )}
                </div>
                {/* Footer Ends */}
              </Modal>
              {/* Register Modal Ends */}
              <li className="nav-item">
                <Link
                  className="nav-link active text_white py-1 px-2 mt-1 bg_orange text-of-nav-cand btn-of-main-div-cand"
                  aria-current="page"
                  onClick={() => setLoginModalIsOpen(true)}
                  style={{ borderRadius: "5px" }}
                >
                  <i className="far fa-gem pr-1"></i>PACKAGES
                </Link>
              </li>
              <li className="nav-item mx-1">
                <a
                  className="nav-link active"
                  activeClassName="something-new-cand"
                  style={{ fontSize: "12px", color: "#707070" }}
                  href="https://recruiter.cvvlogs.com/"
                  target="_blank"
                >
                  FOR RECRUITERS
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        {/* Forget Password Modal Starts */}
        <Modal
          isOpen={forgetModalIsOpen}
          onRequestClose={() => setForgetModalIsOpen(false)}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: "1",
            },
            content: {
              position: "absolute",
              margin: "0 auto",
              width: "350px",
              height: "280px",
              top: "190px",
              left: "0",
              right: "0",
              bottom: "190px",
              border: "1px solid #ccc",
              background: "#fff",
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
            <div className="col-md-12">
              <h1 className="forget-head">Forgot your password?</h1>
            </div>
          </div>
          {/* Heading Starts */}

          {/* Para Starts */}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <p className="para-forget">
                Enter your email address below and we will send you a reset
                password link.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
          {/* Para Ends */}

          {/* input Starts */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-md-12">
                <label className="forget-label">
                  Enter Registered Email ID
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  placeholder="Enter your Email ID"
                  id="forget-input"
                  value={ForgetEmail}
                  onChange={(e) => setForgetEmail(e.target.value)}
                  style={{ color: "#000" }}
                />
              </div>
            </div>
            {/* input Ends */}

            {/* Forget Pass Div Starts*/}
            <div className="row mt-1">
              <div className="col-md-12 d-flex justify-content-end">
                <small
                  className="login-instead"
                  onClick={() => ForgetFunctionality2()}
                  style={{ cursor: "pointer" }}
                >
                  Remember your password? Login instead
                </small>
              </div>
            </div>
            {/* Forget Pass Div Ends*/}

            {/* Forget Pass Div Starts*/}
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-warning btn-forget w-50"
                  onClick={() => newForget()}
                  disabled={!ForgetEmail === false ? false : true}
                />
              </div>
            </div>
          </form>
          {/* Forget Pass Div Ends*/}
        </Modal>
        {/* Forget Password Modal Ends */}
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  registerReducer: state.registerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  SignIn: (username, passwordlog) => dispatch(SignIn(username, passwordlog)),

  createRegister: (first_name, last_name, email, number, password) =>
    dispatch(createRegister(first_name, last_name, email, number, password)),

  createForgetPassword: (email) => dispatch(createForgetPassword(email)),

  facebookLogin: () => dispatch(facebookLogin()),
  googleLogin: () => dispatch(googleLogin()),
  // getPersonal: () => dispatch(getPersonal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
