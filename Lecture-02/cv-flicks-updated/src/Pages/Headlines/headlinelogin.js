import React from "react";
import "./Headlines.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHeadlinesLogin } from "../../actions/headlineloginAction"
import { getProfile } from "../../actions/profileAction"
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function HeadlinesLogin(props) {
  const [headline, setheadline] = useState(props.profileReducer.profile.headline !== null && props.profileReducer.profile.headline !== undefined ? props.profileReducer.profile.headline : "")
  // const[value,setvalue]=useState(a)

  useEffect(() => {
    loadGetPersonal(localStorage.getItem("auth_id"))


  }, []);
  const loadGetPersonal = async (userId) => {
    // setvalue(props.profileReducer.profile.headline)
    await props.getProfile(userId)
    return null;

  }
  // var a=props.profileReducer.profile.headline
  const addNewHeadline = async () => {
    console.log("qwerty")
    await props.createHeadlinesLogin(localStorage.getItem("auth_id"), headline)
    // window.location.reload(false);
  }
  return (

    <div className="container mt-5">
      {console.log("ffffff", headline)}
      {/* Row 1 for Heading Starts */}
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <h1 className="col-md-4 d-flex justify-content-center headline-head">
          Headline
        </h1>
        <div className="col-md-4"></div>
      </div>
      {/* Row 1 for Heading Ends */}

      {/* Row 2 for Para Starts */}
      <div className="row">
        <div className="col-md-2"></div>
        <p className="col-md-8 d-flex justify-content-center headline-para">
          Enter your introductory bio and experiences to give a brief highlight
          of yourself to the clients
        </p>
        <div className="col-md-2"></div>
      </div>
      {/* Row 2 for Para Ends */}

      {/* Row 3 Para Starts */}
      <div className="row">
        <div className="col-md-2"></div>
        {/* Main Background of Input starts */}
        <div className="col-md-8 shadow mt-2 p-5 d-flex flex-column align-items-center head-main-div">
          <div className="input-group">
            <textarea
              value={headline}
              onChange={e => setheadline(e.target.value)}
              className="form-control head-text-area"
              aria-label="With textarea"
              // placeholder={props.profileReducer.profile.headline}
              style={{ height: "250px",color:"#000" }}
            // value={props.profileReducer.profile.headline}
            />
          </div>
          <button className="mt-5 btn btn-warning headline-main-btn" onClick={() => addNewHeadline()}>
            Save and Continue
          </button>
        </div>
        {/* Main Background of Input Ends */}
        <div className="col-md-2"></div>
      </div>
      {props.headlineloginReducer.loading == true ?
        null :
        <FullPageLoader />
      }
    </div>
  );
}


const mapStateToProps = state => ({
  auth: state.auth,
  headlineloginReducer: state.headlineloginReducer,
  profileReducer: state.profileReducer

})


const mapDispatchToProps = dispatch => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
  createHeadlinesLogin: (userId, headline) => dispatch(createHeadlinesLogin(userId, headline)),

})
export default connect(mapStateToProps, mapDispatchToProps)(HeadlinesLogin)
