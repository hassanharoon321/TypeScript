import React, { useEffect } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import FooterTwo from "../../Components/Footer/Footer2";
import HomeBanner2 from '../../Components/HomeBanner2';
import ReactPlayer from 'react-player'
import { getWhatWeDo } from "../../actions/whatWeDoAction";
import { connect } from "react-redux";

function WhatWeDo(props) {
    useEffect(() => {
        loadGetProfessional()
    });
    const loadGetProfessional = async () => {
        await props.getWhatWeDo();
        return null;
    };
    // const vidLink = "https://drive.google.com/file/d/1oTnhqAHJupQHis38OsZ8bo7RTCOh2Ni7/preview";
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5 mb-5">
                    {/* <button onClick={() => console.log(props.whatWeDoReducer.whatWeDo.url)}>Click me</button> */}
                    <div className="col-md-12">
                        <h1 className="font-weight-bold" style={{ color: "#865ddd" }}>How it works</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <HomeBanner2 />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8" >
                        <div className="d-flex justify-content-center">
                            <ReactPlayer url={props.whatWeDoReducer.whatWeDo.url !== null &&
                                props.whatWeDoReducer.whatWeDo.url !== undefined ?
                                props.whatWeDoReducer.whatWeDo.url : 
                                "https://drive.google.com/file/d/1oTnhqAHJupQHis38OsZ8bo7RTCOh2Ni7/preview"
                                }
                            playing={true}
                            controls
                            className='react-player'
                            />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <FooterTwo />
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    whatWeDoReducer: state.whatWeDoReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getWhatWeDo: () => dispatch(getWhatWeDo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WhatWeDo);

