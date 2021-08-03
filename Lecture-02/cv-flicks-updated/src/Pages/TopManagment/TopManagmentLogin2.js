import React from "react";
import { Link } from "react-router-dom";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import "./TopManagment.css";
import { getTopManagementLogin } from "../../actions/get_top_managment_loginAction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import FooterTwo from "../../Components/Footer/Footer2";
import { useLocation, useHistory } from "react-router-dom";
import Nav2 from "../../Components/Nav2/Nav2";

function TopManagmentLogin2(props) {
  const search = useLocation().search.trim();
  const compIds = new URLSearchParams(search).get("id");
  const compIndustry = new URLSearchParams(search).get("industry");
  const jobsName = search.split("?")[2].split("=")[1].trim();

  const jobsCount = search.split("?")[3].split("=")[1];
  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"), compIds);
  }, []);

  const loadGetProfessional = async (userId, id) => {
    await props.getTopManagementLogin(userId, id);
    return null;
  };

  return (
    <>
      <Nav2 />
      <div className="container my-5">
        {/* Heading Starts */}
        <div className="row mb-5">
          <div className="col-md-12">
            <h1 className="font-weight-bold" style={{ color: "#865ddd" }}>
              Jobs For {jobsName && jobsName.includes("%20")
                ? jobsName.replace("%20", " ")
                : jobsName}
            </h1>
            <p className="font-weight-bold" style={{ color: "#011F95" }}>
              Showing {jobsCount && jobsCount.includes("%20")
                ? jobsCount.replace("%20", " ")
                : jobsCount} {jobsName && jobsName.includes("%20")
                  ? jobsName.replace("%20", " ")
                  : jobsName} Jobs
            </p>
          </div>
        </div>
        {/* Heading Ends */}

        {/* Managment Starts */}
        <div className="row pb-5">
          <div
            className="col-md-9 pt-3"
          // style={{ maxHeight: "700px", overflowY: "scroll" }}
          >
            {/* Top Managment Box-1 Starts */}
            {/* <button onClick={() => console.log("gggg", props.topmanagementReducer.topmanagement)}>gggggggg</button> */}
            {props.topmanagementReducer.topmanagement.jobs &&
              props.topmanagementReducer.topmanagement.jobs.length > 0 ? (
              props.topmanagementReducer.topmanagement.jobs.map((job) => (
                <Link
                  to={`/job-details?id=${job.id}`}
                  className="link-tag-home"
                >

                  <div
                    className="row shadow mb-5 px-2 py-4 mx-1"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="col-md-12">
                      <h2 className="hiring-color">
                        {" "}
                        {job.job_title !== null && job.job_title !== undefined
                          ? job.job_title.charAt(0).toUpperCase() +
                          job.job_title.substr(1).toLowerCase()
                          : ""}
                      </h2>
                      <p className="hiring-down-color">
                        {job.rec !== null && job.rec !== undefined
                          ? job.rec
                          : ""}
                      </p>
                    </div>
                    <div className="experience-div">
                      <div className="experience-div-01">
                        <img src={Briefcase} />
                        <span className="left-to-icon-top-manag">
                          {job.exp !== null && job.exp !== undefined
                            ? job.exp
                            : ""}
                        </span>
                      </div>
                      <div className="experience-div-02">
                        <img src={Location} height="16px" />
                        <span className="left-to-icon-top-manag">
                          {job.city !== null && job.city !== undefined
                            ? job.city
                            : ""}{" "}
                          ,{" "}
                          {job.country !== null && job.country !== undefined
                            ? job.country
                            : ""}
                        </span>
                      </div>
                      <div className="experience-div-03">
                        <img src={Pen} />
                        <span className="left-to-icon-top-manag">
                          {job.func !== null && job.func !== undefined
                            ? job.func
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="box-last-main">
                      <p>
                        {job.description !== null &&
                          job.description !== undefined
                          ? job.description
                          : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : jobsCount == 0 ? (
              <>
                <p style={{ fontSize: "16px" }}>No Jobs Available..</p>
              </>
            ) : (
              <div>
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">No Jobs</span>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 col-lg-2 m-0 p-0">
            <div
              style={{
                background: "#D8E8FF",
                borderRadius: "15px",
                minHeight: "800px",
                
              }}
              className="p-2 pt-5"
            >
              <p style={{writingMode: "vertical-rl",
                textOrientation: "mixed",fontSize:"40px",marginTop:"100px"}} className="text-center ml-5 mt-5">
              Placeholder for Ads

                </p>
            </div>
          </div>
        </div>
        {/* Managment Ends */}
      </div>
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  topmanagementReducer: state.topmanagementReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getTopManagementLogin: (userId, id) => dispatch(getTopManagementLogin(userId, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TopManagmentLogin2);
