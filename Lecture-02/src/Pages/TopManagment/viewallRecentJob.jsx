import React from "react";
import { Link } from "react-router-dom";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import "./TopManagment.css";
import { getTopManagement } from "../../actions/topmanagementAction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import FooterTwo from "../../Components/Footer/Footer2";
import SearchIcon from "../../Assests/Search.svg";
import "../../App.css"

function ViewAllRecentJob(props) {
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"));
  });
  const loadGetProfessional = async (userId) => {
    await props.getTopManagement(userId);
    return null;
  };
  return (
    <>
      <Navbar />
      <div className="container my-5 pb-5">
        <div className=" mt-5">
          {/* Heading Starts */}

          <div className="row pt-3">
            <div className="col-md-12 pb-5">
              <h1
                className="top-managment-jobs-head font-weight-bold"
                style={{ color: "#865ddd" }}
              >
                Recent Jobs
              </h1>
              <p
                className="showing-99-jobs font-weight-bold"
                style={{ color: "#011F95" }}
              >
                Showing{" "}
                {props.topmanagementReducer.topmanagement.jobs &&
                props.topmanagementReducer.topmanagement.jobs.length > 0
                  ? props.topmanagementReducer.topmanagement.jobs.length + 1
                  : ""}{" "}
                Jobs
              </p>
            </div>
            <div className="col-md-12 mb-5 shadow rounded pr-0">
              <Link className="link-tag-home">
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white border-0">
                      <img src={SearchIcon} />
                    </span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setSearchItem(e.target.value)}
                    className="form-control border-left-0 border-right-0 pl-0 border-0"
                    placeholder="Search..."
                    style={{
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  />
                  <div className="input-group-append">
                    {/* <Link to="search-jobs" className=""> */}
                    <span
                      className="input-group-text text-white"
                      style={{
                        backgroundColor: "#FFB44A",
                        borderColor: "#FFB44A",
                        fontWeight: "bold !important",
                      }}
                    >
                      SEARCH
                    </span>
                    {/* </Link> */}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Heading Ends */}

          {/* Managment Starts */}
          <div className="row mt-3">
            {/* <button onClick={()=>console.log(props.dashboardjobReducer.dashboardjob)}>hhhh</button> */}
            <div className="col-md-9 over">
              {/* <div className="mt-3"> */}
              {/* Top Managment Box-1 Starts */}

              {props.topmanagementReducer.topmanagement.jobs &&
              props.topmanagementReducer.topmanagement.jobs.length > 0 ? (
                props.topmanagementReducer.topmanagement.jobs
                  .filter((val) => {
                    if (searchItem == "") {
                      return val;
                    } else if (
                      val.job_title
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((job) => (
                    <Link
                      to={`/jobdetaillog?id=${job.id}`}
                      className="top-manag-link-def link-tag-home"
                    >
                      <div
                        className="hover shadow mb-5"
                        style={{ borderRadius: "10px" }}
                      >
                        <div className="managment-box-head">
                          <h2 className="hiring-color">
                            {" "}
                            {job.job_title !== null &&
                            job.job_title !== undefined
                              ? job.job_title
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
                            <img src={Location} />
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
              ) : (
                <div>
                  <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">No Jobs</span>
                  </div>
                </div>
              )}
              {/* </div> */}
            </div>
            <div className="col-md-1"></div>
            <div
              className="col-md-2"
              style={{
                background: "#D8E8FF",
                borderRadius: "15px",
                height: "900px",
              }}
            >
              <div
                className="placeholder-for-ads mt-5 text-center"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed",fontSize:"40px" }}
              >
                Placeholder for Ads
              </div>
            </div>
          </div>
          {/* Managment Ends */}
        </div>
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
  getTopManagement: (userId) => dispatch(getTopManagement(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewAllRecentJob);
