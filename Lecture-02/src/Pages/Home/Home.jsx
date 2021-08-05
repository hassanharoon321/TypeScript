import React, { useEffect,useState } from "react";
import "./Home.css";
import Modal from "react-modal";
import Navbar from "../../Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SlickSlider from "../../Components/Slickslider";
import SearchIcon from "../../Assests/Search.svg";
import LocationIcon from "../../Assests/Location.svg";
import FooterTwo from "../../Components/Footer/Footer2";
import RecentJobSlider from "../../Components/Recentjobslider";
import { Link, useHistory, useLocation } from "react-router-dom";
import Banner from "../../Components/Banner";
import HomeBanner2 from "../../Components/HomeBanner2";
import tawkTo from "tawkto-react";



function Home() {
  
  
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const state = new URLSearchParams(search).get("state");
  //const [getData, setLingo] = useState([]);
  
  useEffect(()=>{
  callCheck()
  },[])
  const callCheck=()=>{
    var token;
    var urlEncoded=encodeURI('https://localhost:3000/dashboard')
    if(code!==null&&code!==undefined){
      
    // headers: { 'Content-Type': 'application/json'},
    //https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77ul9euvdop3a4&redirect_uri=https://localhost:3000/dashboard&state=foobar&scope=r_emailaddress
   fetch('https://api.cvvlogs.com/cv-tube/api.v.1/user/linkedin.php', {
      method: 'POST',
      
     
      body: JSON.stringify({
          "code": code,
          "state":state

      })
    })
    .then(res=>res.json())
      .then(response => {
        //console.log("aaaaaaaa----",response.data[0].split(":")[1].split(",")[0].replaceAll('"',""))
        console.log("abccdddd",response)
        var email=response.data.email
        var first=response.data.first_name
        var last=response.data.last_name
         //token=response.data[0].split(":")[1].split(",")[0].replaceAll('"',"")
         if(response.status==200){
       
                  var data = {
                      "type": 3,
                      "email": email,
                      "first_name": first,
                      "last_name": last,
                      "num": "000000",
                      "token": code,
                      "device_token": localStorage.getItem("dToken1")
                  }
                  console.log("gggggggg", data)
      
                  fetch("https://api.cvvlogs.com/cv-tube/api.v.1/user/social_login.php", {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json', },
                      body: JSON.stringify({
                        "type": 3,
                        "email": email,
                        "first_name": first,
                        "last_name": last,
                        "num": "000000",
                        "token": code,
                        "device_token": localStorage.getItem("dToken1")
      
                      })
                  }).then(res => {
                      console.log("res aqib", res)
                      if (res.status !== 200) {
                          alert("Incorrect Email Or Password...");
                      }
                      return res.json();
                  }).then((response) => {
                      console.log("data", response)
                      const auth_id = response.data.auth_id;
      
                      if (auth_id !== "" && auth_id !== null && auth_id !== undefined) {
                          window.location = "/dashboard"
                      } else {
                          alert("email or password is incorrect...")
                      }
                      localStorage.setItem("auth_id", auth_id)
                      localStorage.setItem("first_name", first)
                      // window.location.reload(false)
                  }).catch((error) => {
                      console.log(error)
      
                  })
      
                }
                
             
          
      
        
        
      })
      .catch((error) => {
        console.log("linnnn error!!!! ",error);
        
      });
    
    
    
    }  
      
     
    }

const getData=(ttoken)=>{
  return fetch('https://api.linkedin.com/v2/me', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${ttoken}`}

      }).then(res=>res.json()).then(re=>{
        console.log("ssss",re)
      })
   
}

  return (
    <>
      <Navbar />
      
      <div className="conatiner-fluid bg_img">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="row pt-5 mt-5">
                <div className="col-md-12 ">
                  <h3 style={{ color: "#ffff" }} className="font-weight-bold">
                    Search from all available jobs
                  </h3>
                </div>
              </div>
              <Link to="/search-jobs" className="link-tag-home">
                <div className="row pt-3">
                  <div className="col-md-6 mr-lg-0 pr-lg-0  mr-md-0 pr-md-0 ">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white">
                          <img src={SearchIcon} />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control border-left-0 border-right-0 pl-0"
                        placeholder="Job Title, Industry, Experience"
                        style={{
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderRightColor: "#fff",
                          borderRadius: "0",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ml-lg-0 pl-lg-0 ml-md-0 pl-md-0 d-lg-block d-md-block d-none">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white">
                          {" "}
                          <img src={LocationIcon} />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control border-left-0 border-right-0 pl-0"
                        placeholder="Location"
                        style={{
                          borderRadius: "0",
                          cursor: "pointer",
                          borderLeftColor: "#707070",
                        }}
                      />
                      <div className="input-group-append">
                        <Link to="search-jobs" className="link-tag-home">
                          <span
                            className="input-group-text text-white font-weight-bold"
                            style={{
                              backgroundColor: "#FFB44A",
                              borderColor: "#FFB44A",
                              fontWeight: "bold !important",
                              cursor: "pointer",
                              textDecorationColor: "#fff",
                            }}
                          >
                            SEARCH
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
     {/* <button onClick={()=>callCheck()}>uuuuuuu</button> */}
      <SlickSlider />
      {/* <HomeBanner2 /> */}
      <RecentJobSlider />
      <Banner />

      <FooterTwo />
    </>
  );
}

export default Home;
