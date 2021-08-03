import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QualificationDetails.css";
import { getQualificationLogin } from "../../actions/qualificationloginAction"
import { createQualificationLogin } from "../../actions/qualificationloginAction"
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function QualifcicationDetailsLogin(props) {
  useEffect(() => {
    loadGetQualification(localStorage.getItem("auth_id"))

  });
  const loadGetQualification = async (userId) => {
    // await props.getProfile(userId)
    await props.getQualificationLogin(userId)
    return null;

  }
  // var a=props.qualificationloginReducer.qualificationlog.stored_values?props.qualificationloginReducer.qualificationlog.stored_values.institute_name!==null&&props.qualificationloginReducer.qualificationlog.stored_values.institute_name!==undefined?props.qualificationloginReducer.qualificationlog.stored_values.institute_name:"":""
  const [qualification, setQualification] = useState(null)
  const [course, setCourse] = useState(null)
  const [course_spec, setCourse_spec] = useState(null)
  const [institute_name, setInstitute_name] = useState(props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.institute_name !== null && props.qualificationloginReducer.qualificationlog.stored_values.institute_name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.institute_name : "" : "")
  const [institute_location, setInstitute_location] = useState(null)
  const [year, setYear] = useState(null)
  const addNewQualification = async () => {
    console.log("qwerty")
    await props.createQualificationLogin(localStorage.getItem("auth_id"),
      qualification !== null && qualification !== undefined ? qualification : props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.qualification ? props.qualificationloginReducer.qualificationlog.stored_values.qualification.qual_id !== null && props.qualificationloginReducer.qualificationlog.stored_values.qualification.qual_id !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.qualification.qual_id : null : null : null
      , course !== null && course !== undefined ? course : props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.course ? props.qualificationloginReducer.qualificationlog.stored_values.course.id !== null && props.qualificationloginReducer.qualificationlog.stored_values.course.id !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.course.id : null : null : null
      , course_spec !== null && course_spec !== undefined ? course_spec : props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.course_spec ? props.qualificationloginReducer.qualificationlog.stored_values.course_spec.id !== null && props.qualificationloginReducer.qualificationlog.stored_values.course_spec.id !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.course_spec.id : null : null : null
      , institute_name !== null && institute_name !== undefined && institute_name !== "" ? institute_name : props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.institute_name !== null && props.qualificationloginReducer.qualificationlog.stored_values.institute_name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.institute_name : "" : ""
      , institute_location !== null && institute_location !== undefined ? institute_location : props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.institute_location ? props.qualificationloginReducer.qualificationlog.stored_values.institute_location.id !== null && props.qualificationloginReducer.qualificationlog.stored_values.institute_location.id !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.institute_location.id : null : null : null
      , year !== null && year !== undefined ? year : props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.year ? props.qualificationloginReducer.qualificationlog.stored_values.year.id !== null && props.qualificationloginReducer.qualificationlog.stored_values.year.id !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.year.id : null : null : null
    )
    // window.location.reload(false);
  }
  return (
    <div className="container mt-5">
      {/* <button onClick={()=>console.log("fff",props.qualificationloginReducer.qualificationlog.stored_values.year.year)}>kjh</button> */}
      {/* Row 1 for Heading Starts */}
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <h1
          className="col-md-8 d-flex justify-content-center qual-det-head"
        >
          Qualification Details
        </h1>
        <div className="col-md-2"></div>
      </div>
      {/* Row 1 for Heading Ends */}

      {/* Row 2 for Para Starts */}
      <div className="row">
        <div className="col-md-2"></div>
        <p
          className="col-md-8 d-flex justify-content-center qual-det-para"
        >
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
                onChange={e => setQualification(e.target.value)}
                value={qualification}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>{props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.qualification ? props.qualificationloginReducer.qualificationlog.stored_values.qualification.qual_name !== null && props.qualificationloginReducer.qualificationlog.stored_values.qualification.qual_name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.qualification.qual_name : "Select Your Qualification" : "Select Your Qualification" : "Select Your Qualification"}</option>
                {
                  props.qualificationloginReducer.qualificationlog.course_vise_education && props.qualificationloginReducer.qualificationlog.course_vise_education.length > 0 ? props.qualificationloginReducer.qualificationlog.course_vise_education.map(qua => (
                    <option value={qua.qual_id}>{qua.qual_name !== null && qua.qual_name !== undefined ? qua.qual_name : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Institute Name</label>
              <input
                onChange={e => setInstitute_name(e.target.value)}
                type="text"
                className="form-control qual-det-input"
                // placeholder="Enter institute name"
                defaultValue={props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.institute_name !== null && props.qualificationloginReducer.qualificationlog.stored_values.institute_name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.institute_name : "" : ""}
              />

            </div>
          </div>
          {/* Inputs Row 1 Ends */}

          {/* Inputs Row 2 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Course Type</label>
              <select
                onChange={e => setCourse(e.target.value)}
                value={course}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>{props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.course ? props.qualificationloginReducer.qualificationlog.stored_values.course.name !== null && props.qualificationloginReducer.qualificationlog.stored_values.course.name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.course.name : "Select Your Course Type" : "Select Your Course Type" : "Select Your Course Type"}</option>
                {
                  props.qualificationloginReducer.qualificationlog.course_vise_education && props.qualificationloginReducer.qualificationlog.course_vise_education.length > 0 ? props.qualificationloginReducer.qualificationlog.course_vise_education.map(qua => (
                    qua.qual_courses && qua.qual_courses.length > 0 ? qua.qual_courses.map(cou => (
                      <option value={cou.id}>{cou.name !== null && cou.name !== undefined ? cou.name : ""}</option>
                    )) : ""


                  )) : ""
                }
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="qual-det-label mt-3">
                Institute Location
              </label>
              <select
                onChange={e => setInstitute_location(e.target.value)}
                value={institute_location}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>{props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.institute_location ? props.qualificationloginReducer.qualificationlog.stored_values.institute_location.loc_name !== null && props.qualificationloginReducer.qualificationlog.stored_values.institute_location.loc_name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.institute_location.loc_name : "Select Your Institute Location" : "Select Your Institute Location" : "Select Your Institute Location"}</option>
                {
                  props.qualificationloginReducer.qualificationlog.location && props.qualificationloginReducer.qualificationlog.location.length > 0 ? props.qualificationloginReducer.qualificationlog.location.map(loc => (

                    <option value={loc.id}>{loc.loc_name !== null && loc.loc_name !== undefined ? loc.loc_name : ""}</option>

                  )) : ""
                }
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
                onChange={e => setCourse_spec(e.target.value)}
                value={course_spec}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>{props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.course_spec ? props.qualificationloginReducer.qualificationlog.stored_values.course_spec.name !== null && props.qualificationloginReducer.qualificationlog.stored_values.course_spec.name !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.course_spec.name : "Select Your Course Specialization" : "Select Your Course Specialization" : "Select Your Course Specialization"}</option>
                {
                  props.qualificationloginReducer.qualificationlog.course_vise_education && props.qualificationloginReducer.qualificationlog.course_vise_education.length > 0 ? props.qualificationloginReducer.qualificationlog.course_vise_education.map(qua => (
                    qua.qual_courses && qua.qual_courses.length > 0 ? qua.qual_courses.map(cou => (
                      cou.spec && cou.spec.length > 0 ? cou.spec.map(spe => (
                        <option value={spe.id}>{spe.name !== null && spe.name !== undefined ? spe.name : ""}</option>
                      )) : ""

                    )) : ""


                  )) : ""
                }
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="qual-det-label mt-3">Course Completion Year</label>
              <select
                onChange={e => setYear(e.target.value)}
                value={year}
                className="form-control qual-det-input"
                aria-label="Default select example"
              >
                <option selected>{props.qualificationloginReducer.qualificationlog.stored_values ? props.qualificationloginReducer.qualificationlog.stored_values.year ? props.qualificationloginReducer.qualificationlog.stored_values.year.year !== null && props.qualificationloginReducer.qualificationlog.stored_values.year.year !== undefined ? props.qualificationloginReducer.qualificationlog.stored_values.year.year : "Select Your Completion Year" : "Select Your Completion Year" : "Select Your Completion Year"}</option>
                {
                  props.qualificationloginReducer.qualificationlog.years && props.qualificationloginReducer.qualificationlog.years.length > 0 ? props.qualificationloginReducer.qualificationlog.years.map(year => (

                    <option value={year.id}>{year.year !== null && year.year !== undefined ? year.year : ""}</option>

                  )) : ""
                }
              </select>
            </div>
          </div>
          {/* Inputs Row 3 Ends */}

          {/* Inputs Row 7 Button Starts */}
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center">
              <button
                onClick={() => addNewQualification()}
                className="btn btn-warning qual-det-btn"
              // disabled={
              //   !qualification === false &&
              //   !course === false &&
              //   !course_spec === false &&
              //   !institute_name === false &&
              //   !institute_location === false &&
              //   !year === false
              //   ? false : true
              // }
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
      {props.qualificationloginReducer.loading == true ? null : <FullPageLoader />}

      {props.qualificationloginReducer.loadingGet == false ?
        <FullPageLoader /> :
        null
      }
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  qualificationloginReducer: state.qualificationloginReducer,
  profileReducer: state.profileReducer

})


const mapDispatchToProps = dispatch => ({
  // getProfile:(userId)=>dispatch(getProfile(userId)),
  getQualificationLogin: (userId) => dispatch(getQualificationLogin(userId)),
  createQualificationLogin: (userId, qualification, course, course_spec, institute_name, institute_location, year) => dispatch(createQualificationLogin(userId, qualification, course, course_spec, institute_name, institute_location, year)),

})
export default connect(mapStateToProps, mapDispatchToProps)(QualifcicationDetailsLogin)

