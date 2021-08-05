import React, { useState } from "react";
import Modal from "react-modal";
import "./Nav2.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/final-logo.png";
import { signOut } from "../../actions/authAction";
import { useEffect } from "react";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";

Modal.setAppElement("#root");

function Nav2(props) {
  const [LoginmodalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [forgetModalIsOpen, setForgetModalIsOpen] = useState(false);

  const ForgetFunctionality = () => {
    setForgetModalIsOpen(true);
    setLoginModalIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      {/* <button onClick={()=>console.log(props.auth.auth_id)}>ggg</button> */}
      <div className="container">
        <Link to="/dashboard"><img src={Logo} /></Link>
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
            <li className="nav-item mx-1">
              <NavLink
                exact
                className="nav-link active"
                activeClassName="something-new-cand"
                to="/dashboard"
                style={{ fontSize: "12px", color: "#707070" }}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                exact
                className="nav-link active"
                activeClassName="something-new-cand"
                to="/jobs-login"
                style={{ fontSize: "12px", color: "#707070" }}
              >
                JOBS
              </NavLink>
            </li>
            <li className="nav-item mx-1 ">
              <NavLink
                exact
                className="nav-link active"
                activeClassName="something-new-cand"
                to="/whatwedologin"
                style={{ fontSize: "12px", color: "#707070" }}
              >
                HOW IT WORKS
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                exact
                className="nav-link active"
                activeClassName="something-new-cand"
                to="/message"
                style={{ fontSize: "12px", color: "#707070" }}
              >
                MESSAGES
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <Link
                className="nav-link active text_white py-1 px-2 mt-1 bg_orange text-of-nav-cand btn-of-main-div-cand"
                aria-current="page"
                to="/save-cv"
                style={{ fontSize: "12px", background: "#FF0000" }}
              >
                <i className="far fa-video pr-1"></i>RECORD CV
              </Link>
            </li>
            <li className="nav-item mx-2">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0 py-1 px-2 mt-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="btn-nav-user"
                  style={{ fontSize: "10px", borderRadius: "7px" }}
                >
                  <i className="far fa-user pr-1"></i>{" "}
                  {localStorage.getItem("first_name") !== null &&
                  localStorage.getItem("first_name") !== undefined &&
                  localStorage.getItem("first_name") !== ""
                    ? localStorage.getItem("first_name").toUpperCase()
                    : ""}
                </button>
                <ul className="dropdown-menu">
                  <li
                    style={{
                      fontSize: "12px",
                      color: "#707070",
                      cursor: "pointer",
                    }}
                  >
                    <Link className="dropdown-item" to="/profile">
                      View{` & `}Edit Profile
                    </Link>
                  </li>
                  <li
                    style={{
                      fontSize: "12px",
                      color: "#707070",
                      cursor: "pointer",
                    }}
                  >
                    <a className="dropdown-item" onClick={() => signOut()}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {props.dashboardLoginReducer.premium !== null &&
            props.dashboardLoginReducer.premium !== undefined &&
            props.dashboardLoginReducer.premium == 0 ? (
              <li className="nav-item mx-1">
                <Link
                  className="nav-link active text_white py-1 px-2 mt-1 bg_orange text-of-nav-cand btn-of-main-div-cand"
                  aria-current="page"
                  to="/get-premium"
                  style={{ fontSize: "12px" }}
                >
                  <i className="far fa-gem pr-1"></i>PACKAGES
                </Link>
              </li>
            ) : null}

            <li className="nav-item mx-1">
              <a
                className="nav-link active"
                activeClassName="something-new-cand"
                href="https://recruiter.cvvlogs.com/"
                target="_blank"
                style={{ fontSize: "12px", color: "#707070" }}
              >
                FOR RECRUITERS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  dashboardLoginReducer: state.dashboardLoginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  // getPersonal: () => dispatch(getPersonal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Nav2);

{
  /* <i className="far fa-user pr-1"></i> */
}
