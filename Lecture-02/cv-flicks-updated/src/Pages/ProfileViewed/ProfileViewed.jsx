import React from "react";
import "./ProfileViewed.css";
import FooterTwo from "../../Components/Footer/Footer2";
import { Link } from "react-router-dom";
import { getProfileViewed } from "../../actions/profileViewedAction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Nav2 from "../../Components/Nav2/Nav2"

function ProfileViewed(props) {
  const [compId, setCompId] = useState(null);
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get(compId);

  useEffect(() => {
    loadGetProfileViewed(localStorage.getItem("auth_id"));
  });
  
  const loadGetProfileViewed = async (userId) => {
    await props.getProfileViewed(userId);
    return null;
  };

  return (
    <>
    <Nav2 />
      <div className="container mb-5">
        {/* <button onClick={() => console.log(props.profileViewedReducer.profileViewed.viewers)}>Click me</button> */}
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12">
                <h1 className="mb-0 font-weight-bold" style={{ color: "#865ddd" }}>
                  Profile Viewed
                </h1>
                <p style={{ color: "#011F95" }} className="font-weight-bold">
                  List of Recruiters who have visited your Profile
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div
            className="col-md-8 py-4 px-5 shadow mt-4 mb-5"
            style={{
              borderRadius: "15px"
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <h4 style={{ color: "#865ddd" }} className="font-weight-bold">List of Recruiters</h4>
              </div>
            </div>
            {/* Here------------------- */}
            {props.profileViewedReducer.profileViewed.viewers &&
            props.profileViewedReducer.profileViewed.viewers.length > 0
              ? props.profileViewedReducer.profileViewed.viewers.map((prof) => (
                  <Link to={`/company-profile?id=${prof.id}`} className="link-tag-home">
                    <div className="row px-4 mt-4">
                      <div className="col-md-3 col-4">
                        <a href="#">
                          {prof.img !== null &&
                          prof.img !== undefined &&
                          prof.img !== "" ? (
                            <img
                              src={prof.img}
                              height="100%"
                              width="100%"
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
                      <div className="col-md-9 col-8 lg-pl-4 md-pl-4 my-auto">
                        <h3
                          className="company-profile-font-head  mb-0"
                          onClick={() => setCompId(prof.id)}
                        >
                          {prof.name !== null && prof.name !== undefined
                            ? prof.name
                            : ""}
                        </h3>
                        <p className="company-profile-font-para">
                          {prof.tagline !== null && prof.tagline !== undefined
                            ? prof.tagline
                            : ""}
                        </p>
                      </div>
                      <hr className="mt-4" />
                    </div>
                  </Link>
                ))
              : "List of recruiters viewed your profile will appear here"}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profileViewedReducer: state.profileViewedReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileViewed: (userId) => dispatch(getProfileViewed(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileViewed);
