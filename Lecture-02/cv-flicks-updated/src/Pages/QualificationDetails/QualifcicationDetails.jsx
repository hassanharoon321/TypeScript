import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QualificationDetails.css";
import { getQualification } from "../../actions/qualificationaction";
import { createQualification } from "../../actions/qualificationaction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";

function QualifcicationDetails(props) {
  useEffect(() => {
    loadGetQualification(localStorage.getItem("auth_id"));
  }, []);
  const loadGetQualification = async (userId) => {
    await props.getQualification(userId);
    return null;
  };
  const [qualification, setQualification] = useState(null);
  const [course, setCourse] = useState(null);
  const [course_spec, setCourse_spec] = useState(null);
  const [institute_name, setInstitute_name] = useState("");
  const [institute_location, setInstitute_location] = useState(null);
  const [year, setYear] = useState(null);
  const addNewQualification = async () => {
    console.log("qwerty");
    await props.createQualification(
      localStorage.getItem("auth_id"),
      qualification,
      course,
      course_spec,
      institute_name,
      institute_location,
      year
    );
    // window.location.reload(false);
  };
  return (
    <div className="container mt-5">
      {/* <button onClick={()=>console.log(props.qualificationReducer)}>kjh</button> */}
      {/* Row 1 for Heading Starts */}
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <h1 className="col-md-8 d-flex justify-content-center qual-det-head">
          Qualification Details
        </h1>
        <div className="col-md-2"></div>
      </div>
      {/* Row 1 for Heading Ends */}

      {/* Row 2 for Para Starts */}
      <div className="row">
        <div className="col-md-2"></div>
        <p className="col-md-8 d-flex justify-content-center qual-det-para">
          Provide your educational information
        </p>
        <div className="col-md-2"></div>
      </div>
      {/* Row 2 for Para Ends */}

      {/* Row 3 Para Starts */}
      <div className="row">
        <div className="col-md-1"></div>
        {/* Main Background of Input starts */}
        <div className="col-md-10 shadow p-5 qual-det-main">
          {/* Inputs Row 1 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Qualification</label>
              <select
                onChange={(e) => setQualification(e.target.value)}
                value={qualification}
                className="form-control qual-det-input"
                aria-label="Default select example"
                // style={{color:"#000"}}
              >
                <option selected>Select your qualification</option>
                {props.qualificationReducer.qualification
                  .course_vise_education &&
                props.qualificationReducer.qualification.course_vise_education
                  .length > 0
                  ? props.qualificationReducer.qualification.course_vise_education.map(
                      (qua) => (
                        <option value={qua.qual_id}>
                          {qua.qual_name !== null && qua.qual_name !== undefined
                            ? qua.qual_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Institute Name</label>
              <input
                onChange={(e) => setInstitute_name(e.target.value)}
                value={institute_name}
                type="text"
                className="form-control qual-det-input"
                placeholder="Enter institute name"
              />
            </div>
          </div>
          {/* Inputs Row 1 Ends */}

          {/* Inputs Row 2 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Course Type</label>
              <select
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>Select your course type</option>
                {props.qualificationReducer.qualification
                  .course_vise_education &&
                props.qualificationReducer.qualification.course_vise_education
                  .length > 0
                  ? props.qualificationReducer.qualification.course_vise_education.map(
                      (qua) =>
                        qua.qual_courses && qua.qual_courses.length > 0
                          ? qua.qual_courses.map((cou) => (
                              <option value={cou.id}>
                                {cou.name !== null && cou.name !== undefined
                                  ? cou.name
                                  : ""}
                              </option>
                            ))
                          : ""
                    )
                  : ""}
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Institute Location</label>
              <select
                onChange={(e) => setInstitute_location(e.target.value)}
                value={institute_location}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>Select Institute Location</option>
                {props.qualificationReducer.qualification.location &&
                props.qualificationReducer.qualification.location.length > 0
                  ? props.qualificationReducer.qualification.location.map(
                      (loc) => (
                        <option value={loc.id}>
                          {loc.loc_name !== null && loc.loc_name !== undefined
                            ? loc.loc_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
          </div>
          {/* Inputs Row 2 Ends */}

          {/* Inputs Row 3 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="qual-det-label mt-3">
                Course Specialization
              </label>
              <select
                onChange={(e) => setCourse_spec(e.target.value)}
                value={course_spec}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>Select your specialization</option>
                {props.qualificationReducer.qualification
                  .course_vise_education &&
                props.qualificationReducer.qualification.course_vise_education
                  .length > 0
                  ? props.qualificationReducer.qualification.course_vise_education.map(
                      (qua) =>
                        qua.qual_courses && qua.qual_courses.length > 0
                          ? qua.qual_courses.map((cou) =>
                              cou.spec && cou.spec.length > 0
                                ? cou.spec.map((spe) => (
                                    <option value={spe.id}>
                                      {spe.name !== null &&
                                      spe.name !== undefined
                                        ? spe.name
                                        : ""}
                                    </option>
                                  ))
                                : ""
                            )
                          : ""
                    )
                  : ""}
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="qual-det-label mt-3">
                Course Completion Year
              </label>
              <select
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>Select your completion year</option>
                {props.qualificationReducer.qualification.years &&
                props.qualificationReducer.qualification.years.length > 0
                  ? props.qualificationReducer.qualification.years.map(
                      (year) => (
                        <option value={year.id}>
                          {year.year !== null && year.year !== undefined
                            ? year.year
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
          </div>
          {/* Inputs Row 3 Ends */}

          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          {/* Inputs Row 7 Button Starts */}
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center">
              <button
                onClick={() => addNewQualification()}
                disabled={
                  !qualification === false &&
                  !institute_name === false &&
                  !course === false &&
                  !institute_location === false &&
                  !course_spec === false &&
                  !year === false
                    ? false
                    : true
                }
                className="btn btn-warning qual-det-btn"
              >
                Save and Continue
              </button>
            </div>
            <div className="col-md-2"></div>
          </div>
          {/* Inputs Row 7 Button Ends */}
        </div>
        {/* Main Background of Input Ends */}
        <div className="col-md-1"></div>
      </div>
      {/* Row 3 Para Ends */}
      {props.qualificationloginReducer.loading == true ? (
        <FullPageLoader />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  qualificationReducer: state.qualificationReducer,
  qualificationloginReducer: state.qualificationloginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getQualification: (userId) => dispatch(getQualification(userId)),
  createQualification: (
    userId,
    qualification,
    course,
    course_spec,
    institute_name,
    institute_location,
    year
  ) =>
    dispatch(
      createQualification(
        userId,
        qualification,
        course,
        course_spec,
        institute_name,
        institute_location,
        year
      )
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualifcicationDetails);
