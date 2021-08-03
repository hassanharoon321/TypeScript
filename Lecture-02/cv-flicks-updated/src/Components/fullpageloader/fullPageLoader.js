import React from "react"
import spinner from "../../Assests/spinner 2.gif"
import "./fullpagelaoder.css"

const FullPageLoader = ({ videoUploadOne }) => {
    return (
        <div className="fp-container">
            <img src={spinner} className="fp-loader d-lg-block d-md-block d-none" alt="loading" />
            <img src={spinner} className="fp-loaders d-lg-none d-md-none d-block" alt="loading" />
            {videoUploadOne == undefined ? "" : (<h3 className="fp-loader-one">{`Video upload is in progress ${videoUploadOne} %`}</h3>)}

        </div>
    )
}
export default FullPageLoader