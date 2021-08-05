import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import Google from "../../Assests/google-register.svg";
import Facebook from "../../Assests/facebook.svg";
import LinkedIn from "../../Assests/linked-in-register.svg";
import { Link } from "react-router-dom";
import { createRegister } from "../../actions/registerAction";
import { connect } from "react-redux";

Modal.setAppElement("#root");

function Register(props) {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const addNewRegister = async () => {
    console.log("qwerty");
    await props.createRegister(first_name, last_name, email, number, password);
    // window.location.reload(false);
  };

  handleName = (e) => {
    setFirst_name(e.target.value);
  };

  return (
    <div>
      <button onClick={() => setRegisterModalIsOpen(true)}>Register</button>

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
          },
          content: {
            position: "absolute",
            margin: "0 auto",
            width: "700px",
            top: "40px",
            left: "0",
            right: "0",
            bottom: "40px",
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
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1 className="register-head">Register</h1>
          </div>
          <div className="col-md-4"></div>
        </div>
        {/* Heading Starts */}

        {/* FIrst Input Starts */}
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
            />
          </div>
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-6">
            <label className="label-color-reg mt-3">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Type your email here"
              className="form-control"
              id="reg-form-all"
            />
          </div>
        </div>
        {/* FIrst Input Ends */}

        {/* Second Input Starts */}
        <div className="row">
          <div className="col-md-6">
            <label className="label-color-reg mt-3 ">Last Name</label>
            <input
              onChange={(e) => setLast_name(e.target.value)}
              type="text"
              placeholder="Type your last name here"
              className="form-control"
              id="reg-form-all"
            />
          </div>
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-6">
            <label className="label-color-reg mt-3 ">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Type your password here"
              className="form-control"
              id="reg-form-all"
            />
          </div>
        </div>
        {/* Second Input Ends */}

        {/* Third Input Starts */}
        <div className="row">
          <div className="col-md-6">
            <label className="label-color-reg mt-3">Phone Number</label>
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Type your phone number"
              className="form-control"
              id="reg-form-all"
            />
          </div>
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-6">
            <label className="label-color-reg mt-3">Confirm Password</label>
            <input
              type="text"
              placeholder="Type your password again"
              className="form-control"
              id="reg-form-all"
            />
          </div>
        </div>
        {/* Third Input Ends */}

        {/* Terms & Cond Text Starts */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-3">
            <p className="reg-para">
              By clicking "Register" you agree to our{" "}
              <span className="term-n-cond">Terms {`&`} Conditions</span> as
              well as our <span className="term-n-cond">Privacy Policy</span>
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
              onClick={() => addNewRegister()}
              disabled={!first_name===false ? false : true }
              className="btn btn-warning reg-btn-main w-100"
            >
              Login
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
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
          <div className="col-md-3"></div>
          <div className="col-md-6 d-flex justify-content-center">
            <p className="footer-reg-color">
              Already have an account?
              <span className="login-foot-reg"> Login here</span>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
        {/* Footer Ends */}
      </Modal>
      {/* Register Modal Ends */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  registerReducer: state.registerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  createRegister: (first_name, last_name, email, number, password) =>
    dispatch(createRegister(first_name, last_name, email, number, password)),
  // getPersonal: () => dispatch(getPersonal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
