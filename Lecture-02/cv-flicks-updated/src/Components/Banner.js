import React from "react";
import "../Components/Footer/Footer.css";
import bannerr from "../Assests/banner.png";

export default function Banner() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <img className="my-5 pb-5" src={bannerr} width="100%" />
        </div>
      </div>
    </div>
  );
}