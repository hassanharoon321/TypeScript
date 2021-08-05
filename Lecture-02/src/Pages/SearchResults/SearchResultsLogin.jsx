import React, { useState, useEffect } from "react";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import "./SearchResults.css";
import Nav2 from "../../Components/Nav2/Nav2";
import FooterTwo from "../../Components/Footer/Footer2";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css"

function SearchResultsLogin(props) {
  const search = useLocation().search;
  const key = new URLSearchParams(search).get("key");
  //   useEffect(() => {
  //     loadGetSearch(props.auth.auth_id);
  // });

  // const loadGetSearch = async (userId) => {
  //     await props.getSearchLogin(userId);
  //     // return null;
  // };
  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h1 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>
              Search For Jobs
            </h1>
          </div>
          <div className="col-md-12">
            <p className="font-weight-bold" style={{ color: "#011F95" }}>
              Showing{" "}
              {props.SearchLoginReducer.searchData
                ? props.SearchLoginReducer.searchData.jobs &&
                  props.SearchLoginReducer.searchData.jobs.length > 0
                  ? props.SearchLoginReducer.searchData.jobs.length + 1
                  : ""
                : ""}{" "}
              Jobs
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10">
            {props.SearchLoginReducer.searchData ? (
              props.SearchLoginReducer.searchData.jobs &&
              props.SearchLoginReducer.searchData.jobs.length > 0 ? (
                props.SearchLoginReducer.searchData.jobs.map((job) => (
                  <Link
                    to={`/job-details?id=${job.id}`}
                    className="link-tag-home"
                  >
                    <div
                      className="col-md-12 hover shadow p-4 mt-4"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="row">
                        <div className="col-md-9">
                          <h2 className="p-0 m-0" style={{ color: "grey" }}>
                            {job.job_title !== null &&
                            job.job_title !== undefined
                              ? job.job_title.charAt(0).toUpperCase() +
                                job.job_title.substr(1).toLowerCase()
                              : ""}
                          </h2>
                        </div>
                        <div className="col-md-3 text-right">
                          <small style={{ color: "#c8c8c8" }}>
                            {job.ago !== null && job.ago !== undefined
                              ? job.ago
                              : ""}{" "}
                            ago
                          </small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <p className="p-0 m-0" style={{ color: "#c8c8c8" }}>
                            {job.rec !== null && job.rec !== undefined
                              ? job.rec
                              : ""}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mt-3">
                          <div className="d-flex">
                            <img src={Briefcase} alt="" className="mr-2" />
                            <p className="p-0 m-0" style={{ color: "#707070" }}>
                              {job.exp !== null && job.exp !== undefined
                                ? job.exp
                                : ""}{" "}
                              Experience
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 mt-3">
                          <div className="d-flex">
                            <img src={Location} alt="" className="mr-2" />
                            <p className="p-0 m-0" style={{ color: "#707070" }}>
                              {job.city !== null && job.city !== undefined
                                ? job.city
                                : ""}{" "}
                              ,{" "}
                              {job.country !== null && job.country !== undefined
                                ? job.country
                                : ""}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 mt-3">
                          <div className="d-flex">
                            <img src={Pen} alt="" className="mr-2" />
                            <p className="p-0 m-0" style={{ color: "#707070" }}>
                              {job.func !== null && job.func !== undefined
                                ? job.func
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mt-3">
                          <p style={{ color: "#707070" }} className="p-0 m-0">
                            {job.desc !== null && job.desc !== undefined
                              ? job.desc
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  <p>No Jobs Available!</p>
                </div>
              )
            ) : (
              <div>
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <div
            className="col-md-2 mt-3"
            style={{
              background: "#D8E8FF",
              borderRadius: "15px",
              height: "600px",
            }}
          >
            <div>Placeholder for Ads</div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  SearchLoginReducer: state.SearchLoginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // getSearchLogin: (userId) => dispatch(getSearchLogin(userId)),
  // createSearchLogin: (userId, keyword, ind, city, exp) =>
  //     dispatch(createSearchLogin(userId, keyword, ind, city, exp)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsLogin);
