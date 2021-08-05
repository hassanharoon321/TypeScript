import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OkIcon from "../../Assests/tick.svg";
import "./AppliedSuccess.css";

function AppliedSuccess() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-10 shadow p-5 mt-5" style={{borderRadius:"10px"}}>
          <div className="d-flex justify-content-center align-items-end">
            <img src={OkIcon} alt="" className="pb-1" />
            <h3 className="ml-3 h-100 pt-1">Job Applied!</h3>
          </div>
          <p className="text-center mt-4">
            Your Video CV is uploaded and sent to the employer. Please wait up
            to 4 days for a response.
          </p>
          <p className="text-center">Click proceed to check your progress.</p>
          <div className="text-center">
            <Link to="./dashboard">
              <button className="btn btn-warning w-50 font-weight-bold" style={{ color: "#fff",background:"#ffb44a" }}>
                Proceed
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-2"></div>
      </div>
    </div>
  );
}

export default AppliedSuccess;
