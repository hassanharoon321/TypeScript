import React from "react";
import "./GetPremium.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OkIcon from "../../Assests/ok-icon.svg";
import WrongIcon from "../../Assests/wrong-icon.svg";
import { getPricing } from "../../actions/pricingAction";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Nav2 from "../../Components/Nav2/Nav2";
import Footer2 from "../../Components/Footer/Footer2";
import MStripe from "../../stripeBtn";
import { Link } from "react-router-dom";
// import pre from "../../Assests/promo.png";
import PremiumBanner from "../../Components/PremiumBanner";

function GetPremium(props) {
  useEffect(() => {
    loadGetPersonal(localStorage.getItem("auth_id"));
  }, []);
  const loadGetPersonal = async (userId) => {
    await props.getPricing(userId);
    return null;
  };
  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1
              className="font-weight-bold text-center"
              style={{ color: "#865ddd" }}
            >
              Plans and Pricing
            </h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <PremiumBanner />
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* premium Starts */}
        <div className="row">
              <div className="col-md-4"></div>
              <div
                className="col-md-4 shadow p-3 mb-5"
                style={{ borderRadius: "15px" }}
              >
                <h3 className="prem-div-head font-weight-bold text-center">
                  Premium
                </h3>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="text-center">
                      <img src={OkIcon} className="w-0" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="stand-text">Unlimited Job Apply</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="text-center">
                      <img src={OkIcon} className="w-0" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="stand-text">Job Progress</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="text-center">
                      <img src={OkIcon} className="w-0" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="stand-text">Profile Viewed</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="cash-stan-main">
                      $10<small className="small-month">/month</small>
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center mt-4">
                    {props.pricingReducer.pricing.packages &&
                    props.pricingReducer.pricing.packages.length > 0 ? (
                      props.pricingReducer.pricing.packages.map((pri) => (
                        <MStripe id={pri.id} amount={10} />
                      ))
                    ) : (
                      <div>
                        <div
                          className="spinner-border text-secondary"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            {/* premium Ends */}
      </div>
      <Footer2 />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  pricingReducer: state.pricingReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getPricing: (userId) => dispatch(getPricing(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GetPremium);
