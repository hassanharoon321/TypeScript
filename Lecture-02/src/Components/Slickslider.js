import React, { useState, useEffect } from "react";
import "./Slider.css";
import "../Components/Footer/Footer.css"
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { getDashboard } from "../actions/dashboardAction";
import { connect } from 'react-redux';


function SlickSlider(props) {
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
  return (
    <>
      <div className="container shadow py-4 px-4 bg-white mt-5 mb-0 d-lg-block d-md-none d-none" style={{ borderRadius: "15px", position: "relative", top: "-75px" }}>
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
            <Slider  {...settings} className="main-slider-has">
              {
                props.dashboardReducer.dashboard.jobs_by_industry && props.dashboardReducer.dashboard.jobs_by_industry.length > 0 ? props.dashboardReducer.dashboard.jobs_by_industry.map(homejob => (
                  <Link to={`/topmanagement?id=${homejob.id}?industry=${homejob.name}?count=${homejob.job_count}`} className="link-tag-home">
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
                  <Link to={`/topmanagement?id=${homejob.id}?industry=${homejob.name}?count=${homejob.job_count}`} className="link-tag-home">
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
                  <Link to={`/topmanagement?id=${homejob.id}?industry=${homejob.name}?count=${homejob.job_count}`} className="link-tag-home">
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
export default connect(mapStateToProps, mapDispatchToProps)(SlickSlider)



