import React from "react";
import "./ProfessionalDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProfessionalLogin } from "../../actions/professionalloginAction"
import { createProfessionalLogin } from "../../actions/professionalloginAction"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";

function ProfessionalDetailsLogin(props) {
  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"))

  }, []);
  const loadGetProfessional = async (userId) => {
    await props.getProfessionalLogin(userId)
    // await setemployed_status(props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.employed_status !== null && props.professionalloginReducer.professional.stored_values.employed_status !== undefined ? props.professionalloginReducer.professional.stored_values.employed_status : 0 : 0)
    // console.log("ghjkl",employed_status)
    return null;
  }

  const [working_from, setworking_from] = useState(props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.working_from !== null && props.professionalloginReducer.professional.stored_values.working_from !== undefined ? props.professionalloginReducer.professional.stored_values.working_from : "" : "")

  const [exp_level, setExp_level] = useState(props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.exp_level ? props.professionalloginReducer.professional.stored_values.exp_level.id !== null && props.professionalloginReducer.professional.stored_values.exp_level.id !== undefined ? props.professionalloginReducer.professional.stored_values.exp_level.id : null : null : null)
  const [current, setCurrent] = useState(null);
  const [industry, setIndustry] = useState(null)
  const [functional_area, setfunctional_area] = useState(null)
  const [wrk_lvl, setwrk_lvl] = useState(null)
  const [salary, setsalary] = useState(null)
  const [availability, setavailability] = useState(null)
  const [employed_status, setemployed_status] = useState(props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.employed_status !== null && props.professionalloginReducer.professional.stored_values.employed_status !== undefined ? props.professionalloginReducer.professional.stored_values.employed_status : null : null)
  const [curr_title, setcurr_title] = useState(props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.curr_title !== null && props.professionalloginReducer.professional.stored_values.curr_title !== undefined ? props.professionalloginReducer.professional.stored_values.curr_title : "" : "")
  const [curr_rec, setcurr_rec] = useState(props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.curr_rec !== null && props.professionalloginReducer.professional.stored_values.curr_rec !== undefined ? props.professionalloginReducer.professional.stored_values.curr_rec : "" : "")
  const [employer_city, setemployer_city] = useState(null)
  const addNewProfessional = async () => {
    console.log("qwerty")
    await props.createProfessionalLogin(localStorage.getItem("auth_id"),
      exp_level !== null && exp_level !== undefined ? exp_level : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.exp_level ? props.professionalloginReducer.professional.stored_values.exp_level.id !== null && props.professionalloginReducer.professional.stored_values.exp_level.id !== undefined ? props.professionalloginReducer.professional.stored_values.exp_level.id : null : null : null
      , industry !== null && industry !== undefined ? industry : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.industry ? props.professionalloginReducer.professional.stored_values.industry.cat_id !== null && props.professionalloginReducer.professional.stored_values.industry.cat_id !== undefined ? props.professionalloginReducer.professional.stored_values.industry.cat_id : null : null : null
      , functional_area !== null && functional_area !== undefined ? functional_area : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.functional_area ? props.professionalloginReducer.professional.stored_values.functional_area.id !== null && props.professionalloginReducer.professional.stored_values.functional_area.id !== undefined ? props.professionalloginReducer.professional.stored_values.functional_area.id : null : null : null
      , wrk_lvl !== null && wrk_lvl !== undefined ? wrk_lvl : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.wrk_lvl ? props.professionalloginReducer.professional.stored_values.wrk_lvl.id !== null && props.professionalloginReducer.professional.stored_values.wrk_lvl.id !== undefined ? props.professionalloginReducer.professional.stored_values.wrk_lvl.id : null : null : null
      , salary !== null && salary !== undefined ? salary : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.salary ? props.professionalloginReducer.professional.stored_values.salary.id !== null && props.professionalloginReducer.professional.stored_values.salary.id !== undefined ? props.professionalloginReducer.professional.stored_values.salary.id : null : null : null
      , availability !== null && availability !== undefined ? availability : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.availability ? props.professionalloginReducer.professional.stored_values.availability.id !== null && props.professionalloginReducer.professional.stored_values.availability.id !== undefined ? props.professionalloginReducer.professional.stored_values.availability.id : null : null : null
      , employed_status !== null && employed_status !== undefined && employed_status !== "" ? employed_status : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.employed_status !== null && props.professionalloginReducer.professional.stored_values.employed_status !== undefined ? props.professionalloginReducer.professional.stored_values.employed_status : null : null
      , curr_title !== null && curr_title !== undefined && curr_title !== "" ? curr_title : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.curr_title !== null && props.professionalloginReducer.professional.stored_values.curr_title !== undefined ? props.professionalloginReducer.professional.stored_values.curr_title : "" : "",
      curr_rec !== null && curr_rec !== undefined && curr_rec !== "" ? curr_rec : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.curr_rec !== null && props.professionalloginReducer.professional.stored_values.curr_rec !== undefined ? props.professionalloginReducer.professional.stored_values.curr_rec : "" : "",
      employer_city !== null && employer_city !== undefined ? employer_city : props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.employer_city ? props.professionalloginReducer.professional.stored_values.employer_city.id !== null && props.professionalloginReducer.professional.stored_values.employer_city.id !== undefined ? props.professionalloginReducer.professional.stored_values.employer_city.id : null : null : null, working_from)
  }



  return (
    <div className="container mt-5">
      {/* <button onClick={()=>console.log("ggg",employed_status)}>ffff</button> */}
      {/* Row 1 for Heading Starts */}
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <h1 className="col-md-8 d-flex justify-content-center prof-det-head">
          Professional Details
        </h1>
        <div className="col-md-2"></div>
      </div>
      {/* Row 1 for Heading Ends */}

      {/* Row 2 for Para Starts */}
      {/* <div className="row">
        <div className="col-md-2"></div>
        <p className="col-md-8 d-flex justify-content-center prof-det-para">
          Provide your professional details
        </p>
        <div className="col-md-2"></div>
      </div> */}
      {/* Row 2 for Para Ends */}

      {/* Row 3 Para Starts */}
      <div className="row">
        <div className="col-md-1"></div>
        {/* Main Background of Input starts */}
        <div className="col-md-10 shadow p-5 prof-det-main">
          {/* Inputs Row 1 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">
                Total Work Experience
              </label>
              <select
                onChange={e => setExp_level(e.target.value)}
                value={exp_level}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>{props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.exp_level ? props.professionalloginReducer.professional.stored_values.exp_level.exp_name !== null && props.professionalloginReducer.professional.stored_values.exp_level.exp_name !== undefined ? props.professionalloginReducer.professional.stored_values.exp_level.exp_name : "--Select--" : "--Select--" : "--Select--"}</option>
                {
                  props.professionalloginReducer.professional.experience_level && props.professionalloginReducer.professional.experience_level.length > 0 ? props.professionalloginReducer.professional.experience_level.map(exp => (
                    <option value={exp.id}>{exp.exp_name !== null && exp.exp_name !== undefined ? exp.exp_name : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            {/* Radio here start */}
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="label-color-prof mt-3">
                Current Designation or Title (For recruiters to find you)
              </label>
              <input
                onChange={e => setcurr_title(e.target.value)}
                defaultValue={props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.curr_title !== null && props.professionalloginReducer.professional.stored_values.curr_title !== undefined ? props.professionalloginReducer.professional.stored_values.curr_title : "" : ""}
                type="text"
                className="form-control input-color-prof"
                placeholder="Enter your current designation or title"
              />
            </div>

            {/* Radio here end */}
          </div>
          {/* Inputs Row 1 Ends */}

          {/* Inputs Row 2 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Current Industry</label>
              <select
                onChange={e => setIndustry(e.target.value)}
                value={industry}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>{props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.industry ? props.professionalloginReducer.professional.stored_values.industry.cat_name !== null && props.professionalloginReducer.professional.stored_values.industry.cat_name !== undefined ? props.professionalloginReducer.professional.stored_values.industry.cat_name : "--Select--" : "--Select--" : "--Select--"}</option>
                {
                  props.professionalloginReducer.professional.industry && props.professionalloginReducer.professional.industry.length > 0 ? props.professionalloginReducer.professional.industry.map(ind => (
                    <option value={ind.cat_id}>{ind.cat_name !== null && ind.cat_name !== undefined ? ind.cat_name : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            {/* herreeeeee */}
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Currently Working</label>
              <br />
              <div className="form-check form-check-inline mt-1">
                {
                  props.professionalloginReducer.professional.stored_values && props.professionalloginReducer.professional.stored_values.employed_status !== null && props.professionalloginReducer.professional.stored_values.employed_status !== undefined && props.professionalloginReducer.professional.stored_values.employed_status == 1 ?
                    <input
                      id="yesinp"
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value={1}
                      defaultChecked={true}
                      onChange={(e) => setemployed_status(e.target.value)}
                    />
                    :
                    <input
                      id="yesinp"
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value={1}
                      // defaultChecked={false}
                      onChange={(e) => setemployed_status(e.target.value)}
                    />
                }

                <label className="form-check-label input-color-prof">Yes</label>
              </div>
              <div className="form-check form-check-inline mt-1">
                {
                  props.professionalloginReducer.professional.stored_values && props.professionalloginReducer.professional.stored_values.employed_status !== null && props.professionalloginReducer.professional.stored_values.employed_status !== undefined && props.professionalloginReducer.professional.stored_values.employed_status == 0 ?
                    <input
                      id="noinp"
                      className="form-check-input"
                      type="radio"
                      defaultChecked={true}
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value={0}
                      onChange={(e) => setemployed_status(e.target.value)}
                    /> :
                    <input
                      id="noinp"
                      className="form-check-input"
                      type="radio"
                      // defaultChecked={true}
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value={0}
                      onChange={(e) => setemployed_status(e.target.value)}
                    />
                }

                <label className="form-check-label input-color-prof">No</label>
              </div>
            </div>
          </div>
          {/* Inputs Row 2 Ends */}

          {/* Inputs Row 3 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">
                Current Career level
              </label>
              <select
                onChange={e => setfunctional_area(e.target.value)}
                value={functional_area}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>{props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.functional_area ? props.professionalloginReducer.professional.stored_values.functional_area.func_name !== null && props.professionalloginReducer.professional.stored_values.functional_area.func_name !== undefined ? props.professionalloginReducer.professional.stored_values.functional_area.func_name : "--Select--" : "--Select--" : "--Select--"}</option>
                {
                  props.professionalloginReducer.professional.functional_area && props.professionalloginReducer.professional.functional_area.length > 0 ? props.professionalloginReducer.professional.functional_area.map(fun => (
                    <option value={fun.id}>{fun.func_name !== null && fun.func_name !== undefined ? fun.func_name : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            {/* {
            employed_status==0  || employed_status == null?
                <>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">

                  </div>
                </>
                :
                <> */}
            <div className="col-md-2"></div>
            {
              props.professionalloginReducer.professional.stored_values && props.professionalloginReducer.professional.stored_values.employed_status !== null &&
                props.professionalloginReducer.professional.stored_values.employed_status !== undefined && props.professionalloginReducer.professional.stored_values.employed_status == 0 &&
                employed_status == null || employed_status == 0
                ?
                ""
                :
                <div className="col-md-5">
                  <label className="label-color-prof mt-3">Current Employer Name</label>
                  <input
                    onChange={e => setcurr_rec(e.target.value)}
                    defaultValue={props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.curr_rec !== null && props.professionalloginReducer.professional.stored_values.curr_rec !== undefined ? props.professionalloginReducer.professional.stored_values.curr_rec : "" : ""}
                    type="text"
                    className="form-control input-color-prof"
                    placeholder="Enter your current employer's name"
                  />
                </div>
            }

            {/* </> */}
            {/* } */}

          </div>
          {/* Inputs Row 3 Ends */}

          {/* Inputs Row 4 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Current Job Level</label>
              <select
                onChange={e => setwrk_lvl(e.target.value)}
                value={wrk_lvl}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>{props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.wrk_lvl ? props.professionalloginReducer.professional.stored_values.wrk_lvl.work_level !== null && props.professionalloginReducer.professional.stored_values.wrk_lvl.work_level !== undefined ? props.professionalloginReducer.professional.stored_values.wrk_lvl.work_level : "--Select--" : "--Select--" : "--Select--"}</option>
                {
                  props.professionalloginReducer.professional.work_level && props.professionalloginReducer.professional.work_level.length > 0 ? props.professionalloginReducer.professional.work_level.map(jlev => (
                    <option value={jlev.id}>{jlev.work_level !== null && jlev.work_level !== undefined ? jlev.work_level : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            {/* {
             employed_status==0  || employed_status == null?
                <>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">

                  </div>
                </>
                :
                <> */}
            <div className="col-md-2"></div>
            {
              props.professionalloginReducer.professional.stored_values && 
              props.professionalloginReducer.professional.stored_values.employed_status !== null 
              && props.professionalloginReducer.professional.stored_values.employed_status !== undefined 
              && props.professionalloginReducer.professional.stored_values.employed_status == 0 &&
                employed_status == null || employed_status == 0
                ?
                ""
                :
                <div className="col-md-5">
                  <label className="label-color-prof mt-3">Employer's Country</label>
                  <select
                    onChange={e => setemployer_city(e.target.value)}
                    value={employer_city}
                    className="form-control input-color-prof"
                    aria-label="Default select example"
                  >
                    <option selected>{props.professionalloginReducer.professional.stored_values ? 
                    props.professionalloginReducer.professional.stored_values.employer_city ? 
                    props.professionalloginReducer.professional.stored_values.employer_city.name !== null 
                    && props.professionalloginReducer.professional.stored_values.employer_city.name !== undefined ? 
                    props.professionalloginReducer.professional.stored_values.employer_city.name 
                    : "--Select--" : "--Select--" : "--Select--"}</option>
                    {
                      props.professionalloginReducer.professional.employer_city && props.professionalloginReducer.professional.employer_city.length > 0 ? props.professionalloginReducer.professional.employer_city.map(cit => (
                        <option value={cit.id}>{cit.name !== null && cit.name !== undefined ? cit.name : ""}</option>
                      )) : ""
                    }
                  </select>
                </div>
            }

            {/* </>
            } */}
          </div>
          {/* Inputs Row 4 Ends */}

          {/* Inputs Row 5 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Annual Salary Per annum</label>
              <select
                onChange={e => setsalary(e.target.value)}
                value={salary}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>{props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.salary ? props.professionalloginReducer.professional.stored_values.salary.sal_name !== null && props.professionalloginReducer.professional.stored_values.salary.sal_name !== undefined ? props.professionalloginReducer.professional.stored_values.salary.sal_name : "--Select--" : "--Select--" : "--Select--"}</option>
                {
                  props.professionalloginReducer.professional.salary_per_annum && props.professionalloginReducer.professional.salary_per_annum.length > 0 ? props.professionalloginReducer.professional.salary_per_annum.map(sal => (
                    <option value={sal.id}>{sal.sal_name !== null && sal.sal_name !== undefined ? sal.sal_name : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            {/* {
              
            //  props.professionalloginReducer.professional.stored_values||props.professionalloginReducer.professional.stored_values.employed_status==0 ?
             employed_status==0  || employed_status == null?
                <>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">

                  </div>
                </>
                :
                <> */}
            <div className="col-md-2"></div>
            {
              props.professionalloginReducer.professional.stored_values && props.professionalloginReducer.professional.stored_values.employed_status !== null &&
                props.professionalloginReducer.professional.stored_values.employed_status !== undefined && props.professionalloginReducer.professional.stored_values.employed_status == 0 &&
                employed_status == null || employed_status == 0
                ?
                ""
                :
                <div className="col-md-5">
                  <label className="label-color-prof mt-3">
                    Started working from
                  </label>
                  <input
                    onChange={e => setworking_from(e.target.value.toString())}
                    type="date"
                    className="form-control input-color-prof"
                    placeholder="ex. 03/2018 - 03/2020"
                    defaultValue={props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.working_from !== null && props.professionalloginReducer.professional.stored_values.working_from !== undefined ? props.professionalloginReducer.professional.stored_values.working_from : "" : ""}

                  />
                </div>
            }

            {/* </>
            //     :
            //     <>
            //     <div className="col-md-2"></div>
            //     <div className="col-md-5">
            //       <label className="label-color-prof mt-3">
            //         Started working from
            // </label>
            //       <input */}
            {/* //         onChange={e => setworking_from(e.target.value.toString())}
            //         type="date"
            //         className="form-control input-color-prof"
            //         placeholder="ex. 03/2018 - 03/2020"
            //         defaultValue={ props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.working_from !== null && props.professionalloginReducer.professional.stored_values.working_from !== undefined ? props.professionalloginReducer.professional.stored_values.working_from : "" : ""}

            //       />
            //     </div>
            //   </>
              
            // } */}
          </div>
          {/* Inputs Row 5 Ends */}

          {/* Inputs Row 6 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Notice Period</label>
              <select
                className="form-control input-color-prof"
                aria-label="Default select example"
                onChange={(e) => setavailability(e.target.value)}
                value={availability}
              >
                <option selected>{props.professionalloginReducer.professional.stored_values ? props.professionalloginReducer.professional.stored_values.availability ? props.professionalloginReducer.professional.stored_values.availability.ava_name !== null && props.professionalloginReducer.professional.stored_values.availability.ava_name !== undefined ? props.professionalloginReducer.professional.stored_values.availability.ava_name : "--Select--" : "--Select--" : "--Select--"}</option>
                {
                  props.professionalloginReducer.professional.availablity && props.professionalloginReducer.professional.availablity.length > 0 ? props.professionalloginReducer.professional.availablity.map(ava => (
                    <option value={ava.id}>{ava.ava_name !== null && ava.ava_name !== undefined ? ava.ava_name : ""}</option>
                  )) : ""
                }
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5"></div>
          </div>
          {/* Inputs Row 6 Ends */}

          {/* Inputs Row 7 Button Starts */}
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center">
              <button
                onClick={() => addNewProfessional()}
                className="btn btn-warning prof-det-btn-main"
                // f
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
      {props.professionalloginReducer.loading == true ?
        null :
        <FullPageLoader />
      }
      {props.professionalloginReducer.loading == false ?
        <FullPageLoader /> :
        null
      }
    </div>
  );
}


const mapStateToProps = state => ({
  auth: state.auth,
  professionalloginReducer: state.professionalloginReducer,
  profileReducer: state.profileReducer

})


const mapDispatchToProps = dispatch => ({
  // getProfile:(userId)=>dispatch(getProfile(userId)),
  getProfessionalLogin: (userId) => dispatch(getProfessionalLogin(userId)),
  createProfessionalLogin: (userId, exp_level, industry, functional_area, wrk_lvl, salary, availability, employed_status, curr_title,
    curr_rec, employer_city, working_from) => dispatch(createProfessionalLogin(userId, exp_level, industry, functional_area, wrk_lvl, salary, availability, employed_status, curr_title,
      curr_rec, employer_city, working_from)),

})
export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalDetailsLogin)
