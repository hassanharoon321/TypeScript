import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterTwo from "../../Components/Footer/Footer2";
import Navbar from "../../Components/Navbar/Navbar";
import Modal from "react-modal";
import { postContactUsWithoutLogin } from "../../actions/contactUsLoginAction";
import { connect } from "react-redux";
// import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"

function ContactUs(props) {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [registerModalIsOpen3, setRegisterModalIsOpen3] = useState(false);

    const createContact = async () => {
        await props.postContactUsWithoutLogin(name, email, message)
    }

    return (
        <>
            <Navbar />
            {/* Modal Starts */}
            <Modal
                isOpen={registerModalIsOpen3}
                onRequestClose={() => setRegisterModalIsOpen3(false)}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                    },
                    content: {
                        position: "absolute",
                        margin: "0 auto",
                        width: "350px",
                        height: "150px",
                        top: "20%",
                        left: "0",
                        right: "0",
                        bottom: "40px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px",
                        boxShadow: "0 0 5px 5px #f2f2f2",
                        borderRadius: "20px",
                        background: "#fff",
                        border: "1px solid #fff",
                    },
                }}
            >
                {/* Heading Starts */}

                <div className="row  mt-3">
                    <div className="col-md-12">
                        <p className=" text-center">Thank You For Contacting Us.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button className="border-0  btn-primary rounded py-1 px-3 w-50" style={{ backgroundColor: "var(--purple)" }} onClick={() => createContact()}>Ok</button>
                    </div>
                </div>
                {/* Heading Starts */}


            </Modal>
            {/* Modal Ends */}
            <div className="container mt-5 mb-5">
                <h1 className="contact-head-recr">Contact Us</h1>

                <div className="row">
                    <div className="col-md-8">
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <label className="label-of-contact-recr">Full name</label>
                                <input
                                    type="text"
                                    onChange={e => setname(e.target.value)}
                                    className="form-control input-contact-form"
                                    placeholder="Enter your full name here"
                                />
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="label-of-contact-recr">Email</label>
                                <input
                                    type="text"
                                    onChange={e => setemail(e.target.value)}
                                    className="form-control input-contact-form"
                                    placeholder="Enter your email here"
                                />
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-8">
                                <label className="label-of-contact-recr">Message</label>
                                <textarea
                                    type="text"
                                    onChange={e => setmessage(e.target.value)}
                                    className="form-control text-area-contact-recr input-contact-form"
                                    placeholder="Write your message here in detail"
                                />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <button className="btn btn-primary sub-con-btn w-50"
                                    onClick={() => setRegisterModalIsOpen3(true)}
                                    disabled={!name === false &&
                                        !email === false &&
                                        !message === false
                                        ? false : true}
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h6 className="font-weight-bold" style={{ color: "#865ddd" }}>Address</h6>
                        <p>200 Booth Rd. Suite A
                            Ormond Beach, <br />FL 32174</p>
                        <h6 className="font-weight-bold" style={{ color: "#865ddd" }}>Email</h6>
                        <p>Info@cvvlogs.com</p>
                        <h6 className="font-weight-bold" style={{ color: "#865ddd" }}>Contact Number</h6>
                        <p>(833) 272-5627</p>
                    </div>
                </div>

            </div>
            <FooterTwo />
        </>
    );
}

const mapStateToProps = (state) => ({
    contactUsLoginReducer: state.contactUsLoginReducer,

});

const mapDispatchToProps = (dispatch) => ({
    postContactUsWithoutLogin: (name, email, message) => dispatch(postContactUsWithoutLogin(name, email, message))

});
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
