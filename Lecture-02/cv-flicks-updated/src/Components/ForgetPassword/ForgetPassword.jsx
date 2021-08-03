import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ForgetPassword.css";

Modal.setAppElement("#root");

function ForgetPassword() {
  const [forgetModalIsOpen, setForgetModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setForgetModalIsOpen(true)}>
        Forget Password
      </button>

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
          },
          content: {
            position: "absolute",
            margin: "0 auto",
            width: "350px",
            top: "190px",
            left: "0",
            right: "0",
            bottom: "190px",
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
        <div className="row">
          <div className="col-md-12">
            <label className="forget-label">Enter Registered Email ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email ID"
              id="forget-input"
            />
          </div>
        </div>
        {/* input Ends */}

        {/* Forget Pass Div Starts*/}
        <div className="row mt-1">
          <div className="col-md-12 d-flex justify-content-end">
            <small className="login-instead">Remember your password? Login instead</small>
          </div>
        </div>
        {/* Forget Pass Div Ends*/}

        {/* Forget Pass Div Starts*/}
        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-center">
            <button className="btn btn-warning btn-forget w-50">Send</button>
          </div>

        </div>
        {/* Forget Pass Div Ends*/}
      </Modal>
      {/* Forget Password Modal Ends */}
    </div>
  );
}

export default ForgetPassword;
