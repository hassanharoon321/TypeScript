import React from "react";
import "../Components/Footer/Footer.css";
import "./Slider.css";
import { getDashboard } from "../actions/dashboardAction";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";
import Location from "../Assests/Location.svg";
import "../App.css"


function RecentJobSlider(props) {


      useEffect(() => {
            loadGetHomeJob()

      }, []);
      const loadGetHomeJob = async () => {

            await props.getDashboard()
            return null;

      }

      const text_truncate = (str, length, ending) => {
            if (length == null) {
                  length = 100;
            }
            if (ending == null) {
                  ending = '...';
            }
            if (str.length > length) {
                  return str.substring(0, length - ending.length) + ending;
            } else {
                  return str;
            }
      };


      function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                  <div
                        className={className}
                        style={{ ...style, display: "block", background: "#E1DEDE", borderRadius: "50%" }}
                        onClick={onClick}
                  />
            );
      }
      function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                  <div
                        className={className}
                        style={{ ...style, display: "block", background: "#E1DEDE", borderRadius: "50%" }}
                        onClick={onClick}
                  />
            );
      }

      const recentSettingOne = {
            // className: "center",
            centerMode: false,
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            rows: 1,
            slidesPerRow: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
      };
      const recentSettingTwo = {
            // className: "center",
            centerMode: false,
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 2,
            speed: 500,
            rows: 1,
            slidesPerRow: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
      };
      const recentSettingThree = {
            // className: "center",
            centerMode: false,
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
      };
      return (
            <>
                  <div className="container shadow py-3 px-4 bg-white d-lg-block d-md-none d-none" style={{ borderRadius: "15px" }}>
                        <div className="row pb-2">
                              <div className="col-md-9">
                                    <h4 className="font-weight-bold mb-0">Recent Jobs</h4>
                              </div>
                              <div className="col-md-3 text-right">
                                    <Link to="/viewallrecent" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-md-12">
                                    <Slider {...recentSettingOne}
                                    >
                                          {
                                                props.dashboardReducer.dashboard.recent_jobs && props.dashboardReducer.dashboard.recent_jobs.length > 0 ? props.dashboardReducer.dashboard.recent_jobs.map(homejob => (

                                                      <div className="shadow hover pt-2 pb-2 mx-1 my-2 pl-3 maindiv-of-recrnt-job-slider">
                                                            <Link to={`/jobdetaillog?id=${homejob.id}`} className="link-tag-home">
                                                                  <div>
                                                                        <h6 className="font-weight-bold p-0 m-0" style={{ color: "gray" }}>{homejob.title !== null && homejob.title !== undefined ? text_truncate(homejob.title, 25) : ""}</h6>
                                                                        <small style={{ color: "lightgrey" }}>{homejob.rec !== null && homejob.rec !== undefined ? homejob.rec : ""}</small>
                                                                        <div className="d-flex align-items-baseline mt-1">
                                                                              <img src={Location} className="mr-1" height="10px" />
                                                                              <small style={{ color: "gray", fontSize: "12px" }} className="">{homejob.city !== null && homejob.city !== undefined ? homejob.city : ""} , {homejob.country !== null && homejob.country !== undefined ? homejob.country : ""}</small>
                                                                        </div>
                                                                  </div>
                                                            </Link>
                                                      </div>

                                                )) : <div>
                                                      <div className="spinner-border text-secondary" role="status">
                                                            <span className="sr-only">No Jobs</span>
                                                      </div>
                                                </div>
                                          }
                                    </Slider>
                              </div>
                        </div>

                  </div>


                  {/* Tablet */}
                  <div className="container shadow py-3 px-4 bg-white d-lg-none d-md-block d-none" style={{ borderRadius: "15px" }}>
                        <div className="row pb-2">
                              <div className="col-md-9">
                                    <h4 className="font-weight-bold mb-0">Recent Jobs</h4>
                              </div>
                              <div className="col-md-3 text-right">
                                    <Link to="/viewallrecent" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-md-12">
                                    <Slider {...recentSettingTwo}
                                    >
                                          {
                                                props.dashboardReducer.dashboard.recent_jobs && props.dashboardReducer.dashboard.recent_jobs.length > 0 ? props.dashboardReducer.dashboard.recent_jobs.map(homejob => (

                                                      <div className="shadow hover  pt-2 pb-2 mx-1 my-2 pl-3 maindiv-of-recrnt-job-slider">
                                                            <Link to={`/jobdetaillog?id=${homejob.id}`} className="link-tag-home">
                                                                  <div>
                                                                        <h6 className="font-weight-bold p-0 m-0" style={{ color: "gray" }}>{homejob.title !== null && homejob.title !== undefined ? text_truncate(homejob.title, 25) : ""}</h6>
                                                                        <small style={{ color: "lightgrey" }}>{homejob.rec !== null && homejob.rec !== undefined ? homejob.rec : ""}</small>
                                                                        <div className="d-flex align-items-baseline mt-1">
                                                                              <img src={Location} className="mr-1" height="12px" />
                                                                              <small style={{ color: "gray", fontSize: "10px" }} className="">{homejob.city !== null && homejob.city !== undefined ? homejob.city : ""} , {homejob.country !== null && homejob.country !== undefined ? homejob.country : ""}</small>
                                                                        </div>
                                                                  </div>
                                                            </Link>
                                                      </div>

                                                )) : <div>
                                                      <div className="spinner-border text-secondary" role="status">
                                                            <span className="sr-only">No Jobs</span>
                                                      </div>
                                                </div>
                                          }
                                    </Slider>
                              </div>
                        </div>

                  </div>


                  {/* Mobile */}
                  <div className="container shadow py-3 px-4 bg-white d-lg-none d-md-none d-block" style={{ borderRadius: "15px" }}>
                        <div className="row pb-2">
                              <div className="col-7">
                                    <h4 className="font-weight-bold mb-0">Recent Jobs</h4>
                              </div>
                              <div className="col-5 text-right">
                                    <Link to="/viewallrecent" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-md-12">
                                    <Slider {...recentSettingThree}
                                    >
                                          {
                                                props.dashboardReducer.dashboard.recent_jobs && props.dashboardReducer.dashboard.recent_jobs.length > 0 ? props.dashboardReducer.dashboard.recent_jobs.map(homejob => (

                                                      <div className="shadow hover pt-2 pb-2 mx-1 my-2 pl-3 maindiv-of-recrnt-job-slider">
                                                            <Link to={`/jobdetaillog?id=${homejob.id}`} className="link-tag-home">
                                                                  <div>
                                                                        <h6 className="font-weight-bold p-0 m-0" style={{ color: "gray" }}>{homejob.title !== null && homejob.title !== undefined ? text_truncate(homejob.title, 25) : ""}</h6>
                                                                        <small style={{ color: "lightgrey" }}>{homejob.rec !== null && homejob.rec !== undefined ? homejob.rec : ""}</small>
                                                                        <div className="d-flex align-items-baseline mt-1">
                                                                              <img src={Location} className="mr-1" height="10px" />
                                                                              <small style={{ color: "gray", fontSize: "12px" }} className="">{homejob.city !== null && homejob.city !== undefined ? homejob.city : ""} , {homejob.country !== null && homejob.country !== undefined ? homejob.country : ""}</small>
                                                                        </div>
                                                                  </div>
                                                            </Link>
                                                      </div>

                                                )) : <div>
                                                      <div className="spinner-border text-secondary" role="status">
                                                            <span className="sr-only">No Jobs</span>
                                                      </div>
                                                </div>
                                          }
                                    </Slider>
                              </div>
                        </div>

                  </div>


            </>

      );
}



const mapStateToProps = (state) => ({
      auth: state.auth,
      dashboardReducer: state.dashboardReducer
});

const mapDispatchToProps = (dispatch) => ({
      getDashboard: () => dispatch(getDashboard()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RecentJobSlider)
