import React from "react";
import "./Jobs.css";
import FooterTwo from "../../Components/Footer/Footer2";
import "bootstrap/dist/css/bootstrap.min.css";
import SlickSlider from "../../Components/Slickslider";
import RecentJobSlider from "../../Components/Recentjobslider";
import Navbar from "../../Components/Navbar/Navbar";

function Jobs() {
  return (
    <>
      <Navbar />
      <div className="conatiner-fluid bg_img-jobs"></div>
      <SlickSlider />
      <div className="mb-5 pb-5">
        <RecentJobSlider />
      </div>
      <FooterTwo />
    </>
  );
}

export default Jobs;
