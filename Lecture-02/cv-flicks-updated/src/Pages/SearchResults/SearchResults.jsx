import React, { useState, useEffect } from "react";
import Briefcase from "../../Assests/topmanagment/briefcase.svg";
import Location from "../../Assests/topmanagment/location.svg";
import Pen from "../../Assests/topmanagment/pen.svg";
import "./SearchResults.css";
import Navbar from "../../Components/Navbar/Navbar";
import FooterTwo from "../../Components/Footer/Footer2";
import {
  createSearchLogin,
  getSearchLogin,
} from "../../actions/SearchLoginAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../App.css"

function SearchResults(props) {
  const search = useLocation().search;
  const key = new URLSearchParams(search).get("key");
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h1 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>
              Search For Jobs
            </h1>
          </div>
          <div className="col-md-12">
            <p style={{ color: "#011F95", fontWeight: "bold" }}>
              Showing{" "}
              {props.SearchReducer.searchData
                ? props.SearchReducer.searchData.jobs &&
                  props.SearchReducer.searchData.jobs.length > 0
                  ? props.SearchReducer.searchData.jobs.length + 1
                  : ""
                : ""}{" "}
              {key} Jobs
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10">
            {props.SearchReducer.searchData ? (
              props.SearchReducer.searchData.jobs &&
              props.SearchReducer.searchData.jobs.length > 0 ? (
                props.SearchReducer.searchData.jobs.map((job) => (
                  <Link
                    to={`/jobdetaillog?id=${job.id}`}
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
                              ? job.job_title
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

          <div className="result-main-child-03"></div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  SearchReducer: state.SearchReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // getSearchLogin: (userId) => dispatch(getSearchLogin(userId)),
  // createSearchLogin: (userId, keyword, ind, city, exp) =>
  //     dispatch(createSearchLogin(userId, keyword, ind, city, exp)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
