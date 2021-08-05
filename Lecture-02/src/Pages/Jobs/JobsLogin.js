import React, { useState, useEffect } from "react";
import "./Jobs.css";
import FooterTwo from "../../Components/Footer/Footer2";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav2 from "../../Components/Nav2/Nav2";
import "../../Components/Slider.css";
import "../../Components/Footer/Footer.css"
import Location from "../../Assests/Location.svg"
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { jobSLiderLogin } from "../../actions/job-slider-loginAction";
import { connect } from 'react-redux';
import "../../App.css"

function JobsLogin(props) {
  useEffect(() => {
    loadGetHomeJob(localStorage.getItem("auth_id"))

  }, []);

  const loadGetHomeJob = async (userId) => {
    await props.jobSLiderLogin(userId)
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

  const settings = {
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    rows: 4,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const settings2 = {
    centerMode: false,
    infinite: false,
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const settings3 = {
    centerMode: false,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 4,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
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
      <Nav2 />
      <div className="conatiner-fluid bg_img-jobs"></div>
      <>
        <div className="container shadow py-4 px-4 bg-white mt-5 mb-0 d-lg-block d-md-none d-none" style={{ borderRadius: "15px", position: "relative", top: "-75px" }}>
          <div className="row pb-2">
            <div className="col-md-9">
              <h4 className="font-weight-bold">Jobs by Industry</h4>
            </div>
            <div className="col-md-3 text-right">
              <Link to="/jobsbyindustrypagelogin" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider  {...settings} className="main-slider-has">
                {
                  props.dashboardReducer.dashboard.jobs_by_industry && props.dashboardReducer.dashboard.jobs_by_industry.length > 0 ? props.dashboardReducer.dashboard.jobs_by_industry.map(homejob => (
                    <Link to={`/topmanagementlogin2?id=${homejob.id}?industry=${homejob.name}?count=${homejob.job_count}`} className="link-tag-home">
                      <p className="para-width-main" key={homejob.id}>{homejob.name !== null && homejob.name !== undefined ? text_truncate(homejob.name, 20) : ""}
                        <span style={{ color: "lightgrey" }}> ({homejob.job_count !== null && homejob.job_count !== undefined ? homejob.job_count : ""}) </span>
                      </p>
                    </Link>
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


        <div className="container shadow py-4 px-4 bg-white mt-5 mb-0 d-lg-none d-md-block d-none" style={{ borderRadius: "15px", position: "relative", top: "-75px" }}>
          <div className="row pb-2">
            <div className="col-md-9">
              <h4 className="font-weight-bold">Jobs by Industry</h4>
            </div>
            <div className="col-md-3 text-right">
              <Link to="/jobsbyindustrypage" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider  {...settings2} className="main-slider-has">
                {
                  props.dashboardReducer.dashboard.jobs_by_industry && props.dashboardReducer.dashboard.jobs_by_industry.length > 0 ? props.dashboardReducer.dashboard.jobs_by_industry.map(homejob => (
                    <Link to={`/topmanagementlogin2?id=${homejob.id}?industry=${homejob.name}?count=${homejob.job_count}`} className="link-tag-home">
                      <p className="para-width-main" key={homejob.id}>{homejob.name !== null && homejob.name !== undefined ? text_truncate(homejob.name, 20) : ""}
                        <span style={{ color: "lightgrey" }}> ({homejob.job_count !== null && homejob.job_count !== undefined ? homejob.job_count : ""}) </span>
                      </p>
                    </Link>
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



        <div className="container shadow py-4 px-4 bg-white mt-5 mb-0 d-lg-none d-md-none d-block" style={{ borderRadius: "15px", position: "relative", top: "-75px" }}>
          <div className="row pb-2">
            <div className="col-7">
              <h4 className="font-weight-bold">Jobs by Industry</h4>
            </div>
            <div className="col-5 text-right">
              <Link to="/jobsbyindustrypage" className="link-tag-home"><h6 className="font-weight-bold mb-0 mt-0 p-0" style={{ color: "#865ddd" }}>View All</h6></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider  {...settings3} className="main-slider-has">
                {
                  props.dashboardReducer.dashboard.jobs_by_industry && props.dashboardReducer.dashboard.jobs_by_industry.length > 0 ? props.dashboardReducer.dashboard.jobs_by_industry.map(homejob => (
                    <Link to={`/topmanagementlogin2?id=${homejob.id}?industry=${homejob.name}?count=${homejob.job_count}`} className="link-tag-home">
                      <p className="para-width-main" key={homejob.id}>{homejob.name !== null && homejob.name !== undefined ? text_truncate(homejob.name, 20) : ""}
                        <span style={{ color: "lightgrey" }}> ({homejob.job_count !== null && homejob.job_count !== undefined ? homejob.job_count : ""}) </span>
                      </p>
                    </Link>
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





        {/* Recent Jobs Starts here */}

        <div className="container shadow py-3 px-4 bg-white d-lg-block d-md-none d-none mb-5" style={{ borderRadius: "15px" }}>
          <div className="row pb-2">
            <div className="col-md-9">
              <h4 className="font-weight-bold mb-0">Recent Jobs</h4>
            </div>
            <div className="col-md-3 text-right">
              <Link to="/topmanagmentloginafter" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...recentSettingOne}
              >
                {
                  props.dashboardReducer.dashboard.recent_jobs
                    && props.dashboardReducer.dashboard.recent_jobs.length > 0 ?
                    props.dashboardReducer.dashboard.recent_jobs.map(homejob => (
                      <div className="shadow hover  pt-2 pb-2 mx-1 my-2 pl-3 maindiv-of-recrnt-job-slider">
                        <Link to={`/job-details?id=${homejob.id}`} className="link-tag-home">
                          <div>
                            <h6 className="font-weight-bold p-0 m-0" style={{ color: "gray" }}>{homejob.title !== null && homejob.title !== undefined ? text_truncate(homejob.title, 25) : ""}</h6>
                            <small style={{ color: "lightgrey" }}>{homejob.rec !== null && homejob.rec !== undefined ? homejob.rec : ""}</small>
                            <div className="d-flex align-items-baseline mt-1">
                              <img src={Location} className="mr-1" height="10px" />
                              <small style={{ color: "gray", fontSize: "12px" }} className="">{homejob.country !== null && homejob.country !== undefined ? homejob.country : ""}</small>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )) :
                    <div>
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
        <div className="container  shadow py-3 px-4 bg-white d-lg-none d-md-block d-none" style={{ borderRadius: "15px" }}>
          <div className="row pb-2">
            <div className="col-md-9">
              <h4 className="font-weight-bold mb-0">Recent Jobs</h4>
            </div>
            <div className="col-md-3 text-right">
              <Link to="/topmanagmentloginafter" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...recentSettingTwo}
              >
                {
                  props.dashboardReducer.dashboard.recent_jobs && props.dashboardReducer.dashboard.recent_jobs.length > 0 ? props.dashboardReducer.dashboard.recent_jobs.map(homejob => (

                    <div className="shadow hover pt-2 pb-2 mx-1 my-2 pl-3 maindiv-of-recrnt-job-slider">
                      <Link to={`/job-details?id=${homejob.id}`} className="link-tag-home">
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


        {/* Mobile */}
        <div className="container shadow py-3 px-4 bg-white d-lg-none d-md-none d-block" style={{ borderRadius: "15px" }}>
          <div className="row pb-2">
            <div className="col-7">
              <h4 className="font-weight-bold mb-0">Recent Jobs</h4>
            </div>
            <div className="col-5 text-right">
              <Link to="/topmanagmentloginafter" className="link-tag-home"><h6 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>View All</h6></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...recentSettingThree}
              >
                {
                  props.dashboardReducer.dashboard.recent_jobs && props.dashboardReducer.dashboard.recent_jobs.length > 0 ? props.dashboardReducer.dashboard.recent_jobs.map(homejob => (

                    <div className="shadow hover pt-2 pb-2 mx-1 my-2 pl-3 maindiv-of-recrnt-job-slider">
                      <Link to={`/job-details?id=${homejob.id}`} className="link-tag-home">
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
      <FooterTwo />
    </>
  );
}



const mapStateToProps = (state) => ({
  auth: state.auth,
  dashboardReducer: state.dashboardReducer
});

const mapDispatchToProps = (dispatch) => ({
  jobSLiderLogin: (userId) => dispatch(jobSLiderLogin(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(JobsLogin)
