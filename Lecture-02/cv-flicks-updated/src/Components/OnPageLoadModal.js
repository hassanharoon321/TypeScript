import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { getHomeVideo } from "../../src/actions/homeVideoAction";
import ReactPlayer from 'react-player'

Modal.setAppElement('#root');

function OnPageLoadModal(props) {
    useEffect(() => {
        loadGetHomeJob()
    }, []);

    const loadGetHomeJob = async () => {
        await props.getHomeVideo()
        return null;
    }

    const [videoModal, setVideoModal] = useState(true)

    var history = useHistory();
    if (
        localStorage.getItem("auth_id") !== null &&
        localStorage.getItem("auth_id") !== undefined &&
        localStorage.getItem("auth_id") !== ""
    ) {
        history.push("/dashboard");
    }

    return (
        <Modal
            isOpen={videoModal}
            onRequestClose={() => setVideoModal(true)}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#fff",
                },
                content: {
                    background: "#000",
                    border: 0,
                    position: "absolute",
                    margin: "0 auto",
                    width: "750px",
                    height: "580px",
                    top: "30px",
                    left: "0",
                    right: "0",
                    bottom: "40px",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                    boxShadow: "0 0 5px 5px #f2f2f2",
                    borderRadius: "20px",
                }
            }}
        >
            {/* <button onClick={()=>console.log(props.homeVideorReducer.homeVideo.url)}>CLick me</button> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ReactPlayer
                            url={props.homeVideorReducer.homeVideo.url !== null && props.homeVideorReducer.homeVideo.url !== undefined ? props.homeVideorReducer.homeVideo.url : ""}
                            playing={true}
                            controls
                            className='react-player ml-4' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <Link to="/home">
                                <button onClick={() => setVideoModal(false)}
                                    style={{
                                        backgroundColor: "#FFB44A",
                                        fontWeight: "bold !important",
                                        cursor: "pointer",
                                        textDecorationColor: "#fff",
                                    }}
                                    className="btn btn-warning w-100 btn-login mt-5"

                                >Skip video</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    homeVideorReducer: state.homeVideorReducer
});

const mapDispatchToProps = (dispatch) => ({
    getHomeVideo: () => dispatch(getHomeVideo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnPageLoadModal)

