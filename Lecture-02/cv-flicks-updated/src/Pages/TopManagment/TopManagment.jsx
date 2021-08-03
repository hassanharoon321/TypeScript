import React from "react";
import { Link } from "react-router-dom";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import "./TopManagment.css";
import SearchIcon from "../../Assests/Search.svg";
import { useState, useEffect } from "react";
import { getAllJobs } from "../../actions/alljobAction";
import { connect } from "react-redux";
import Nav2 from "../../Components/Nav2/Nav2";
import FooterTwo from "../../Components/Footer/Footer2";
import "../../App.css"

function TopManagment(props) {
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"));
  });
  const loadGetProfessional = async (userId) => {
    await props.getAllJobs(userId);
    return null;
  };
  return (
    <>
      <Nav2 />
      <div className="container my-5">
        {/* Heading Starts */}
        <div className="row">
          <div className="col-md-12">
            <h1 className="font-weight-bold" style={{ color: "#865ddd" }}>
              Recent Jobs
            </h1>
            <p className="font-weight-bold" style={{ color: "#011F95" }}>
              Showing{" "}
              {props.alljobsReducer.alljobs.jobs &&
              props.alljobsReducer.alljobs.jobs.length > 0
                ? props.alljobsReducer.alljobs.jobs.length + 1
                : "0"}{" "}
              Jobs
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-5  shadow rounded pr-0">
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
                  style={{
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }}
                />
                <div className="input-group-append">
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
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            {/* Top Managment Box-1 Starts */}
            {props.alljobsReducer.alljobs.jobs &&
            props.alljobsReducer.alljobs.jobs.length > 0 ? (
              props.alljobsReducer.alljobs.jobs
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
                    to={`/job-details?id=${job.id}`}
                    className="link-tag-home"
                  >
                    <div
                      className="row shadow hover mb-5 px-2 py-2 mx-1"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="col-md-12">
                        <h2 className="hiring-color p-0 m-0">
                          {" "}
                          {job.job_title !== null && job.job_title !== undefined
                            ? job.job_title.charAt(0).toUpperCase() +
                              job.job_title.substr(1).toLowerCase()
                            : ""}
                        </h2>
                        <p className="hiring-down-color m-0 mb-2">
                          {job.rec !== null && job.rec !== undefined
                            ? job.rec
                            : ""}
                        </p>
                      </div>
                      <div className="experience-div">
                        <div className="experience-div-01">
                          <img src={Briefcase} className="p-0 m-0" />
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
                        <p className="m-0 p-0 mb-2">
                          {job.description !== null &&
                          job.description !== undefined
                            ? job.description
                            : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
            ) : props.alljobsReducer.alljobs.jobs == 0 ? (
              <>
                <h3>No Jobs Available..</h3>
              </>
            ) : (
              <div>
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">No Jobs</span>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-1 px-0"></div>
          <div
            className="col-md-2 px-0 placeholder-for-ads2 px-2"
            style={{ minHeight: "600px" }}
          >
            Placeholder for Ads
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
  alljobsReducer: state.alljobsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllJobs: (userId) => dispatch(getAllJobs(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TopManagment);

{
  /* <div className="col-md-9"> */
}

{
  /* Top Managment Box-1 Starts */
}
{
  /* {props.alljobsReducer.alljobs.jobs &&
props.alljobsReducer.alljobs.jobs.length > 0
  ? props.alljobsReducer.alljobs.jobs.map((job) => (
      <div className="row">
        <div className="col-md-12">
          <Link
            to={`/job-details?id=${job.id}`}
            className="top-manag-link-def"
          >
            <div className="top-managment-box-1">
              <div className="managment-box-head">
                <h2 className="hiring-color">
                  Hiring{" "}
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
        </div>
      </div>
    ))
  : ""}
</div>
<div className="col-md-3">
<div className="placeholder-for-ads">Placeholder for Ads</div>
</div> */
}
