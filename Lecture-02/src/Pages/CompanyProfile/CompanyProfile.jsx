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
  }, []);
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
          <div
            className="col-md-2 col-3 company-profile-pic "
            style={{ height: "100px" }}
          >
            {props.CompanyProfiledReducer.CompanyProfile.comapany ? (
              props.CompanyProfiledReducer.CompanyProfile.comapany.dp !==
                null &&
              props.CompanyProfiledReducer.CompanyProfile.comapany.dp !==
                undefined ? (
                <img
                  src={props.CompanyProfiledReducer.CompanyProfile.comapany.dp}
                  height="100%"
                  width="100%"
                  style={{ objectFit: "cover" }}
                  className="py-2"
                />
              ) : (
                <i
                  className="far fa-user fa-4x mt-1"
                  style={{ color: "lightgray" }}
                ></i>
              )
            ) : (
              <i
                className="far fa-user fa-4x mt-1"
                style={{ color: "lightgray" }}
              ></i>
            )}
          </div>
          <div className="col-md-10 col-9 pl-lg-4 pl-md-4  pt-2 my-auto">
            <h3 className="company-profile-font-head  mb-0">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.name !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.name !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.name
                  : ""
                : ""}
            </h3>
            <p className="company-profile-font-para mb-0">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .tagline !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .tagline !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.tagline
                  : ""
                : ""}
            </p>
            <p className="mt-2" style={{ color: "lightgray" }}>
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.city !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.city !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.city
                  : ""
                : ""}
              ,{" "}
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .country !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .country !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.country
                  : ""
                : ""}{" "}
              |{" "}
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .industry !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .industry !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany
                      .industry
                  : ""
                : ""}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-md-5 shadow company-profile-about-para pt-3 pb-2"
            style={{ borderRadius: "15px" }}
          >
            <h2 className="heading-main-comp-sub-child p-0 m-0">About Us</h2>
            <p>
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.desc !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.desc !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.desc
                  : ""
                : ""}
            </p>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-6 shadow company-profile-about-para pt-3 pb-2"
            style={{ borderRadius: "15px" }}
          >
            <h5 className="main-tit-head mb-0 pb-1">Website</h5>
            <p style={{ color: "gray" }} className="">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .website !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .website !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.website
                  : ""
                : ""}
            </p>
            <h5 className="main-tit-head mb-0 pb-1">Industry</h5>
            <p style={{ color: "gray" }} className="">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .industry !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .industry !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany
                      .industry
                  : ""
                : ""}
            </p>
            <h5 className="main-tit-head mb-0 pb-1">Company Size</h5>
            <p style={{ color: "gray" }} className="">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.size !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.size !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.size
                  : ""
                : ""}{" "}
              employees
            </p>
            <h5 className="main-tit-head mb-0 pb-1">Headquarters</h5>
            <p style={{ color: "gray" }} className="">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany.city !==
                    null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany.city !==
                    undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.city
                  : ""
                : ""}{" "}
              ,{" "}
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .country !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .country !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.country
                  : ""
                : ""}
            </p>
            <h5 className="main-tit-head mb-0 pb-1">Founded</h5>
            <p style={{ color: "gray" }} className="">
              {props.CompanyProfiledReducer.CompanyProfile.comapany
                ? props.CompanyProfiledReducer.CompanyProfile.comapany
                    .founded !== null &&
                  props.CompanyProfiledReducer.CompanyProfile.comapany
                    .founded !== undefined
                  ? props.CompanyProfiledReducer.CompanyProfile.comapany.founded
                  : ""
                : ""}
            </p>
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
