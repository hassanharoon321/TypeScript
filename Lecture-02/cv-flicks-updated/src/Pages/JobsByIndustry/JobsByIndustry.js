import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JobsByIndustry.css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav2 from "../../Components/Nav2/Nav2";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import { getJobsIndustry } from "../../actions/job_industryAction";
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";

function JobsByIndustry(props) {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");
  const compIndustry = new URLSearchParams(search).get("industry");
  const jobsName = search.split('?')[2].split('=')[1]
  const jobsCount = search.split('?')[3].split('=')[1]

  useEffect(() => {
    loadGetProfessional(compIds)
  });
  const loadGetProfessional = async (id) => {
    await props.getJobsIndustry(id)
    return null;
  }
  return (
    <>
      <Nav2 />
      <div className="container">
        {/* Heading Starts */}
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="">Jobs For {jobsName}</h1>
            <h3 className="">Showing {jobsCount} {jobsName} Jobs</h3>
          </div>
        </div>
        {/* Heading Ends */}

        {/* <button onClick={() => console.log(props.jobIndustryReducer.jobIndustry.jobs)}>click me</button> */}

        {/* Managment Starts */}
        <div className="row">
          <div className="col-md-10 mt-5 pt-2" style={{ maxHeight: "700px", overflowY: "scroll" }}>
            {/* Top Managment Box-1 Starts */}
            <div>
              {
                props.jobIndustryReducer.jobIndustry.jobs && props.jobIndustryReducer.jobIndustry.jobs.length > 0 ? props.jobIndustryReducer.jobIndustry.jobs.map(job => (
                  <Link className="top-manag-link-def">
                    <div className="shadow mb-5" style={{ borderRadius: "15px" }}>
                      <div className="managment-box-head">
                        <h2 className="hiring-color">
                          {job.job_desc ? job.job_desc !== null && job.job_desc !== undefined
                            ? job.job_desc : ""
                            : ""}
                        </h2>
                        <p className="hiring-down-color">
                          {job.company_name ? job.company_name !== null && job.company_name !== undefined
                            ? job.company_name : ""
                            : ""}
                        </p>
                      </div>
                      <div className="experience-div">
                        <div className="experience-div-01">
                          <img src={Briefcase} />
                          <span className="left-to-icon-top-manag">
                            {job.salary_max ? job.salary_max !== null && job.salary_max !== undefined
                              ? job.salary_max : ""
                              : ""} -
                            {job.salary_min ? job.salary_min !== null && job.salary_min !== undefined
                              ? job.salary_min : ""
                              : ""} Years

                        </span>
                        </div>
                        <div className="experience-div-02">
                          <img src={Location} />
                          <span className="left-to-icon-top-manag">
                            {job.city ? job.city !== null && job.city !== undefined
                              ? job.city : ""
                              : ""} -
                            {job.country ? job.country !== null && job.country !== undefined
                              ? job.country : ""
                              : ""}
                          </span>
                        </div>
                        <div className="experience-div-03">
                          <img src={Pen} />
                          <span className="left-to-icon-top-manag">
                            {job.functional_area ? job.functional_area !== null && job.functional_area !== undefined
                              ? job.functional_area : ""
                              : ""}
                          </span>
                        </div>
                      </div>
                      <div className="box-last-main">
                        <p>
                          text
                  </p>

                      </div>
                    </div>
                  </Link>
                )) : "Loading..."
              }
            </div>
          </div>

          <div className="placeholder-for-ads2 col-md-2">Placeholder for Ads</div>
        </div>
        {/* Managment Ends */}
      </div>
    </>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  jobIndustryReducer: state.jobIndustryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getJobsIndustry: (id) => dispatch(getJobsIndustry(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsByIndustry);

// export default HomeJobsOpen;
