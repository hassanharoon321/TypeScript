import React from 'react';
import "./TermsandCondition.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer2";
import Nav2 from "../../Components/Nav2/Nav2";

function TermsandCondition() {
    return (
        <>
            {localStorage.getItem("auth_id") !== null &&
                localStorage.getItem("auth_id") !== undefined &&
                localStorage.getItem("auth_id") !== "" ? (
                <Nav2 />
            ) : (
                <Navbar />
            )}
            <div className="priv-pol-main">
                <h1 className="priv-pol-head">Become an Affiliate</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum animi
                    recusandae distinctio quia aliquid velit molestiae accusantium!
                    Officiis, itaque! Perferendis quisquam aperiam, et dicta fuga nam sit
                    non iusto repudiandae.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum animi
                    recusandae distinctio quia aliquid velit molestiae accusantium!
                    Officiis, itaque! Perferendis quisquam aperiam, et dicta fuga nam sit
                    non iusto repudiandae.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default TermsandCondition;