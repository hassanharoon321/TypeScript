import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./JobsDetail.css";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import Wallet from "../../Assests/topmanagment/wallet.svg";
import { useLocation } from "react-router-dom";
import { getJobDetail } from "../../actions/jobdetailAction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Nav2 from "../../Components/Nav2/Nav2";
import FooterTwo from "../../Components/Footer/Footer2";

function JobsDetail(props) {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");

  useEffect(() => {
    loadGetProfessional(localStorage.getItem("auth_id"), compIds);
  }, []);
  const loadGetProfessional = async (userId, id) => {
    await props.getJobDetail(userId, id);
    return null;
  };
  return (
    <>
      <Nav2 />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div
              className="row mt-5 shadow p-3"
              style={{ borderRadius: "10px" }}
            >
              <div className="col-md-9">
                <h3 style={{ color: "#707070" }} className="mb-0">
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.job_title !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.job_title !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.job_title
                      : ""
                    : ""}
                </h3>
                <small style={{ color: "#c8c8c8", fontSize: "16px" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.company_name !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.company_name !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.company_name
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <p
                  className="text-right mt-3"
                  style={{ fontSize: "14px", color: "#c8c8c8" }}
                >
                  Posted on{" "}
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.posted_on !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.posted_on !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.posted_on
                      : ""
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Job Head Ends */}

        {/* Job main Starts */}
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div
            className="col-md-10 shadow p-4"
            style={{ borderRadius: "10px" }}
          >
            <div className="row">
              <div className="col-md-3">
                <img src={Briefcase} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.exp !== null &&
                      props.jobdetailReducer.jobdetail.result.exp !== undefined
                      ? props.jobdetailReducer.jobdetail.result.exp
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <img src={Location} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.city !== null &&
                      props.jobdetailReducer.jobdetail.result.city !== undefined
                      ? props.jobdetailReducer.jobdetail.result.city
                      : ""
                    : ""}
                  ,
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.country !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.country !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.country
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <img src={Pen} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.industry !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.industry !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.industry
                      : ""
                    : ""}
                </small>
              </div>
              <div className="col-md-3">
                <img src={Wallet} alt="" className="mr-3" />
                <small style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.salary_min !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.salary_min !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.salary_min
                      : ""
                    : ""}{" "}
                  -{" "}
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.salary_max !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.salary_max !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.salary_max
                      : ""
                    : ""}
                </small>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <h3 style={{ color: "#707070" }}>Job Description</h3>
                <p style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.job_desc !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.job_desc !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.job_desc
                      : ""
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Job main Ends */}
        {/* Job last div Starts */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div
              className="row mt-5 shadow p-3"
              style={{ borderRadius: "10px" }}
            >
              <div className="row">
                <div className="col-md-12">
                  <h6 className="mb-0" style={{ color: "#707070" }}>
                  Career level
                  </h6>
                  <small style={{ color: "#707070" }}>
                    {" "}
                    {props.jobdetailReducer.jobdetail.result
                      ? props.jobdetailReducer.jobdetail.result
                          .functional_area !== null &&
                        props.jobdetailReducer.jobdetail.result
                          .functional_area !== undefined
                        ? props.jobdetailReducer.jobdetail.result
                            .functional_area
                        : ""
                      : ""}
                  </small>
                </div>
              </div>

              <div className="col-md-12 p-0 m-0">
                <h6 className="mt-4 mb-0 p-0" style={{ color: "#707070" }}>
                  Employer Details
                </h6>
                <small style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.company_name !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.company_name !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.company_name
                      : ""
                    : ""}
                </small>
              </div>

              <div className="col-md-12 p-0 m-0">
                <h6 className="mt-4 mb-0" style={{ color: "#707070" }}>
                  Job Type
                </h6>
                <small style={{ color: "#707070" }}>
                  {props.jobdetailReducer.jobdetail.result
                    ? props.jobdetailReducer.jobdetail.result.job_type !==
                        null &&
                      props.jobdetailReducer.jobdetail.result.job_type !==
                        undefined
                      ? props.jobdetailReducer.jobdetail.result.job_type
                      : ""
                    : ""}
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {/* Job last div Ends */}
        {/* Button Starts */}
        <div className="row mt-5 mb-5">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <Link to="upload-cv" to={`/upload-cv?job_id=${compIds}`}>
              <button
                className="btn btn-warning w-100 shadow"
                style={{
                  color: "#fff",
                  background: "#ffb44a",
                  fontWeight: "bold",
                }}
              >
                Apply
              </button>
            </Link>
          </div>
          <div className="col-md-5"></div>
        </div>
        {/* Button Ends */}
      </div>
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  jobdetailReducer: state.jobdetailReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getJobDetail: (userId, id) => dispatch(getJobDetail(userId, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(JobsDetail);
