import React from "react";
import "./Headlines.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHeadlines } from "../../actions/headlineaction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Headlines(props) {
  const [headline, setheadline] = useState("");
  const addNewHeadline = async () => {
    console.log("qwerty");
    await props.createHeadlines(localStorage.getItem("auth_id"), headline);
    console.log("change",headline);

  };
  return (
    <div className="container mt-5">
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
              onChange={(e) => setheadline(e.target.value)}
              value={headline}
              className="form-control head-text-area"
              placeholder="Type here......."
              style={{ height: "250px",color:"#000" }}
            />
          </div>
          <button
            className="mt-5 btn btn-warning headline-main-btn"
            onClick={() => addNewHeadline()}
            disabled={!headline === false ? false : true}
          >
            Save and Continue
          </button>
        </div>
        {/* Main Background of Input Ends */}
        <div className="col-md-2"></div>
      </div>
      {/* Row 3 Para Ends */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  headlineReducer: state.headlineReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // getProfessional: () => dispatch(getProfessional()),
  createHeadlines: (userId, headline) =>
    dispatch(createHeadlines(userId, headline)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
