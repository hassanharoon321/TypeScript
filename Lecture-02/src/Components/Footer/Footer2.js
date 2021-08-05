import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import GooglePlay from "../../Assests/google-play.svg";
import { createForgetPassword } from "../../actions/forgetPasswordAction";
import Google from "../../Assests/google-register.svg";
import Facebook from "../../Assests/facebook.svg";
import LinkedIn from "../../Assests/linked-in-register.svg";
import LinkedInPage from "../../getURL";
import { SignIn, facebookLogin, googleLogin } from "../../actions/authAction";
import { createRegister } from "../../actions/registerAction";
import AppStore from "../../Assests/app-store.svg";
import FullPageLoader from "../fullpageloader/fullPageLoader";
import "./Footer.css";
import { connect } from 'react-redux';

Modal.setAppElement("#root");

function FooterTwo(props) {
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

  const onSubmit = async (username, passwordlog) => {

    console.log("Success:", props.auth.loading);
    await props.SignIn(username, passwordlog);
  };
  const ForgetFunctionality = () => {
    setForgetModalIsOpen(true);
    setLoginModalIsOpen(false);
  };
  const registermodal2 = () => {
    setRegisterModalIsOpen(true);
    setLoginModalIsOpen(false);
  };
  const handleName = (e) => {
    setFirst_name(e.target.value);
  };
  const handleLastName = (e) => {
    setLast_name(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setNumber(e.target.value);
  };
  const registermodal = () => {
    setLoginModalIsOpen(true);
    setRegisterModalIsOpen(false);
  };
  const addNewRegister = (e) => {
    e.preventDefault();
    console.log("qwerty");
    if (confrimpassword === password) {
      props.createRegister(first_name, last_name, email, number, password);
    } else {
      alert("Confim Password Not Matched....");
    }
    // window.location.reload(false);
  };
  // const email = info@cvflicks.com;
  return (
    <div
      className="container-fluid p-5"
      style={{ backgroundColor: "#362658", color: "#fff" }}
    >
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
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-md-12 mt-3">
              <label className="label-color-login">
                Username or Email
              </label>
              <input
                onChange={(e) => setusername(e.target.value)}
                value={username}
                required
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
                onChange={(e) => setpasswordlog(e.target.value)}
                value={passwordlog}
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
                onClick={() => onSubmit(username, passwordlog)}
                disabled={
                  !username === false && !passwordlog === false
                    ? false
                    : true
                }
              >
                Login
              </button>
              {/* </Link> */}
            </div>
            <div className="col-md-1"></div>
          </div>
        </form>
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
              <LinkedInPage />
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

          {
            props.auth.loading == true ?
              <></>
              :
              <FullPageLoader />
          }


        </div>
        {/* Footer Ends */}
      </Modal>
      {/* ---------------------------Login Modal End--------------------------------- */}


      {/* ----------------Register Modal Starts------------------------ */}
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
            top: "40px",
            left: "0",
            right: "0",
            bottom: "40px",
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
                className="form-control"
                id="reg-form-all"
                style={{ color: "#000" }}
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
                className="form-control"
                id="reg-form-all"
                style={{ color: "#000" }}
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
                className="form-control"
                id="reg-form-all"
                style={{ color: "#000" }}
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
                  className="form-control"
                  maxLength="10"
                  // min="1"
                  // max="10"
                  id="reg-form-all"
                  style={{ color: "#000" }}
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
                className="form-control"
                id="reg-form-all"
                style={{ color: "#000" }}
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
                className="form-control"
                id="reg-form-all"
                style={{ color: "#000" }}
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
          {
            props.registerReducer.loading == true ?
              <></>
              :
              <FullPageLoader />
          }
        </div>
        {/* Footer Ends */}
      </Modal>
      {/* --------------Register Modal Ends------------------- */}


      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <h6>Company</h6>
            {
              localStorage.getItem("auth_id") !== null && localStorage.getItem("auth_id") !== undefined && localStorage.getItem("auth_id") !== "" ?
                <>
                  <Link to="/dashboard" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Home</p></Link>
                  <Link to="/privacy-policy" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Privacy Policy</p></Link>
                  <Link to="/terms-and-condition" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Terms {`&`} Conditions</p></Link>
                  <Link to="/tips" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Tips {`&`} Recommendation</p></Link>
                </>
                :
                <>
                  <Link to="/home" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Home</p></Link>
                  <Link to="/privacy-policy" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Privacy Policy</p></Link>
                  <Link to="/terms-and-condition" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Terms {`&`} Conditions</p></Link>
                  <Link to="/tips" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Tips {`&`} Recommendation</p></Link>
                </>
            }

          </div>
          <div className="col-md-2">
            <h6>Job Seekers</h6>
            {
              localStorage.getItem("auth_id") !== null && localStorage.getItem("auth_id") !== undefined && localStorage.getItem("auth_id") !== "" ?
                <>
                  <Link to="/search_login" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Search</p></Link>
                  <Link to="/jobs-login" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Browse Jobs</p></Link>
                  <Link to="/create-job-alert" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Create a Job Alert</p></Link>
                </>
                :
                <>
                  <p className="table-text0-small" onClick={() => setLoginModalIsOpen(true)} style={{ cursor: "pointer" }}>Login</p>
                  <p className="table-text0-small" onClick={() => setRegisterModalIsOpen(true)} style={{ cursor: "pointer" }}>Register</p>
                  <Link to="/search-jobs" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Search</p></Link>
                  <Link to="/jobs" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Browse Jobs</p></Link>
                </>
            }

          </div>
          <div className="col-md-2">
            <h6>Recruiters</h6>
            <a className="table-text0-small" style={{ color: "#fff" }} href="https://recruiter.cvvlogs.com/register" target="_blank">Register</a><br />
            <a className="table-text0-small" style={{ color: "#fff" }} href="https://recruiter.cvvlogs.com/" target="_blank">Login</a>
          </div>
          <div className="col-md-2">
            <h6>Contact Us</h6>
            <p className="table-text0-small" style={{ color: "#fff", textDecoration: "none" }}>info@cvvlogs.com</p>
          </div>
          <div className="col-md-3">
            <h6>Download our app</h6>
            <img src={GooglePlay} alt="" width="50%" />
            <img src={AppStore} alt="" width="45%" className="ml-2" />
            <h6 className="mt-3">Follow Us On</h6>
            <div>
              <a href="https://www.facebook.com/CV-Flicks-100191795580154/?ti=as" target="_blank" className="text-white s4dFontSize15 s4dFontWeightLight">
                <i className="fab fa-facebook-square fa-2x pr-2 pl-1"></i>
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=qqyielwdxys3&utm_content=m7dwomi" className="text-white s4dFontSize15 s4dFontWeightLight">
                <i className="fab fa-instagram fa-2x px-2"></i>
              </a>
              <a href="https://www.linkedin.com/company/cvflicks" target="_blank" className="text-white s4dFontSize15 s4dFontWeightLight">
                <i className="fab fa-linkedin fa-2x px-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <hr style={{ backgroundColor: "#fff" }} />
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <p className="table-text0-small">©2020-2021 cvvlogs.com. All Right Reserved </p>
          </div>
          <div className="col-md-4 d-flex">
            {/* Wrong One*/}
            {
              localStorage.getItem("auth_id") !== null && localStorage.getItem("auth_id") !== undefined && localStorage.getItem("auth_id") !== "" ?
                <>
                  <Link to="/dashboard" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Home</p></Link>
                  <Link to="/about-us-login" className="link-tag-home"><p className="ml-4 table-text0-small" style={{ color: "#fff" }}>About Us</p></Link>
                  <Link to="/contact-us-login" className="link-tag-home"><p className="ml-4 table-text0-small" style={{ color: "#fff" }}>Contact Us</p></Link>

                </>
                :
                <>
                  <Link to="/home" className="link-tag-home"><p className="table-text0-small" style={{ color: "#fff" }}>Home</p></Link>
                  <Link to="/about-us" className="link-tag-home"><p className="ml-4 table-text0-small" style={{ color: "#fff" }}>About Us</p></Link>
                  <Link to="/contact-us" className="link-tag-home"><p className="ml-4 table-text0-small" style={{ color: "#fff" }}>Contact Us</p></Link>
                </>
            }

            {/* Wrong oNe */}
          </div>
          {/* <div className="col-md-2"></div> */}
        </div>
      </div>
    </div>
  );
}



const mapStateToProps = (state) => ({
  auth: state.auth,
  auth: state.auth,
  registerReducer: state.registerReducer,
  // dashboardReducer: state.dashboardReducer
});

const mapDispatchToProps = (dispatch) => ({
  SignIn: (username, passwordlog) => dispatch(SignIn(username, passwordlog)),
  createRegister: (first_name, last_name, email, number, password) =>
    dispatch(createRegister(first_name, last_name, email, number, password)),
  createForgetPassword: (email) => dispatch(createForgetPassword(email)),
  facebookLogin: () => dispatch(facebookLogin()),
  googleLogin: () => dispatch(googleLogin()),
  // getDashboard: () => dispatch(getDashboard()),
});
export default connect(mapStateToProps, mapDispatchToProps)(FooterTwo)