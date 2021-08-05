import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRecordWebcam } from 'react-record-webcam';
import Nav2 from "../Nav2/Nav2";
import Footer2 from "../Footer/Footer2";

function Webcam2(props) {
  const videoRestriction = {
    recordingLength: 120,
    RecorderOptions: "mimeType: video/mp4",
    downloadFileName: "Cv Vlogs Video",
  }
  const recordWebcam = useRecordWebcam(videoRestriction);

  return (
    <>
      <Nav2 />
      <div className="text-center mb-5">
        <p className="mt-5">Camera status: {recordWebcam.status}</p>
        <div>
          <video ref={recordWebcam.webcamRef} autoPlay muted />
        </div>
        <button className="btn btn-warning font-weight-bold mr-2 mt-2" onClick={recordWebcam.open} style={{ background: "#ffb44a", color: "#fff" }}>Open camera</button>
        <button className="btn btn-warning font-weight-bold mr-2 mt-2" onClick={recordWebcam.close} style={{ background: "#ffb44a", color: "#fff" }}>Close Camera</button>
        <button className="btn btn-warning font-weight-bold mr-2 mt-2" onClick={recordWebcam.start} style={{ background: "#ffb44a", color: "#fff" }}>Start recording</button>
        <button className="btn btn-warning font-weight-bold mr-2 mt-2" onClick={recordWebcam.stop} style={{ background: "#ffb44a", color: "#fff" }}>Stop recording</button>
        <button className="btn btn-warning font-weight-bold mr-2 mt-2" onClick={recordWebcam.retake} style={{ background: "#ffb44a", color: "#fff" }}>Retake recording</button>
        <button className="btn btn-warning font-weight-bold mt-2" onClick={recordWebcam.download} style={{ background: "#ffb44a", color: "#fff" }}>Download recording</button>
      </div>
      <Footer2 />
    </>
  )
}

export default Webcam2;