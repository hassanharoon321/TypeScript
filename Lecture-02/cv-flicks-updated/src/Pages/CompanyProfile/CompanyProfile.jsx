import React from "react";
import "./CompanyProfile.css";
import FooterTwo from "../../Components/Footer/Footer2";
import { useState, useEffect } from "react";
import { getCompanyProfile } from "../../actions/company_profileAction";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Nav2 from "../../Components/Nav2/Nav2";

function CompanyProfile(props) {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");
  useEffect(() => {
    loadGetProfileViewed(localStorage.getItem("auth_id"), compIds);
  },[]);
  const loadGetProfileViewed = async (userId, id) => {
    await props.getCompanyProfile(userId, id);
    return null;
  };

  return (
    <>
      <Nav2 />
      <div className="container mt-5 pt-4 mb-5 pb-5">
        <div
          className="row px-5 py-5 mt-4 shadow"
          style={{ borderRadius: "15px" }}
        >
          {/* <button
            onClick={() =>
              console.log(props.CompanyProfiledReducer.CompanyProfile.comapany)
            }
          >
            Onclic
          </button> */}
          <div
            className="col-md-2 col-3 company-profile-pic "
            style={{ height: "100px" }}
          >
            {props.CompanyProfiledReducer.CompanyProfile.comapany ? 
              props.CompanyProfiledReducer.CompanyProfile.comapany.dp !==
                null &&
              props.CompanyProfiledReducer.CompanyProfile.comapany.dp !==
                undefined ? 
                <img
                  src={props.CompanyProfiledReducer.CompanyProfile.comapany.dp}
                  height="100%"
                  width="100%"
                  style={{ objectFit: "cover" }}
                  className="py-2"
                />
               : 
                <i
                  className="far fa-user fa-4x mt-1"
                  style={{ color: "lightgray" }}
                ></i>
              
             : 
<i
                  className="far fa-user fa-4x mt-1"
                  style={{ color: "lightgray" }}
                ></i>          
                  }
          </div>
          <div className="col-md-10 col-9 pl-lg-4 pl-md-4  pt-2 my-auto">
            <h3 className="company-profile-font-head  mb-0">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.name !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.name !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.name
                  : ""
                : ""}
            </h3>
            <p className="company-profile-font-para mb-0">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.tagline !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .tagline !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.tagline
                  : ""
                : ""}
            </p>
            <p className="mt-2" style={{ color: "lightgray" }}>
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.city !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.city !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.city
                  : ""
                : ""}
              ,{" "}
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.country !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .country !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.country
                  : ""
                : ""}{" "}
              |{" "}
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.industry !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .industry !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany
                      .industry
                  : ""
                : ""}
            </p>
          </div>
        </div>
        <div className="row mt-4 mb-5 pb-5">
          <div className="col-md-4">
            <div className="row shadow" style={{ borderRadius: "15px" }}>
              <div className="col-md-12 pt-3 pb-2">
                <h2 className="heading-main-comp-sub-child">About Us</h2>
                <p className="company-profile-about-para px-2">
                  {props.CompanyProfiledReducer.CompanyProfile.comapany
                    ? props.CompanyProfiledReducer.CompanyProfile.comapany.desc !==
                        null &&
                      props.CompanyProfiledReducer.CompanyProfile.comapany
                        .desc !== undefined
                      ? props.CompanyProfiledReducer.CompanyProfile.comapany
                          .desc
                      : ""
                    : ""}
                </p>
              </div>
            </div>

            <div
              className="row mt-4 py-2 shadow"
              style={{ borderRadius: "15px" }}
            >
              <div className="col-md-12 px-4 pt-3 pb-2">
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="main-tit-head mb-0 pb-1">Website</h5>
                    <small style={{ color: "gray" }} className="">
                      {props.CompanyProfiledReducer.CompanyProfile.comapany
                        ? props.CompanyProfiledReducer.CompanyProfile.comapany
                            .website !== null &&
                          props.CompanyProfiledReducer.CompanyProfile.comapany
                            .website !== undefined
                          ? props.CompanyProfiledReducer.CompanyProfile.comapany
                              .website
                          : ""
                        : ""}
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-4">
                    <h5 className="main-tit-head mb-0 pb-1">Industry</h5>
                    <small style={{ color: "gray" }} className="">
                      {props.CompanyProfiledReducer.CompanyProfile.comapany
                        ? props.CompanyProfiledReducer.CompanyProfile.comapany
                            .industry !== null &&
                          props.CompanyProfiledReducer.CompanyProfile.comapany
                            .industry !== undefined
                          ? props.CompanyProfiledReducer.CompanyProfile.comapany
                              .industry
                          : ""
                        : ""}
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-4">
                    <h5 className="main-tit-head mb-0 pb-1">Company Size</h5>
                    <small style={{ color: "gray" }} className="">
                      {props.CompanyProfiledReducer.CompanyProfile.comapany
                        ? props.CompanyProfiledReducer.CompanyProfile.comapany.size !==
                            null &&
                          props.CompanyProfiledReducer.CompanyProfile.comapany
                            .size !== undefined
                          ? props.CompanyProfiledReducer.CompanyProfile.comapany
                              .size
                          : ""
                        : ""}{" "}
                      employees
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-4">
                    <h5 className="main-tit-head mb-0 pb-1">Headquarters</h5>
                    <small style={{ color: "gray" }} className="">
                      {props.CompanyProfiledReducer.CompanyProfile.comapany
                        ? props.CompanyProfiledReducer.CompanyProfile.comapany.city !==
                            null &&
                          props.CompanyProfiledReducer.CompanyProfile.comapany
                            .city !== undefined
                          ? props.CompanyProfiledReducer.CompanyProfile.comapany
                              .city
                          : ""
                        : ""}{" "}
                      ,{" "}
                      {props.CompanyProfiledReducer.CompanyProfile.comapany
                        ? props.CompanyProfiledReducer.CompanyProfile.comapany
                            .country !== null &&
                          props.CompanyProfiledReducer.CompanyProfile.comapany
                            .country !== undefined
                          ? props.CompanyProfiledReducer.CompanyProfile.comapany
                              .country
                          : ""
                        : ""}
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-4">
                    <h5 className="main-tit-head mb-0 pb-1">Founded</h5>
                    <small style={{ color: "gray" }} className="">
                      {props.CompanyProfiledReducer.CompanyProfile.comapany
                        ? props.CompanyProfiledReducer.CompanyProfile.comapany
                            .founded !== null &&
                          props.CompanyProfiledReducer.CompanyProfile.comapany
                            .founded !== undefined
                          ? props.CompanyProfiledReducer.CompanyProfile.comapany
                              .founded
                          : ""
                        : ""}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-7 px-4 py-4 shadow"
            style={{
              borderRadius: "15px",
              maxHeight: "897px",
              overflowY: "scroll",
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <h2 className="latest-jobs-color-profile px-1">Latest Jobs</h2>
              </div>
            </div>
            {/* here */}
            {props.CompanyProfiledReducer.CompanyProfile.recent_jobs &&
            props.CompanyProfiledReducer.CompanyProfile.recent_jobs.length > 0
              ? props.CompanyProfiledReducer.CompanyProfile.recent_jobs.map(
                  (jobsData) => (
                    <div
                      className="row px-2 mx-1 pt-3 mt-4 pb-4"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      <div className="col-md-8">
                        <p className="job-detail-comp-para">
                          {jobsData.job_title !== null &&
                          jobsData.job_title !== undefined
                            ? jobsData.job_title
                            : ""}
                        </p>
                        <small className="company-name-profile-main">
                          {props.CompanyProfiledReducer.CompanyProfile.comapany
                            ? props.CompanyProfiledReducer.CompanyProfile
                                .name !== null &&
                              props.CompanyProfiledReducer.CompanyProfile
                                .comapany.name !== undefined
                              ? props.CompanyProfiledReducer.CompanyProfile
                                  .comapany.name
                              : ""
                            : ""}
                        </small>
                      </div>
                      <div className="col-md-4 text-right">
                        <small className="company-name-profile-main">
                          Posted on{" "}
                          {jobsData.ago !== null && jobsData.ago !== undefined
                            ? jobsData.ago
                            : ""}
                        </small>
                      </div>
                    </div>
                  )
                )
              : ""}
            {/* here */}
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  CompanyProfiledReducer: state.CompanyProfiledReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCompanyProfile: (userId, id) => dispatch(getCompanyProfile(userId, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
