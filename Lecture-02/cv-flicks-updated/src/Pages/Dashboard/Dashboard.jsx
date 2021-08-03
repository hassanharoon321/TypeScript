import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardProfileCard from "../../Components/DashboardProfileCard/DashboardProfileCard";
import "./Dashboard.css";
import FooterTwo from "../../Components/Footer/Footer2";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import SearchIcon from "../../Assests/Search.svg";
import LocationIcon from "../../Assests/Location.svg";
import Banner from "../../Components/Banner";
import { getDashboardLogin } from "../../actions/dashboardloginAction";
import { connect } from "react-redux";
import Nav2 from "../../Components/Nav2/Nav2";
import bannerr from "../../Assests/banner.png";
import "../../App.css";

function Dashboard(props) {
  useEffect(() => {
    loadGetPersonal(localStorage.getItem("auth_id"));
  }, []);
  const loadGetPersonal = async (userId) => {
    await props.getDashboardLogin(userId);
    return null;
  };
  const text_truncate = (str, length, ending) => {
    if (length == null) {
      length = 22;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  function capitalize(str) {
    return (
      str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase()
    );
  }

  function titleCase(str) {
    return str.replace(/[^\ \/\-\_]+/g, capitalize);
  }

  return (
    <>
      <Nav2 />

      <div className="conatiner-fluid bg_img-dash">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="row mt-5">
                <div className="col-md-12 ">
                  {/* <button
                    onClick={() =>
                      console.log(props.dashboardLoginReducer.premium)
                    }
                  >
                    Click ke
                  </button> */}
                  <h3 style={{ color: "#fff", fontWeight: "bold" }}>
                    Welcome Back,{" "}
                    {props.dashboardLoginReducer.dashboardlogin.profile
                      ? props.dashboardLoginReducer.dashboardlogin.profile
                          .name !== null &&
                        props.dashboardLoginReducer.dashboardlogin.profile
                          .name !== undefined
                        ? titleCase(
                            props.dashboardLoginReducer.dashboardlogin.profile
                              .name
                          )
                        : ""
                      : ""}
                    !
                  </h3>
                </div>
              </div>
              <Link to="/search_login" className="link-tag-home">
                <div className="row pt-3">
                  <div className="col-md-6 mr-lg-0 pr-lg-0  mr-md-0 pr-md-0 ">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white">
                          <img src={SearchIcon} />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control border-left-0 border-right-0 pl-0"
                        placeholder="Job Title, Industry, Experience"
                        style={{
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ml-lg-0 pl-lg-0 ml-md-0 pl-md-0 d-lg-block d-md-block d-none">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white">
                          {" "}
                          <img src={LocationIcon} />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control border-left-0 border-right-0 pl-0"
                        placeholder="Location"
                        style={{ borderRadius: "0px", cursor: "pointer" }}
                      />
                      <div className="input-group-append">
                        {/* <Link to="search-jobs" className=""> */}
                        <span
                          className="input-group-text text-white font-weight-bold"
                          style={{
                            backgroundColor: "#FFB44A",
                            borderColor: "#FFB44A",
                            fontWeight: "bold !important",
                            cursor: "pointer",
                            textDecorationColor: "#fff",
                          }}
                        >
                          SEARCH
                        </span>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ position: "relative", top: "-75px" }}>
        <div className="row">
          <div className="col-md-4 ">
            <div
              className="py-4 px-3 shadow bg-white"
              style={{ borderRadius: "15px" }}
            >
              <div className="row px-3">
                <div className="col-lg-3 col-md-12 col-4 py-2 text-center">
                  {props.dashboardLoginReducer.dashboardlogin.profile &&
                  props.dashboardLoginReducer.dashboardlogin.profile.dp !==
                    null &&
                  props.dashboardLoginReducer.dashboardlogin.profile.dp !==
                    "" &&
                  props.dashboardLoginReducer.dashboardlogin.profile.dp !==
                    undefined ? (
                    <img
                      src={
                        props.dashboardLoginReducer.dashboardlogin.profile.dp
                      }
                      height="100%"
                      width="100%"
                      style={{
                        objectFit: "cover",
                        border: "1px solid #c8c8c8",

                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <i
                      className="far fa-user fa-3x mt-1"
                      style={{
                        borderRadius: "15px",
                        border: "1px solid #c8c8c8",
                      }}
                      style={{ color: "lightgray" }}
                    ></i>
                  )}
                </div>
                <div className="col-lg-9 col-md-12 col-8 my-auto">
                  <h4
                    className=" p-0 m-0 font-weight-bold"
                    style={{ color: "#362658" }}
                  >
                    {props.dashboardLoginReducer.dashboardlogin.profile
                      ? props.dashboardLoginReducer.dashboardlogin.profile
                          .name !== null &&
                        props.dashboardLoginReducer.dashboardlogin.profile
                          .name !== undefined
                        ? titleCase(
                            props.dashboardLoginReducer.dashboardlogin.profile
                              .name
                          )
                        : ""
                      : ""}
                  </h4>
                  <small style={{ color: "#707070" }}>
                    {props.dashboardLoginReducer.dashboardlogin.profile
                      ? props.dashboardLoginReducer.dashboardlogin.profile
                          .proffession !== null &&
                        props.dashboardLoginReducer.dashboardlogin.profile
                          .proffession !== undefined
                        ? props.dashboardLoginReducer.dashboardlogin.profile
                            .proffession
                        : ""
                      : ""}
                  </small>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <h3
                    className="mb-0 font-weight-bold"
                    style={{ color: "#865ddd" }}
                  >
                    {props.dashboardLoginReducer.dashboardlogin.profile
                      ? props.dashboardLoginReducer.dashboardlogin.profile
                          .percentage !== null &&
                        props.dashboardLoginReducer.dashboardlogin.profile
                          .percentage !== undefined
                        ? props.dashboardLoginReducer.dashboardlogin.profile
                            .percentage
                        : ""
                      : ""}
                    <small
                      style={{ fontSize: "14px" }}
                      className="font-weight-bold"
                    >
                      % Profile Complete
                    </small>
                  </h3>
                </div>
                <div className="col-md-4 text-right pt-3">
                  {/* <p
                    className="mb-0"
                    style={{ fontSize: "12px", color: "#C8C8C8" }}
                  >
                    Updated Today
                  </p> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <progress
                    className="w-100"
                    value={
                      props.dashboardLoginReducer.dashboardlogin.profile
                        ? props.dashboardLoginReducer.dashboardlogin.profile
                            .percentage !== null &&
                          props.dashboardLoginReducer.dashboardlogin.profile
                            .percentage !== undefined
                          ? props.dashboardLoginReducer.dashboardlogin.profile
                              .percentage
                          : ""
                        : ""
                    }
                    max="100"
                  />
                </div>
              </div>
              {props.dashboardLoginReducer.dashboardlogin.profile ? (
                props.dashboardLoginReducer.dashboardlogin.profile
                  .percentage !== 100 ? (
                  <div
                    className="row mx-1 my-2"
                    style={{ backgroundColor: "#FFEFEF", borderRadius: "10px" }}
                  >
                    <div className="col-md-12 py-2">
                      <p
                        className="font-weight-bold p-0 m-0"
                        style={{ fontSize: "12px", color: "#707070" }}
                      >
                        Complete Your Profile Now!
                      </p>
                      <p
                        className="p-0 m-0 mar-btn-alert-text"
                        style={{ fontSize: "10px", color: "#c8c8c8" }}
                      >
                        You are missing out opportunities!Completing your
                        profile will make it easier to show up in search!
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )
              ) : (
                <div>
                  <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">No Jobs</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8">
            {props.dashboardLoginReducer.dashboardlogin.job_alert_status !==
              null &&
            props.dashboardLoginReducer.dashboardlogin.job_alert_status !==
              undefined ? (
              props.dashboardLoginReducer.dashboardlogin.job_alert_status ==
              0 ? (
                <div
                  className="row shadow bg-white mx-3 py-2 px-2 mt-lg-0 mt-md-0 mt-3"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="col-md-9">
                    <h1
                      style={{ fontSize: "22px", color: "#362658" }}
                      className="font-weight-bold "
                    >
                      Looking for a specific job?
                    </h1>
                    <p style={{ fontSize: "12px", color: "#362658" }}>
                      Create a Job Alert! We will notify you whenever there is a
                      new job that is suitable for you.
                    </p>
                  </div>
                  <div className="col-md-3 text-right my-auto">
                    <Link to="create-job-alert">
                      <button
                        className="btn btn-warning font-weight-bold"
                        style={{
                          fontSize: "13px",
                          color: "#fff",
                          background: "#FFB44A",
                        }}
                      >
                        Create a Job Alert
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            <div className="row mx-lg-0 mx-md-0 mx-3">
              {/* <div className="col-md-2"></div> */}
              <div className="col-md-6 text-lg-right text-md-right">
                {props.dashboardLoginReducer.dashboardlogin.profile ? (
                  props.dashboardLoginReducer.dashboardlogin.profile
                    .premium_status == 1 ? (
                    <Link to="profile-viewed">
                      <button
                        className="shadow p-3 pl-5 pr-5 font-weight-bold mt-5"
                        style={{
                          backgroundColor: "#fff",
                          border: "0",
                          borderRadius: "10px",
                          color: "#362658",
                        }}
                      >
                        Profile Viewed{" "}
                        {props.dashboardLoginReducer.dashboardlogin
                          ? props.dashboardLoginReducer.dashboardlogin.views !==
                              null &&
                            props.dashboardLoginReducer.dashboardlogin.views !==
                              undefined
                            ? props.dashboardLoginReducer.dashboardlogin
                                .views == 0
                              ? ""
                              : props.dashboardLoginReducer.dashboardlogin.views
                            : ""
                          : ""}
                      </button>
                    </Link>
                  ) : (
                    <Link to="/get-premium">
                      <button
                        className="shadow p-3 pl-5 pr-5 font-weight-bold mt-5"
                        style={{
                          backgroundColor: "#fff",
                          border: "0",
                          borderRadius: "10px",
                          color: "#362658",
                        }}
                      >
                        Profile Viewed{" "}
                        {props.dashboardLoginReducer.dashboardlogin
                          ? props.dashboardLoginReducer.dashboardlogin.views !==
                              null &&
                            props.dashboardLoginReducer.dashboardlogin.views !==
                              undefined
                            ? props.dashboardLoginReducer.dashboardlogin
                                .views == 0
                              ? ""
                              : props.dashboardLoginReducer.dashboardlogin.views
                            : ""
                          : ""}
                      </button>
                    </Link>
                  )
                ) : (
                  <Link to="/get-premium">
                    <button
                      className="shadow p-3 pl-5 pr-5 font-weight-bold mt-5"
                      style={{
                        backgroundColor: "#fff",
                        border: "0",
                        borderRadius: "10px",
                        color: "#362658",
                      }}
                    >
                      Profile Viewed{" "}
                      {props.dashboardLoginReducer.dashboardlogin
                        ? props.dashboardLoginReducer.dashboardlogin.views !==
                            null &&
                          props.dashboardLoginReducer.dashboardlogin.views !==
                            undefined
                          ? props.dashboardLoginReducer.dashboardlogin.views ==
                            0
                            ? ""
                            : props.dashboardLoginReducer.dashboardlogin.views
                          : ""
                        : ""}
                    </button>
                  </Link>
                )}
              </div>
              {/* <div className="col-md-2"></div> */}
              <div className="col-md-6">
                {props.dashboardLoginReducer.dashboardlogin.profile ? (
                  props.dashboardLoginReducer.dashboardlogin.profile
                    .premium_status == 1 ? (
                    <Link to="cv-shortlisted">
                      <button
                        className="shadow p-3 pl-5 pr-5 font-weight-bold mt-5"
                        style={{
                          backgroundColor: "#fff",
                          border: "0",
                          borderRadius: "10px",
                          color: "#362658",
                        }}
                      >
                        Progress{" "}
                      </button>
                    </Link>
                  ) : (
                    <Link to="/get-premium">
                      <button
                        className="shadow p-3 pl-5 pr-5 font-weight-bold mt-5"
                        style={{
                          backgroundColor: "#fff",
                          border: "0",
                          borderRadius: "10px",
                          color: "#362658",
                        }}
                      >
                        Progress{" "}
                      </button>
                    </Link>
                  )
                ) : (
                  <Link to="/get-premium">
                    <button
                      className="shadow p-3 pl-5 pr-5 font-weight-bold mt-5"
                      style={{
                        backgroundColor: "#fff",
                        border: "0",
                        borderRadius: "10px",
                        color: "#362658",
                      }}
                    >
                      Progress{" "}
                    </button>
                  </Link>
                )}
              </div>

              {/* <div className="col-md-2"></div> */}
            </div>
            <div className="row mx-3 mt-4">
              <div className="col-md-12">
                <div className="row">
                  <div
                    className="col-md-12 shadow"
                    style={{ borderRadius: "10px" }}
                  >
                    <h4 className="pited-job-main mt-3">Posted Jobs</h4>
                    <div className="row mx-0">
                      {props.dashboardLoginReducer.dashboardlogin.recent_jobs &&
                      props.dashboardLoginReducer.dashboardlogin.recent_jobs
                        .length >= 0
                        ? props.dashboardLoginReducer.dashboardlogin.recent_jobs
                            .slice(0, 6)
                            .map((job) => (
                              <>
                                <div
                                  className="col-lg-4 mt-3 hover shadow mt-2 mr-2 pt-2 something-dash-here d-lg-block d-md-none d-none"
                                  style={{ borderRadius: "10px" }}
                                >
                                  <Link
                                    to={`/job-details?id=${job.id}`}
                                    className="link-tag-home"
                                  >
                                    <div>
                                      <h6 className="m-0 p-0 head-color-of-posr">
                                        {job.title !== null &&
                                        job.title !== undefined
                                          ? text_truncate(job.title)
                                          : ""}
                                      </h6>
                                      <p className="technsym-text-comp">
                                        {job.rec !== null &&
                                        job.rec !== undefined
                                          ? job.rec
                                          : ""}
                                      </p>

                                      <p
                                        className="text-dark mb-2"
                                        style={{
                                          fontSize: "12px",
                                          color: "#707070",
                                        }}
                                      >
                                        <img
                                          className="mt-n1 mr-1"
                                          height="12px"
                                          src={LocationIcon}
                                          alt=""
                                        />
                                        {job.country !== null &&
                                        job.country !== undefined
                                          ? job.country
                                          : ""}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                                {/* Tablet */}
                                <div
                                  className="col-md-6 mt-3 shadow mt-2 mr-2 pt-2 something-tab d-lg-none d-md-block d-none"
                                  style={{ borderRadius: "10px" }}
                                >
                                  <Link
                                    to={`/job-details?id=${job.job_id}`}
                                    className="link-tag-home"
                                  >
                                    <div>
                                      <h6 className="m-0 p-0 head-color-of-posr">
                                        {job.title !== null &&
                                        job.title !== undefined
                                          ? text_truncate(job.title)
                                          : ""}
                                      </h6>
                                      <p className="technsym-text-comp">
                                        {job.rec !== null &&
                                        job.rec !== undefined
                                          ? job.rec
                                          : ""}
                                      </p>

                                      <p
                                        className="text-dark mb-2"
                                        style={{
                                          fontSize: "12px",
                                          color: "#707070",
                                        }}
                                      >
                                        <img
                                          className="mt-n1 mr-1"
                                          height="12px"
                                          src={LocationIcon}
                                          alt=""
                                        />
                                        {job.city !== null &&
                                        job.city !== undefined
                                          ? job.city
                                          : ""}{" "}
                                        ,{" "}
                                        {job.country !== null &&
                                        job.country !== undefined
                                          ? job.country
                                          : ""}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                                {/* Mobile */}
                                <div
                                  className="col-12 mt-3 shadow mt-2 pt-2 d-lg-none d-md-none d-block"
                                  style={{ borderRadius: "10px" }}
                                >
                                  <Link
                                    to={`/job-details?id=${job.job_id}`}
                                    className="link-tag-home"
                                  >
                                    <div>
                                      <h6 className="m-0 p-0 head-color-of-posr">
                                        {job.title !== null &&
                                        job.title !== undefined
                                          ? text_truncate(job.title)
                                          : ""}
                                      </h6>
                                      <p className="technsym-text-comp">
                                        {job.rec !== null &&
                                        job.rec !== undefined
                                          ? job.rec
                                          : ""}
                                      </p>

                                      <p
                                        className="text-dark mb-2"
                                        style={{
                                          fontSize: "12px",
                                          color: "#707070",
                                        }}
                                      >
                                        <img
                                          className="mt-n1 mr-1"
                                          height="12px"
                                          src={LocationIcon}
                                          alt=""
                                        />
                                        {job.city !== null &&
                                        job.city !== undefined
                                          ? job.city
                                          : ""}{" "}
                                        ,{" "}
                                        {job.country !== null &&
                                        job.country !== undefined
                                          ? job.country
                                          : ""}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </>
                            ))
                        : "No jobs available!"}
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-12">
                        <Link to="/top-managment" className="link-tag-home">
                          <p className="view-more-pofts-jkbs">View more</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img className="my-5 pb-5" src={bannerr} width="100%" />
          </div>
        </div>
      </div>
      {/* <DashboardProfileCard />
      <Banner /> */}
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  dashboardLoginReducer: state.dashboardLoginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // getProfessional: () => dispatch(getProfessional()),
  getDashboardLogin: (userId) => dispatch(getDashboardLogin(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
