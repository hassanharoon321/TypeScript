import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./dashboardProfileCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecentJobSliderDashboard from "./RecentJobDashboard";
import { getDashboardLogin } from "../../actions/dashboardloginAction";
import { connect } from "react-redux";

function DashboardProfileCard(props) {
  useEffect(() => {
    loadGetDashboard(localStorage.getItem("auth_id"));
  });

   const loadGetDashboard = async(userId)=>{
    await props.getDashboardLogin(userId);
  }
  return (
    <div className="container" style={{ position: "relative", top: "-75px" }}>
      <button onClick={()=>console.log(props.dashboardLoginReducer.dashboardlogin.shorlist_count)}>CLic</button>
      <div className="row">
        <div className="col-md-4 ">
          <div
            className="py-4 px-3 shadow bg-white"
            style={{ borderRadius: "15px" }}
          >
            <div className="row px-3">
              <div
                className="col-lg-3 col-md-12 col-4 py-2 text-center"
                style={{ borderRadius: "15px", border: "1px solid #c8c8c8" }}
              >
                {props.dashboardLoginReducer.dashboardlogin.profile&&props.dashboardLoginReducer.dashboardlogin.profile.dp!==null&&props.dashboardLoginReducer.dashboardlogin.profile.dp!==undefined?
                <img src={props.dashboardLoginReducer.dashboardlogin.profile.dp} height="100%" width="100%" style={{objectFit:"cover"}} />
                
                : <i
                className="far fa-user fa-4x mt-1"
                style={{ color: "lightgray" }}
              ></i>
              }
               
              </div>
              <div className="col-lg-9 col-md-12 col-8 my-auto">
                <h4 className=" p-0 m-0 font-weight-bold" style={{color:"#362658"}}>{props.dashboardLoginReducer.dashboardlogin.profile?props.dashboardLoginReducer.dashboardlogin.profile.name!==null&&props.dashboardLoginReducer.dashboardlogin.profile.name!==undefined?props.dashboardLoginReducer.dashboardlogin.profile.name:"":""}</h4>
                <small style={{color:"#707070"}}>{props.dashboardLoginReducer.dashboardlogin.profile?props.dashboardLoginReducer.dashboardlogin.profile.proffession!==null&&props.dashboardLoginReducer.dashboardlogin.profile.proffession!==undefined?props.dashboardLoginReducer.dashboardlogin.profile.proffession:"":""}</small>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
                <h3 className="mb-0" style={{ color: "#865ddd" }}>
                {props.dashboardLoginReducer.dashboardlogin.profile?props.dashboardLoginReducer.dashboardlogin.profile.percentage!==null&&props.dashboardLoginReducer.dashboardlogin.profile.percentage!==undefined?props.dashboardLoginReducer.dashboardlogin.profile.percentage:"":""}{" "}
                  <small style={{ fontSize: "15px" }}>% Profile Complete</small>
                </h3>
              </div>
              <div className="col-md-4 text-right pt-3">
                {/* <p className="mb-0" style={{ fontSize: "12px" }}>
                  Updated Today
                </p> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <progress
                  className="w-100"
                  value={props.dashboardLoginReducer.dashboardlogin.profile?props.dashboardLoginReducer.dashboardlogin.profile.percentage!==null&&props.dashboardLoginReducer.dashboardlogin.profile.percentage!==undefined?props.dashboardLoginReducer.dashboardlogin.profile.percentage:"":""}
                  max="100"
                />
              </div>
            </div>
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
                  You are missing out opportunities!Completing your profile will
                  make it easier to show up in search!
                </p>
              </div>
            </div>
            <div className="row mx-1 my-2">
              <div className="col-md-12" style={{ lineHeight: 1 }}>
                <p
                  className="pb-0 mb-0"
                  style={{ fontSize: "12px", color: "#707070" }}
                >
                  Profile Impressions
                </p>
                <small
                  className="pt-0 mt-0"
                  style={{ fontSize: "10px", color: "#c8c8c8" }}
                >
                  Number of times your profile showed up on search
                </small>
              </div>
            </div>
            <div className="row mt-3 mx-1">
              <div className="col-md-6 text-center">
                <button
                  className="btn btn-light btn-size"
                  style={{ color: "#c8c8c8" }}
                >
                  00 Search Apperances
                </button>
              </div>
              <div className="col-md-6 text-center">
                <button
                  className="btn btn-light btn-size"
                  style={{ color: "#c8c8c8" }}
                >
                  00 Clicks on profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div
            className="row shadow bg-white mx-3 py-2 px-2 mt-lg-0 mt-md-0 mt-3"
            style={{ borderRadius: "15px" }}
          >
            <div className="col-md-9">
              <h1 style={{ fontSize: "24px" }}>Looking for a specific job?</h1>
              <p style={{ fontSize: "12px" }}>
                Create a Job Alert! We will notify you whenever there is a new
                job that is suitable for you.
              </p>
            </div>
            <div className="col-md-3 text-right my-auto">
              <Link to="create-job-alert">
                <button
                  className="btn btn-warning"
                  style={{ fontSize: "13px", color: "#fff" }}
                >
                  Create a Job Alert
                </button>
              </Link>
            </div>
          </div>

          <div className="row my-4 mx-lg-0 mx-md-0 mx-3">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6 text-lg-right text-md-right">
              <Link to="profile-viewed">
                <button
                  className="shadow p-3 pl-5 pr-5"
                  style={{
                    backgroundColor: "#fff",
                    border: "0",
                    borderRadius: "10px",
                  }}
                >
                  Profile Viewed{" "}
                  {props.dashboardLoginReducer.dashboardlogin?props.dashboardLoginReducer.dashboardlogin.views!==null&&props.dashboardLoginReducer.dashboardlogin.views!==undefined?props.dashboardLoginReducer.dashboardlogin.views:"":""}
                </button>
              </Link>
            </div>
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6 ">
              <Link to="cv-shortlisted">
                <button
                  className="shadow p-3 pl-5 pr-5 "
                  style={{
                    backgroundColor: "#fff",
                    border: "0",
                    borderRadius: "10px",
                  }}
                >
                  CV Shortlisted{" "}
                  {props.dashboardLoginReducer.dashboardlogin?props.dashboardLoginReducer.dashboardlogin.shorlist_count!==null&&props.dashboardLoginReducer.dashboardlogin.shorlist_count!==undefined?props.dashboardLoginReducer.dashboardlogin.shorlist_count:"":""}
                </button>
              </Link>
            </div>

            {/* <div className="col-md-2"></div> */}
          </div>
          <div className="row mx-3">
            <div className="col-md-12">
              <RecentJobSliderDashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth:state.auth,
  dashboardLoginReducer: state.dashboardLoginReducer
});

const mapDispatchToProps = (dispatch) => ({
  getDashboardLogin: (userId) => dispatch(getDashboardLogin(userId)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardProfileCard);
