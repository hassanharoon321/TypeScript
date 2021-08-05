import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./UploadCv.css";
import Nav2 from "../../Components/Nav2/Nav2";
import FooterTwo from "../../Components/Footer/Footer2";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import { Link, useLocation } from "react-router-dom";
import { getUploadCvVideo } from "../../actions/uploadCvVideoActions";
import { createSelectVideo } from "../../actions/selectVideoAction";
import { connect } from "react-redux";
const config = require("../../helpers/config.json");

Modal.setAppElement("#root");

function UploadCv(props) {
  const search = useLocation().search;
  const job_id = new URLSearchParams(search).get("job_id");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isCheckedId, setIsCheckedId] = useState(null);
  const [loader, setLoader] = useState(false);
  const [UploadProgress, setUploadProgress] = useState("");

  const handleCheck = (e) => {
    setChecked(!checked);
    setIsCheckedId(e);
  };

  const EditcreateSelectVideo = async () => {
    await props.createSelectVideo(
      localStorage.getItem("auth_id"),
      job_id,
      isCheckedId
    );
  };

  useEffect(() => {
    loadGetUploadCvVideo(localStorage.getItem("auth_id"));
  }, []);

  const loadGetUploadCvVideo = async (userId) => {
    await props.getUploadCvVideo(userId);
    return null;
  };

  // Video Post Function Starts
  const handleFile = async (e) => {
    setLoader(true);
    const formData = new FormData(); //formdata object
    formData.append("file", file, file.name);
    console.log("file", file.name);

    axios
      .post(`${config["baseUrl"]}/user/upload_video.php`, formData, {
        headers: {
          Accept: "application/json",
          auth_id: localStorage.getItem("auth_id"),
        },
        onUploadProgress: (progressEvent) => {
          const progress = parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
          // Update state here
          setUploadProgress(progress);
          console.log(progress);
        },
      })
      .then((response) => {
        console.log(response);
        setModalIsOpen(false);
        window.location.reload(false);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };
  // Video Post Function ENds

  const handleInputVid = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0].size);
  };

  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-2"></div>
          <div className="col-md-8 shadow p-5" style={{ borderRadius: "10px" }}>
            {props.uploadCvVideoReducer.uploadCvVideo.videos ? (
              props.uploadCvVideoReducer.uploadCvVideo.vids_allowed >
              props.uploadCvVideoReducer.uploadCvVideo.videos.length ? (
                <>
                  <h1 className="text-center mb-0" style={{ color: "#707070" }}>
                    Upload your Video CV
                  </h1>
                  <p className="text-center" style={{ color: "#707070" }}>
                    Send your video CV to the employer
                  </p>
                  <p className="text-center font-weight-bold" style={{ color: "#FF0000" }}>IMPORTANT</p>
                  <p
                    className="text-center font-weight-bold"
                    style={{ color: "#FF0000" }}
                  >
                    In order to protect your privacy, we strongly recommend that
                    you do not share any personal data, i.e. full name, home
                    address, phone number, email address in your video resume.
                  </p>
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <div
                        style={{ border: "1px dashed black" }}
                        className="p-4 text-center d-flex justify-content-center align-items-baseline"
                      >
                        <i className="far fa-cloud-upload-alt pr-1"></i>
                        <p
                          onClick={() => setModalIsOpen(true)}
                          className="p-0 m-0"
                          style={{
                            background: "#fff",
                            color: "#707070",
                            border: "0",
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          Upload a Video
                        </p>
                        <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={() => setModalIsOpen(false)}
                          style={{
                            overlay: {
                              position: "fixed",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: "rgba(0,0,0,0.4)",
                              zIndex: "1",
                            },
                            content: {
                              position: "absolute",
                              height: "200px",
                              margin: "0 auto",
                              width: "350px",
                              top: "250px",
                              left: "0",
                              right: "0",
                              bottom: "0",
                              border: "1px solid #ccc",
                              background: "#fff",
                              WebkitOverflowScrolling: "touch",
                              borderRadius: "4px",
                              outline: "none",
                              padding: "20px",
                              borderRadius: "20px",
                              background: "#fff",
                              border: "1px solid #fff",
                            },
                          }}
                        >
                          <div
                            style={{ border: "1px dashed black" }}
                            className="p-3 text-center"
                          >
                            <input
                              type="file"
                              id="videoFile"
                              accept="video/mp4,video/x-m4v,video/*"
                              onChange={(e) => handleInputVid(e)}
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                              <button
                                onClick={() => handleFile()}
                                className="btn btn-warning w-100 mt-5 font-weight-bold"
                                style={{ color: "#fff", background: "#ffb44a" }}
                              >
                                Upload
                              </button>
                            </div>
                            <div className="col-md-2"></div>
                            {loader == true ? (
                              <>
                                <FullPageLoader
                                  videoUploadOne={UploadProgress}
                                />
                              </>
                            ) : null}
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </>
              ) : null
            ) : (
              console.log("parent not ok")
            )}

            {/* <h3 className="text-center" style={{ color: "#707070" }}>
              Choose from your uploads
            </h3> */}
            <div className="row">
              {props.uploadCvVideoReducer.uploadCvVideo.videos &&
              props.uploadCvVideoReducer.uploadCvVideo.videos.length > 0
                ? props.uploadCvVideoReducer.uploadCvVideo.videos.map(
                    (getVid) => (
                      <div className="col-md-12" key={getVid.video_id}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          onChange={(e) => handleCheck(getVid.video_id)}
                          defaultChecked={checked}
                        />
                        <ReactPlayer
                          url={
                            getVid.vid_url !== null &&
                            getVid.vid_url !== undefined
                              ? getVid.vid_url
                              : ""
                          }
                          playing={true}
                          controls
                          className="react-player"
                        />
                      </div>
                    )
                  )
                : ""}

              {/* <div className="col-md-12"></div> */}
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <button
                  onClick={() => EditcreateSelectVideo()}
                  className="btn btn-warning mt-5 w-100"
                  style={{
                    color: "#fff",
                    background: "#ffb44a",
                    fontWeight: "bold",
                  }}
                  disabled={!checked === false ? false : true}
                >
                  Apply
                </button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

const mapStateToProps = (state) => ({
  uploadCvVideoReducer: state.uploadCvVideoReducer,
  selectVideoReducer: state.selectVideoReducer,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getUploadCvVideo: (userId) => dispatch(getUploadCvVideo(userId)),
  createSelectVideo: (userId, job_id, videos) =>
    dispatch(createSelectVideo(userId, job_id, videos)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UploadCv);
