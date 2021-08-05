import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "./dashboardProfileCard.css"
import { getDashboardLogin } from "../../actions/dashboardloginAction"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Import Swiper styles

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function RecentJobSliderDashboard(props) {
      useEffect(() => {
            props.getDashboardLogin(localStorage.getItem("auth_id"));
            // loadGetDashboard(props.auth.auth_id);

      });
      // const loadGetDashboard = async (userId) => {
      //   await props.getDashboardLogin(userId);
      //   // await setPer(props.dashboardReducer.dashboard.percentage)
      //   // await setPview(props.dashboardReducer.dashboard.views)
      //   // await setSview(props.dashboardReducer.dashboard.shorlist_count)
      //   return null;
      // };
      return (
            <>
                  {/* <div className="container"> */}
                        <div className="row">
                              <div className="col-md-12 shadow" style={{ borderRadius: "10px" }}>
                                    {/* <button onClick={()=>console.log(props.dashboardjobReducer.dashboardjob.all_jobs)}>gggg</button> */}
                                    <h4 className="pited-job-main mt-3">Posted Jobs</h4>
                                    <div className="row mx-0">
                                          {
                                                props.dashboardLoginReducer.dashboardlogin.jobs_by_skills && props.dashboardLoginReducer.dashboardlogin.jobs_by_skills.length >= 6 ? props.dashboardLoginReducer.dashboardlogin.jobs_by_skills.slice(0, 6).map(job => (
                                                      
                                                      <div className="col-md-4 mt-3 shadow p-2 pl-3" style={{ borderRadius: "10px" }}>
                                                            <Link to={`/job-details?id=${job.job_id}`}>
                                                            <div>
                                                            <h6 className="pt-2 m-0 p-0 head-color-of-posr">{job.title !== null && job.title !== undefined ? job.title : ""}</h6>
                                                            <p className="technsym-text-comp">{job.rec !== null && job.rec !== undefined ? job.rec : ""}</p>

                                                            <p className="para-loc-text"><img src={Location} alt="" /> {job.city !== null && job.city !== undefined ? job.city : ""} , {job.country !== null && job.country !== undefined ? job.country : ""}</p>
                                                            </div>
                                                            </Link>
                                                      </div>
                                                     
                                                )) : ""
                                          }


                                    </div>

                                    <div className="row mt-3">
                                          <div className="col-md-12">
                                                <Link to="/top-managment">
                                                      <p className="view-more-pofts-jkbs">View more{`>>`}</p>
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  {/* </div> */}
            </>

      );
}



const mapStateToProps = (state) => ({
      auth: state.auth,
      dashboardLoginReducer: state.dashboardLoginReducer
});

const mapDispatchToProps = (dispatch) => ({
      getDashboardLogin: (userId) => dispatch(getDashboardLogin(userId)),
});
export default connect(
      mapStateToProps,
      mapDispatchToProps
)(RecentJobSliderDashboard);