import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import FooterTwo from "../../Components/Footer/Footer2";
import { getDashboardLogin } from "../../actions/getDashboardLogin";
import { connect } from 'react-redux';
import Nav2 from '../../Components/Nav2/Nav2';
import "../../App.css"

function JobsByIndustrySliderPageLogin(props) {
    useEffect(() => {
        loadGetHomeJob(localStorage.getItem("auth_id"))

    },[]);

    const loadGetHomeJob = async (userId) => {
        await props.getDashboardLogin(userId)
        return null;
    }

    return (
        <>
            <Nav2 />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ color: "#865ddd" }} className="font-weight-bold">Jobs by industry</h1>
                    </div>
                    <div className="col-md-12">
                        <p className="font-weight-bold" style={{ color: "#011F95" }}>Showing {props.dashboardReducer.dashboard.jobs_by_industry && props.dashboardReducer.dashboard.jobs_by_industry.length > 0 ? props.dashboardReducer.dashboard.jobs_by_industry.length: ""} Industry</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="row mb-5">
                            {props.dashboardReducer.dashboard.jobs_by_industry && props.dashboardReducer.dashboard.jobs_by_industry.length > 0 ? props.dashboardReducer.dashboard.jobs_by_industry.map((job) => (
                                <div className="col-lg-4 col-md-6 mb-5 py-auto">
                                    <Link to={`/topmanagementlogin2?id=${job.id}?industry=${job.name}?count=${job.job_count}`} className="link-tag-home">
                                        <div className="shadow hover d-flex flex-column justify-content-center align-items-center" style={{ borderRadius: "15px",minHeight:"120px" }}>
                                            <h3 className="text-center mb-0" style={{ fontSize: "18px", color: "#707070" }}>{job.name}</h3>
                                            <p className="text-center" style={{ color: "#c8c8c8",fontSize:"12px" }}>{job.job_count} Jobs Available</p>
                                        </div>
                                    </Link>
                                </div>
                            )) : <div>
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="sr-only">No Jobs</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 m-0 p-0">
                        <div style={{ background: "#D8E8FF", borderRadius: "15px", minHeight: "800px" }} className="p-2">
                            Placeholder for Ads
                        </div>
                    </div>
                </div>

            </div>
            <FooterTwo />
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dashboardReducer: state.dashboardReducer
});

const mapDispatchToProps = (dispatch) => ({
    getDashboardLogin: (userId) => dispatch(getDashboardLogin(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(JobsByIndustrySliderPageLogin)
