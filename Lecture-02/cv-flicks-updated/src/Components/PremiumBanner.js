import React from "react";
import "../Components/Footer/Footer.css";
import bannerr from "../Assests/premium/Candidate.png";

export default function PremiumBanner() {
    return (
        <div className="container mb-4 mt-n5">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src={bannerr} width="100%" />
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}