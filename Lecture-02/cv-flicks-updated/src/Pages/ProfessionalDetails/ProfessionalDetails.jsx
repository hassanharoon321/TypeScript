import React from "react";
import "./ProfessionalDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getProfessional,
  createProfessional,
} from "../../actions/professionalaction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";

function ProfessionalDetails(props) {
  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"));
  }, []);
  const loadGetProfessional = async (userId) => {
    await props.getProfessional(userId);
    return null;
  };
  const [current, setCurrent] = useState(null);
  const [Exp_level, setExp_level] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [functional_area, setfunctional_area] = useState(null);
  const [wrk_lvl, setwrk_lvl] = useState(null);
  const [salary, setsalary] = useState(null);
  const [availability, setavailability] = useState(null);
  const [employed_status, setemployed_status] = useState(null);
  const [curr_title, setcurr_title] = useState("");
  const [curr_rec, setcurr_rec] = useState("");
  const [employer_city, setemployer_city] = useState(null);
  const [working_from, setworking_from] = useState("");

  const addNewProfessional = async () => {
    console.log("qwerty");
    await props.createProfessional(
      localStorage.getItem("auth_id"),
      Exp_level,
      industry,
      functional_area,
      wrk_lvl,
      salary,
      availability,
      employed_status,
      curr_title,
      curr_rec,
      employer_city,
      working_from
    );
    // window.location.reload(false);
  };

  const handleExperience = (e) => {
    setExp_level(e.target.value);
  };

  return (
    <div className="container mt-5">
      {/* <button onClick={()=>console.log(props.professionalReducer.professional)}>jkh</button> */}
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
                onChange={handleExperience}
                value={Exp_level}
                className="form-control"
                aria-label="Default select example"
              >
                <option selected style={{ color: "#707070" }}>
                  -- Select --
                </option>
                {props.professionalReducer.professional.experience_level &&
                props.professionalReducer.professional.experience_level.length >
                  0
                  ? props.professionalReducer.professional.experience_level.map(
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
            {/* here.............. */}
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="label-color-prof mt-3">
                Current Designation or Title (For recruiters to find you)
              </label>
              <input
                onChange={(e) => setcurr_title(e.target.value)}
                value={curr_title}
                type="text"
                className="form-control input-color-prof"
                placeholder="Enter your current designation or title"
              />
            </div>
          </div>
          {/* Inputs Row 1 Ends */}

          {/* Inputs Row 2 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Current Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>-- Select --</option>
                {props.professionalReducer.professional.industry &&
                props.professionalReducer.professional.industry.length > 0
                  ? props.professionalReducer.professional.industry.map(
                      (ind) => (
                        <option value={ind.cat_id}>
                          {ind.cat_name !== null && ind.cat_name !== undefined
                            ? ind.cat_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            {/* here.................... */}
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Currently Working</label>
              <br />
              <div className="form-check form-check-inline mt-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value={1}
                  // checked={current == true}
                  onChange={(e) => setemployed_status(e.target.value)}
                />
                <label className="form-check-label input-color-prof">Yes</label>
              </div>
              <div className="form-check form-check-inline mt-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value={0}
                  // checked={current == false}
                  onChange={(e) => setemployed_status(e.target.value)}
                />
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
                onChange={(e) => setfunctional_area(e.target.value)}
                value={functional_area}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>-- Select --</option>
                {props.professionalReducer.professional.functional_area &&
                props.professionalReducer.professional.functional_area.length >
                  0
                  ? props.professionalReducer.professional.functional_area.map(
                      (fun) => (
                        <option value={fun.id}>
                          {fun.func_name !== null && fun.func_name !== undefined
                            ? fun.func_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            {employed_status == 0 || employed_status == null ? (
              <>
                <div className="col-md-2"></div>
                <div className="col-md-5"></div>
              </>
            ) : (
              <>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <label className="label-color-prof mt-3">
                    Current Employer Name
                  </label>
                  <input
                    onChange={(e) => setcurr_rec(e.target.value)}
                    value={curr_rec}
                    type="text"
                    className="form-control input-color-prof"
                    placeholder="Enter your current recruiter's name"
                  />
                </div>
              </>
            )}
          </div>
          {/* Inputs Row 3 Ends */}

          {/* Inputs Row 4 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Job Type</label>
              <select
                onChange={(e) => setwrk_lvl(e.target.value)}
                value={wrk_lvl}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>-- Select --</option>
                {props.professionalReducer.professional.work_level &&
                props.professionalReducer.professional.work_level.length > 0
                  ? props.professionalReducer.professional.work_level.map(
                      (jlev) => (
                        <option value={jlev.id}>
                          {jlev.work_level !== null &&
                          jlev.work_level !== undefined
                            ? jlev.work_level
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            {employed_status == 0 || employed_status == null ? (
              <>
                <div className="col-md-2"></div>
                <div className="col-md-5"></div>
              </>
            ) : (
              <>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <label className="label-color-prof mt-3">
                    Employer's Country
                  </label>
                  <select
                    onChange={(e) => setemployer_city(e.target.value)}
                    value={employer_city}
                    className="form-control input-color-prof"
                    aria-label="Default select example"
                  >
                    <option selected>--Select--</option>
                    {props.professionalReducer.professional.employer_city &&
                    props.professionalReducer.professional.employer_city
                      .length > 0
                      ? props.professionalReducer.professional.employer_city.map(
                          (cit) => (
                            <option value={cit.id}>
                              {cit.name !== null && cit.name !== undefined
                                ? cit.name
                                : ""}
                            </option>
                          )
                        )
                      : ""}
                  </select>
                </div>
              </>
            )}
          </div>
          {/* Inputs Row 4 Ends */}

          {/* Inputs Row 5 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Salary Per annum</label>
              <select
                onChange={(e) => setsalary(e.target.value)}
                value={salary}
                className="form-control input-color-prof"
                aria-label="Default select example"
              >
                <option selected>-- Select --</option>
                {props.professionalReducer.professional.salary_per_annum &&
                props.professionalReducer.professional.salary_per_annum.length >
                  0
                  ? props.professionalReducer.professional.salary_per_annum.map(
                      (sal) => (
                        <option value={sal.id}>
                          {sal.sal_name !== null && sal.sal_name !== undefined
                            ? sal.sal_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            {employed_status == 0 || employed_status == null ? (
              <>
                <div className="col-md-2"></div>
                <div className="col-md-5"></div>
              </>
            ) : (
              <>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <label className="label-color-prof mt-3">
                    Started working from
                  </label>
                  <input
                    onChange={(e) => setworking_from(e.target.value.toString())}
                    value={working_from}
                    type="date"
                    className="form-control input-color-prof"
                    placeholder="ex. 03/2018 - 03/2020"
                  />
                </div>
              </>
            )}
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
                <option selected>-- Select --</option>
                {props.professionalReducer.professional.availablity &&
                props.professionalReducer.professional.availablity.length > 0
                  ? props.professionalReducer.professional.availablity.map(
                      (ava) => (
                        <option value={ava.id}>
                          {ava.ava_name !== null && ava.ava_name !== undefined
                            ? ava.ava_name
                            : ""}
                        </option>
                      )
                    )
                  : ""}
              </select>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5"></div>
          </div>
          {/* Inputs Row 6 Ends */}

          {/* Inputs Row 7 Button Starts */}
          <div className="row mt-5">
            <div className="col-md-2"></div>
            {/* <h1 onChange={()=>(employed_status)}>Click me</h1> */}
            <div className="col-md-8 d-flex justify-content-center">
              <button
                onClick={() => addNewProfessional()}
                disabled={
                  !Exp_level === false &&
                  !industry === false &&
                  !functional_area === false &&
                  !wrk_lvl === false &&
                  !salary === false &&
                  !availability === false &&
                  !curr_title === false
                    ? false
                    : true
                }
                className="btn btn-warning prof-det-btn-main"
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
      {props.professionalReducer.loading == false ? <FullPageLoader /> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  professionalReducer: state.professionalReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getProfessional: (userId) => dispatch(getProfessional(userId)),
  createProfessional: (
    userId,
    exp_level,
    industry,
    functional_area,
    wrk_lvl,
    salary,
    availability,
    employed_status,
    curr_title,
    curr_rec,
    employer_city,
    working_from
  ) =>
    dispatch(
      createProfessional(
        userId,
        exp_level,
        industry,
        functional_area,
        wrk_lvl,
        salary,
        availability,
        employed_status,
        curr_title,
        curr_rec,
        employer_city,
        working_from
      )
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessionalDetails);

{
  /* <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="label-color-prof mt-3">Currently Working</label>
              <br />
              <div className="form-check form-check-inline mt-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value={false}
                  checked={current == true}
                  onChange={(e) => setCurrent(true)}
                />
                <label className="form-check-label input-color-prof">Yes</label>
              </div>
              <div className="form-check form-check-inline mt-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value={false}
                  checked={current == false}
                  onChange={(e) => setCurrent(false)}
                />
                <label className="form-check-label input-color-prof">No</label>
              </div>
            </div>
          </div> */
}

// !Exp_level === false &&
//                   !industry === false &&
//                   !functional_area === false &&
//                   !wrk_lvl === false &&
//                   !salary === false &&
//                   !availability === false &&
//                   // *********
//                   !curr_title === false &&
//                   !curr_rec === false &&
//                   !employer_city === false &&
//                   !working_from === false
//                     ? //*********
//                       // current === true
//                       //   ? !curr_title === true &&
//                       //     !curr_rec === true &&
//                       //     !employer_city === true &&
//                       //     !working_from === true &&
//                       //   : current === true
//                       false
//                     : true
