import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterTwo from "../../Components/Footer/Footer2";
import Navbar from "../../Components/Navbar/Navbar";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid about-us-image"></div>
        <div className="container mt-5">
          <h1 className="about-head">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
          </p>
          <h1 className="about-head mt-5">Our Mission</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            a quo repellendus ducimus deleniti quis eum hic, fugit iste
            accusantium in, recusandae necessitatibus vitae? Voluptatum ducimus
            aspernatur facere porro accusamus.
          </p>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

export default AboutUs;