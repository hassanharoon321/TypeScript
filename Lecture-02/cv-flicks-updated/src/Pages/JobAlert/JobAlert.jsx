import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav2 from "../../Components/Nav2/Nav2";
import FooterTwo from "../../Components/Footer/Footer2";
import "./JobAlert.css";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";
import { getJobAlert, createJobAlert } from "../../actions/jobAlertAction";
import { connect } from "react-redux";
const config = require("../../helpers/config.json");

// React Select Starts
const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 3 ? (
        props.children
      ) : (
        <div style={{ margin: 15 }}>Max limit achieved</div>
      )}
    </components.Menu>
  );
};
// React Select Ends

function JobAlert(props) {
  const [multiLanguage, setMultiLanguage] = useState([]);

  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"));
  }, []);
  const loadGetProfessional = async (userId) => {
    await props.getJobAlert(userId);
    return null;
  };

  const [exp, setexp] = useState(null);
  const [relocate, setrelocate] = useState(0);
  const [location, setlocation] = useState(null);

  const createjobalert = async () => {
    console.log("ttttt", relocate, location);
    if (relocate == 1 && location == null) {
      alert("Fill required first");
      return;
    }
    await props.createJobAlert(
      localStorage.getItem("auth_id"),
      multiLanguage,
      exp,
      relocate,
      location
    );
  };

  // console.log(relocate)

  // const isValidNewOption = (inputValue, selectValue) =>
  //   inputValue.length > 0 && selectValue.length < 3;

  let handleMultiLanguage = (e) => {
    setMultiLanguage(
      Array.isArray(e)
        ? e.map((x) => (x.id !== null ? Number(x.id) : x.id))
        : []
    );
  };
  return (
    <>
      <Nav2 />
      <div className="container mt-5 mb-5">
        {/* Row 1 for Heading Starts */}
        <div className="row mt-5">
          <div className="col-md-2"></div>
          {/* <button onClick={() => console.log(multiLanguage)}>click me</button> */}
          <h1
            className="col-md-8 d-flex justify-content-center font-weight-bold"
            style={{ fontSize: "50px", color: "#865ddd", textAlign: "center" }}
          >
            Job Alerts
          </h1>
          <div className="col-md-2"></div>
        </div>
        {/* Row 1 for Heading Ends */}

        {/* Row 2 for Para Starts */}
        <div className="row">
          <div className="col-md-2"></div>
          <p
            className="col-md-8 d-flex justify-content-center"
            style={{ color: "#865ddd", textAlign: "center" }}
          >
            Create a Job Alert! We will notify you whenever there is a new job
            that is suitable for you.
          </p>
          <div className="col-md-2"></div>
        </div>
        {/* Row 2 for Para Ends */}

        {/* Row 3 Para Starts */}
        <div className="row">
          <div className="col-md-4"></div>
          {/* Main Background of Input starts */}
          <div className="col-md-4 shadow p-5" style={{ borderRadius: "10px" }}>
            <div className="row px-0">
              <div className="col-md-12 px-0">
                <label style={{ color: "#707070" }} className="p-0">
                  Enter skills, preferred companies, role
                </label>
                <Creatable
                  options={
                    props.jobAlertReducer.jobAlert.skills &&
                    props.jobAlertReducer.jobAlert.skills.length > 0 ? (
                      props.jobAlertReducer.jobAlert.skills
                    ) : (
                      <div>
                        <div
                          className="spinner-border text-secondary"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )
                  }
                  isMulti
                  onChange={handleMultiLanguage}
                />
              </div>
            </div>
            <div className="row mt-4">
              <label style={{ color: "#707070" }} className="p-0">
                Total Work Experience
              </label>
              <select
                onChange={(e) => setexp(e.target.value)}
                className="form-control"
                style={{ color: "#000" }}
              >
                <option selected>--select--</option>
                {props.jobAlertReducer.jobAlert.experience_level &&
                props.jobAlertReducer.jobAlert.experience_level.length > 0
                  ? props.jobAlertReducer.jobAlert.experience_level.map(
                      (exp) => (
                        <option value={exp.id}>
                          {exp.exp_name !== null && exp.exp_name !== undefined
                            ? exp.exp_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            <div className="row mt-4">
              <div className="col-md-12 p-0 m-0">
                <label className="per-det-label mt-3">
                  Willing to relocate
                </label>
                <br />
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      onChange={(e) => setrelocate(e.target.value)}
                      className="form-check-input"
                      type="radio"
                      id="male"
                      value={1}
                      name="gender"
                    />
                    <label
                      className="form-check-label per-det-input"
                      for="male"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onChange={(e) => setrelocate(e.target.value)}
                      className="form-check-input"
                      type="radio"
                      id="female"
                      value={0}
                      name="gender"
                    />
                    <label
                      className="form-check-label per-det-input"
                      for="female"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Here NO to Hide Starts */}
            {relocate == 1 ? (
              <div className="row mt-4">
                <label style={{ color: "#707070" }} className="p-0">
                  Enter Location
                </label>
                <select
                  onChange={(e) => setlocation(e.target.value)}
                  className="form-control"
                  style={{ color: "#000" }}
                >
                  <option value={null} selected>
                    --select--
                  </option>
                  {props.jobAlertReducer.jobAlert.countries &&
                  props.jobAlertReducer.jobAlert.countries.length > 0
                    ? props.jobAlertReducer.jobAlert.countries.map((exp) => (
                        <option value={exp.id}>
                          {exp.c_name !== null && exp.c_name !== undefined
                            ? exp.c_name
                            : ""}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
            ) : (
              ""
            )}

            {/* Here NO to Hide Ends */}
            {}
            <div className="row mt-5">
              <div className="col-md-2"></div>
              <div className="col-md-8 d-flex justify-content-center">
                <button
                  className="btn btn-warning font-weight-bold"
                  onClick={() => createjobalert()}
                  style={{ color: "#fff", background: "#ffb44a" }}
                  disabled={
                    !multiLanguage === false &&
                    !exp === false
                      ? false
                      : true
                  }
                >
                  Save and Continue
                </button>
              </div>
              <div className="col-md-2"></div>
            </div>
            {/* Inputs Row 7 Button Ends */}
          </div>
          {/* Main Background of Input Ends */}
          <div className="col-md-4"></div>
        </div>
        {/* Row 3 Para Ends */}
      </div>
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  jobAlertReducer: state.jobAlertReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getJobAlert: (userId) => dispatch(getJobAlert(userId)),
  createJobAlert: (userId, multiLanguage, exp, relocate, location) =>
    dispatch(createJobAlert(userId, multiLanguage, exp, relocate, location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(JobAlert);
