import React, { useState, useEffect } from 'react';
import Footer2 from '../../Components/Footer/Footer2';
import Nav2 from '../../Components/Nav2/Nav2';
import Navbar from "../../Components/Navbar/Navbar";
import ReactPlayer from 'react-player';
import axios from "axios"


function Tips() {
    const [apiData, setApiData] = useState("")
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await axios.get("https://api.cvvlogs.com/cv-tube/api.v.1/user/tips_vid.php")
        setApiData(res.data.data.url)
    }
    console.log(apiData)
    return (
        <>
            {localStorage.getItem("auth_id") !== null &&
                localStorage.getItem("auth_id") !== undefined &&
                localStorage.getItem("auth_id") !== "" ? (
                <Nav2 />
            ) : (
                <Navbar />
            )}
            <div className="container">
                <div className="row mt-5">
                    <h1 className="font-weight-bold" style={{ color: "#865ddd" }}>Tips {`&`} Recommendations</h1>

                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mb-5 mt-5">
                        <ReactPlayer
                            url={apiData}
                            playing={true}
                            controls
                            className='react-player'
                        />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-5">
                    <p className="font-weight-bold text-danger">IMPORTANT</p>
                    <p className="font-weight-bold text-danger">In order to protect your Privacy and Identity, we strongly recommend that you do not share
                        any personal details such as full name,phone number or email in your video resume</p>
                    <p>
                        The video shouldn’t be longer than 120 seconds. Guidelines for video:
                    </p>
                    <ul>
                        <li>
                            What will you bring to the company? (Focus on key requirements for the job)
                        </li>
                        <li>
                            Why should we hire you? (Mention both your hard and soft skills)
                        </li>
                        <li>
                            Explain how your skills and attributes would benefit the company? (maybe highlight a few achievements)
                        </li>
                        <li>
                            Pleae make sure you record your video.in 16:9 format fhd (full hd 30fps).
                        </li>
                        <li>
                            If you upload your video please make sure your upload videos is in 16:9 fhd 30fps ( full hd 30 frames per second format ) and video size should not be more than 300mb.
                        </li>
                        <li>
                            Choose an appropriate location
                        </li>
                        <li>
                            Make sure to record the video in an appropriate room where there won’t be any noises and you won’t get distracted. If you have pets at home, keep them in a different room during the interview. A barking dog or a meowing cat noise in the background doesn’t make you look very professional. Also, a plain white wall as a backdrop is ideal for video interviews.
                        </li>
                        <li>
                            Try your hardware before the interview
                        </li>
                        <li>
                            Try all of your equipment including your headsets, microphone and internet connection to make sure that they are properly working. Set up your camera so it is focused on your eye level. Verify that your sound is clear. You can test it by making a video call with a friend. Also, confirm that you can hear the other person via your headphones.
                        </li>
                        <h6 className="mt-2 mb-2">
                            Appearance
                        </h6>
                        <li>
                            Make yourself as professional as possible, turn on good lighting and set the camera in front of your face. All other angles look less advantageous. Imagine that the recruiter is you and wonder what a promising candidate for a specific position should look like?
                        </li>
                        <li>
                            Control the time
                        </li>
                        <li>
                            Give specific answers to the questions posed. Avoid long lyrical digressions and far-off visits. Time is always short and it is very important to remember this. List the highlights and bring them to life during the video.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Tips
