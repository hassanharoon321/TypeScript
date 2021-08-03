import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./JobsDetail.css";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import Wallet from "../../Assests/topmanagment/wallet.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJobDetailLogin } from "../../actions/jobdetailloginAction";
import { SignIn, facebookLogin, googleLogin } from "../../actions/authAction";
import { createRegister } from "../../actions/registerAction";
import { createForgetPassword } from "../../actions/forgetPasswordAction";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import FooterTwo from "../../Components/Footer/Footer2";
import Modal from "react-modal";
import Google from "../../Assests/google-register.svg";
import Facebook from "../../Assests/facebook.svg";
import LinkedIn from "../../Assests/linked-in-register.svg";
import LinkedInPage from "../../getURL";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";


Modal.setAppElement("#root");

function JobsDetailLogin(props) {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");
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
  const onSubmit = async (username, passwordlog) => {
    // console.log("Success:", props.auth.loading);
    await props.SignIn(username, passwordlog);
  };

  const newForget = async () => {
    console.log("qwerty", ForgetEmail);
    await props.createForgetPassword(ForgetEmail);
    // window.location.reload(false);
  };

  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"), compIds);
  }, []);
  const loadGetProfessional = async (userId, id) => {
    await props.getJobDetailLogin(userId, id);
    return null;
  };
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Job Head Starts */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div
              className="row mt-5 shadow p-3"
              style={{ borderRadius: "10px" }}
            >
              <div className="col-md-9">
                <h3 style={{ color: "#707070" }} className="mb-0">
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.job_title !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.job_title !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.job_title
                          .charAt(0)
                          .toUpperCase() +
                        props.jobdetailloginReducer.jobdetail.result.job_title
                          .substr(1)
                          .toLowerCase()
                      : ""
                    : ""}
                </h3>
                <small style={{ color: "#c8c8c8", fontSize: "16px" }}>
                  {props.jobdetailloginReducer.jobdetail.result ? (
                    props.jobdetailloginReducer.jobdetail.result
                      .company_name !== null &&
                    props.jobdetailloginReducer.jobdetail.result
                      .company_name !== undefined ? (
                      props.jobdetailloginReducer.jobdetail.result.company_name
                    ) : (
                      ""
                    )
                  ) : (
                    <div>
                      <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">No Jobs</span>
                      </div>
                    </div>
                  )}
                </small>
              </div>
              <div className="col-md-3">
                <p
                  className="text-right mt-3"
                  style={{ fontSize: "14px", color: "#c8c8c8" }}
                >
                  Posted on{" "}
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.posted_on !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.posted_on !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.posted_on
                      : ""
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Job Head Ends */}

        {/* Job main Starts */}
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div
            className="col-md-10 shadow p-4"
            style={{ borderRadius: "10px" }}
          >
            <div className="row">
              <div className="col-md-3">
                <img src={Briefcase} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.exp !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.exp !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.exp
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <img src={Location} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.city !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.city !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.city
                      : ""
                    : ""}{" "}
                  ,{" "}
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.country !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.country !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.country
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <img src={Pen} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.industry !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.industry !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.industry
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <img src={Wallet} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result
                        .salary_min !== null &&
                      props.jobdetailloginReducer.jobdetail.result
                        .salary_min !== undefined
                      ? props.jobdetailloginReducer.jobdetail.result.salary_min
                      : ""
                    : ""}{" "}
                  -{" "}
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result
                        .salary_max !== null &&
                      props.jobdetailloginReducer.jobdetail.result
                        .salary_max !== undefined
                      ? props.jobdetailloginReducer.jobdetail.result.salary_max
                      : ""
                    : ""}
                </small>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <h3 style={{ color: "#707070" }}>Job Description</h3>
                <p style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.job_desc !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.job_desc !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.job_desc
                      : ""
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Job main Ends */}

        {/* Job last div Starts */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div
              className="row mt-5 shadow p-3"
              style={{ borderRadius: "10px" }}
            >
              <div className="row">
                <div className="col-md-12">
                  <h6 className="mb-0" style={{ color: "#707070" }}>
                  Career level
                  </h6>
                  <small style={{ color: "#707070" }}>
                    {" "}
                    {props.jobdetailloginReducer.jobdetail.result
                      ? props.jobdetailloginReducer.jobdetail.result
                          .functional_area !== null &&
                        props.jobdetailloginReducer.jobdetail.result
                          .functional_area !== undefined
                        ? props.jobdetailloginReducer.jobdetail.result
                            .functional_area
                        : ""
                      : ""}
                  </small>
                </div>
              </div>

              <div className="col-md-12 p-0 m-0">
                <h6 className="mt-4 mb-0 p-0" style={{ color: "#707070" }}>
                  Employer Details
                </h6>
                <small style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result
                        .company_name !== null &&
                      props.jobdetailloginReducer.jobdetail.result
                        .company_name !== undefined
                      ? props.jobdetailloginReducer.jobdetail.result
                          .company_name
                      : ""
                    : ""}
                </small>
              </div>

              <div className="col-md-12 p-0 m-0">
                <h6 className="mt-4 mb-0" style={{ color: "#707070" }}>
                  Job Type
                </h6>
                <small style={{ color: "#707070" }}>
                  {props.jobdetailloginReducer.jobdetail.result
                    ? props.jobdetailloginReducer.jobdetail.result.job_type !==
                        null &&
                      props.jobdetailloginReducer.jobdetail.result.job_type !==
                        undefined
                      ? props.jobdetailloginReducer.jobdetail.result.job_type
                      : ""
                    : ""}
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Job last div Ends */}

        {/* Button Starts */}
        <div className="row mt-5 mb-5">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <button
              onClick={() => setLoginModalIsOpen(true)}
              className="btn btn-warning w-100 shadow"
              style={{
                color: "#fff",
                background: "#ffb44a",
                fontWeight: "bold",
              }}
            >
              Apply
            </button>
          </div>
          <div className="col-md-5"></div>
        </div>
        {/* Button Ends */}
      </div>
      <FooterTwo />

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
              <label className="label-color-login">Username or Email</label>
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
                  !username === false && !passwordlog === false ? false : true
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

          {props.auth.loading == true ? <></> : <FullPageLoader />}
        </div>
        {/* Footer Ends */}
      </Modal>
      {/* Login Modal End */}

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
              <label className="forget-label">Enter Registered Email ID</label>
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
              <label className="label-color-reg mt-3">Phone Number</label>
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
              <label className="label-color-reg mt-3">Confirm Password</label>
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
                />
                <label for="vehicle1">
                  {" "}
                  By clicking "Register" you agree to our{" "}
                  <Link
                    to="terms-and-condition"
                    onClick={() => setRegisterModalIsOpen(false)}
                  >
                    <span className="term-n-cond">Terms {`&`} Conditions</span>
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
          {props.registerReducer.loading == true ? <></> : <FullPageLoader />}
        </div>
        {/* Footer Ends */}
      </Modal>
      {/* Register Modal Ends */}
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  jobdetailloginReducer: state.jobdetailloginReducer,
  registerReducer: state.registerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  SignIn: (username, passwordlog) => dispatch(SignIn(username, passwordlog)),
  getJobDetailLogin: (userId, id) => dispatch(getJobDetailLogin(userId, id)),
  createRegister: (first_name, last_name, email, number, password) =>
    dispatch(createRegister(first_name, last_name, email, number, password)),
  createForgetPassword: (email) => dispatch(createForgetPassword(email)),
});
export default connect(mapStateToProps, mapDispatchToProps)(JobsDetailLogin);
