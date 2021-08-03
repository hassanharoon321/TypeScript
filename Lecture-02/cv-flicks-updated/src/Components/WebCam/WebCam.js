import Webcam from "react-webcam";
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

const WebcamStreamCapture = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
          mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      }, [webcamRef, setCapturing, mediaRecorderRef]);
    
      const handleDataAvailable = React.useCallback(
        ({ data }) => {
          if (data.size > 0) {
            setRecordedChunks((prev) => prev.concat(data));
          }
        },
        [setRecordedChunks]
      );
    
      const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
      }, [mediaRecorderRef, webcamRef, setCapturing]);
    
      const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
          const blob = new Blob(recordedChunks, {
            type: "video/webm"
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = url;
          a.download = "react-webcam-stream-capture.webm";
          a.click();
          window.URL.revokeObjectURL(url);
          setRecordedChunks([]);
        }
      }, [recordedChunks]);


    return (
        <>
            <Webcam audio={true} ref={webcamRef} height={720} width={1280} />
            {capturing ? (
                <button className="btn btn-primary" onClick={handleStopCaptureClick}>Stop Capture</button>
            ) : (
                <button className="btn btn-primary" onClick={handleStartCaptureClick}>Start Capture</button>
            )}
            {recordedChunks.length > 0 && (
                <button className="btn btn-primary" onClick={handleDownload}>Download</button>
            )}
        </>
    );
};


const mapStateToProps = state => ({
    // registerReducer:state.registerReducer,
    // personalReducer: state.personalReducer
    auth: state.auth

})


const mapDispatchToProps = dispatch => ({

    // getPersonal: () => dispatch(getPersonal()),
    // getPersonal: () => dispatch(getPersonal()),

})
export default connect(mapStateToProps, mapDispatchToProps)(WebcamStreamCapture)

// export default WebcamStreamCapture;

{/* <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    <button onClick={() => console.log("fffff", file)}>hhhh</button> */}
