import React from "react";
import ProgressRight from "../../Assests/progress-right.svg";
import ProgressWrong from "../../Assests/progress-wrong.svg";
import "./CvShortListed.css";
import FooterTwo from "../../Components/Footer/Footer2";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import { Link } from "react-router-dom";
import { getCvShortlisted } from "../../actions/cv_shortlistedAction";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CircleProgress } from "react-gradient-progress";
import Nav2 from "../../Components/Nav2/Nav2";
import { connect } from "react-redux";

function CvShortListed(props) {
  const [compId, setCompId] = useState(null);
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get(compId);
  useEffect(() => {
    loadGetProfileViewed(localStorage.getItem("auth_id"));
  });
  const loadGetProfileViewed = async (userId) => {
    await props.getCvShortlisted(userId);
    return null;
  };
  return (
    <>
      <Nav2 />
      <div className="container my-5 pb-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="font-weight-bold" style={{ color: "#865ddd" }}>
              CV Shortlisted
              {/* <button onClick={()=>console.log(props.cvShortlisteddReducer.cvShortlisted)}>CLick me</button> */}
            </h1>
          </div>
        </div>

        {/* Api starts */}
        {props.cvShortlisteddReducer.cvShortlisted.jobs &&
        props.cvShortlisteddReducer.cvShortlisted.jobs.length > 0 ? (
          props.cvShortlisteddReducer.cvShortlisted.jobs.map((shortlist) => (
            <div className="row mt-5">
              <div
                className="col-md-12 pt-3 pb-5 shadow"
                style={{ borderRadius: "15px" }}
              >
                {/* <div className="first-short-sec mb-4 pb-4"> */}
                <Link
                  to={`/company-profile?id=${shortlist.company_id}`}
                  className="link-tag-home"
                >
                  <div className="text-center">
                    <a>
                      {shortlist.img !== null &&
                      shortlist.img !== undefined &&
                      shortlist.img !== "" ? (
                        <img
                          src={shortlist.img}
                          height="100%"
                          width="12%"
                          style={{ objectFit: "cover" }}
                          className="border rounded p-2"
                        />
                      ) : (
                        <i
                          className="far fa-user fa-4x mt-1"
                          style={{ color: "lightgray" }}
                        ></i>
                      )}
                    </a>
                  </div>
                  <div className="text-center pb-4 pt-2">
                    <h1 className="company-name-cv">{shortlist.rec}</h1>
                  </div>
                </Link>
                {/* </div> */}

                <div className="row px-4">
                  {/* <div className="col-md-1"></div> */}

                  {/* <div className="progress-div-main" style={{}}> */}
                  <div className="col-md-2">
                    <div className="progress-01">
                      <p className="market-man-top pb-3">
                        {shortlist.job_title !== null &&
                        shortlist.job_title !== undefined
                          ? shortlist.job_title
                          : ""}
                      </p>
                      <div>
                        <CircleProgress
                          percentage={
                            shortlist.percentage !== null &&
                            shortlist.percentage !== undefined
                              ? shortlist.percentage
                              : ""
                          }
                          strokeWidth={5}
                          width={70}
                          fontSize={0}
                          primaryColor={["#FFB44A", "#FFB44A"]}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="progress-01">
                      <p className="viewed-foot">Viewed</p>
                      <small className="market-man-top-02">
                        Your application is viewed by recruiter
                      </small>
                      {shortlist.status !== null &&
                      shortlist.status !== undefined ? (
                        shortlist.status === "1" ||
                        shortlist.status === "2" ||
                        shortlist.status === "3" ||
                        shortlist.status === "4" ? (
                          <img
                            src={ProgressRight}
                            className="progress-bar-two"
                          />
                        ) : (
                          <img
                            src={ProgressWrong}
                            className="progress-bar-two"
                          />
                        )
                      ) : (
                        <img src={ProgressWrong} className="progress-bar-two" />
                      )}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="progress-01">
                      <p className="viewed-foot">Shortlisted</p>
                      <small className="market-man-top-02">
                        In the process of shortlisting
                      </small>
                      {shortlist.status !== null &&
                      shortlist.status !== undefined ? (
                        shortlist.status === "2" ||
                        shortlist.status === "3" ||
                        shortlist.status === "4" ? (
                          <img
                            src={ProgressRight}
                            className="progress-bar-two"
                          />
                        ) : (
                          <img
                            src={ProgressWrong}
                            className="progress-bar-two"
                          />
                        )
                      ) : (
                        <img src={ProgressWrong} className="progress-bar-two" />
                      )}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="progress-01">
                      <p className="viewed-foot">Interviewed</p>
                      <small className="market-man-top-02">
                        You have received an invitation for interview
                      </small>
                      {shortlist.status !== null &&
                      shortlist.status !== undefined ? (
                        shortlist.status === "3" || shortlist.status === "4" ? (
                          <img
                            src={ProgressRight}
                            className="progress-bar-two"
                          />
                        ) : (
                          <img
                            src={ProgressWrong}
                            className="progress-bar-two"
                          />
                        )
                      ) : (
                        <img src={ProgressWrong} className="progress-bar-two" />
                      )}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="progress-01">
                      <p className="viewed-foot">Hired</p>
                      <small className="market-man-top-02">
                        You are hired!
                      </small>
                      {shortlist.status !== null &&
                      shortlist.status !== undefined ? (
                        shortlist.status === "4" ? (
                          <img
                            src={ProgressRight}
                            className="progress-bar-two"
                          />
                        ) : (
                          <img
                            src={ProgressWrong}
                            className="progress-bar-two"
                          />
                        )
                      ) : (
                        <img src={ProgressWrong} className="progress-bar-two" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="font-weight-bold">You haven't apply for any job yet!</p>
        )}
        {props.cvShortlisteddReducer.loading === false ? (
          <FullPageLoader />
        ) : null}
      </div>

      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cvShortlisteddReducer: state.cvShortlisteddReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCvShortlisted: (userId) => dispatch(getCvShortlisted(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CvShortListed);

{
  /* <p className="font-weight-bold">You haven't apply for any job yet!</p> */
}
