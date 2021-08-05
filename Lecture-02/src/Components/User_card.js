import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProfile } from "../actions/profileAction"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'


const UserCard = (props) => {
  useEffect(() => {
    loadGetPersonal(localStorage.getItem("auth_id"))
  }, []);

  const loadGetPersonal = async (userId) => {
    await props.getProfile(userId)
    return null;
  }
  function capitalize(str) {
    return (
      str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase()
    );
  }

  function titleCase(str) {
    return str.replace(/[^\ \/\-\_]+/g, capitalize);
  }
  return (
    <div className="container my-5" >
      <div className="row shadow mt-5 p-5" style={{ borderRadius: "15px" }}>
        <div className="col-lg-2 col-md-3">
          <div style={{ borderRadius: "15px" }}>
            {
              props.profileReducer.profile.profile ? props.profileReducer.profile.profile.dp !== null && props.profileReducer.profile.profile.dp !== undefined && props.profileReducer.profile.profile.dp !== "" ?
                <img className="p-0 m-0" src={props.profileReducer.profile.profile.dp} width="100%" height="150px" style={{ objectFit: "cover", borderRadius: "15px", border: "1px solid #c8c8c8", position: "relative" }} />
                : <i className="far fa-user fa-7x" style={{ color: "lightgray" }}></i> : ""
            }

            {props.profileReducer.profile.hired === "1" ? <div style={{ background: "rgba(348, 83, 47, 0.55)", height: "25px", width: "143px", position: "absolute", color: "#fff", bottom: "20px" }} className="text-center">
              <p className="p-0 m-0 font-weight-bold">Hired</p>
            </div> : null}

          </div>
        </div>
        <div className="col-md-9 col-lg-10 my-auto">
          <h4 className="font-weight-bold mb-0 pb-0 pl-3" style={{ color: "#362658" }}>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.name !== null && props.profileReducer.profile.profile.name !== undefined ? titleCase(props.profileReducer.profile.profile.name) : "" : ""}</h4>
          <p className="text_gray mt-0 pl-3 pt-0">{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.proffession !== null && props.profileReducer.profile.profile.proffession !== undefined ? props.profileReducer.profile.profile.proffession : "" : ""}</p>
          <ul className="location pt-0 ml-0">
            <li className="nav-item mx-3">
              <p className="text_gray"><i className="fas fa-map-marker-alt pr-1 mr-1"></i>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.city !== null && props.profileReducer.profile.profile.city !== undefined ? props.profileReducer.profile.profile.city : "" : ""} , {props.profileReducer.profile.profile ? props.profileReducer.profile.profile.country !== null && props.profileReducer.profile.profile.country !== undefined ? props.profileReducer.profile.profile.country : "" : ""}</p>
            </li>
            <li className="nav-item mx-3">
              <p className="text_gray"><i className="fas fa-envelope pr-1 mr-1"></i>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.email !== null && props.profileReducer.profile.profile.email !== undefined ? props.profileReducer.profile.profile.email : "" : ""} </p>
            </li>
            <li className="nav-item mx-3">
              <p className="text_gray"><i className="fas fa-phone-alt pr-1 mr-1"></i>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.num !== null && props.profileReducer.profile.profile.num !== undefined ? props.profileReducer.profile.profile.num : "" : ""}</p>
            </li>
          </ul>
          {/* <p><span className="px-4">Karachi,Pakistan</span><span className="px-4">Karachi,Pakistan</span><span className="px-4">Karachi,Pakistan</span></p> */}

        </div>
      </div>


      <div className="row shadow mt-5 pb-3" style={{ borderRadius: "15px" }}>

        <div className="col-md-12 pt-4">
          <ul className="sub_menu">
            {/* <li className="nav-item ">
              <h5 className=""><a href="#" className="text_gray link-tag-home">Headline</a></h5>
            </li> */}
            <li className="nav-item">
              <h5 className=""><a href="#" className="text_gray link-tag-home">Personal</a></h5>
            </li>
            <li className="nav-item ">
              <h5 className=""><a href="#" className="text_gray link-tag-home">Professional</a></h5>
            </li>
            <li className="nav-item ">
              <h5 className=""><a href="#" className="text_gray link-tag-home">Qualification</a></h5>
            </li>
            <li className="nav-item ">
              <h5 className=""><a href="#" className="text_gray link-tag-home">Key Skills</a></h5>
            </li>
          </ul>

        </div>
      </div>











      <div className="row">
        <div className="col-md-4 pl-0">
          <div className="shadow mt-5 py-4 px-4" style={{ borderRadius: "10px" }}>
            <div className="row">
              <div className="col-md-8 pr-0">
                <h3 className="" style={{ color: "#0000cc", color: "#865ddd" }}><b>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage : "" : ""}<small className="font-weight-bold" style={{ fontSize: "15px" }}>% Profile Complete</small></b></h3>
              </div>
              <div className="col-md-4 pl-0 pt-2 text-right">
                {/* <small style={{ color: "#C8C8C8" }}>Updated Today</small> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <progress className="w-100" value={props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage : "" : ""} max="100" />
              </div>
            </div>
            {
              props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage !== 100 ?
                <>
                  {
                    props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage === 0 ?
                      <div className="row">
                        <div className="col-md-12 pt-3">
                          <h6 className="mb-0" style={{ color: "#707070" }}>4 Pending Actions</h6>
                          <p className="pt-0" style={{ fontSize: "11px", color: "#707070" }}>Here is a list of pending actions missing in your profile. Add these to reach a
                            100% completion score!
                          </p>
                        </div>
                      </div>
                      : ""
                      : ""
                      : ""

                  }
                  {
                    props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage === 25 ?
                      <div className="row">
                        <div className="col-md-12 pt-3">
                          <h6 className="mb-0" style={{ color: "#707070" }}>3 Pending Actions</h6>
                          <p className="pt-0" style={{ fontSize: "11px", color: "#707070" }}>Here is a list of pending actions missing in your profile. Add these to reach a
                            100% completion score!
                          </p>
                        </div>
                      </div>
                      : ""
                      : ""
                      : ""

                  }
                  {
                    props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage === 50 ?
                      <div className="row">
                        <div className="col-md-12 pt-3">
                          <h6 className="mb-0" style={{ color: "#707070" }}>2 Pending Actions</h6>
                          <p className="pt-0" style={{ fontSize: "11px", color: "#707070" }}>Here is a list of pending actions missing in your profile. Add these to reach a
                            100% completion score!
                          </p>
                        </div>
                      </div>
                      : ""
                      : ""
                      : ""

                  }
                  {
                    props.profileReducer.profile.profile ? props.profileReducer.profile.profile.percentage !== null && props.profileReducer.profile.profile.percentage !== undefined ? props.profileReducer.profile.profile.percentage === 75 ?
                      <div className="row">
                        <div className="col-md-12 pt-3">
                          <h6 className="mb-0" style={{ color: "#707070" }}>1 Pending Actions</h6>
                          <p className="pt-0" style={{ fontSize: "11px", color: "#707070" }}>Here is a list of pending actions missing in your profile. Add these to reach a
                            100% completion score!
                          </p>
                        </div>
                      </div>
                      : ""
                      : ""
                      : ""

                  }
                  {/* {
              props.profileReducer.profile.videos && props.profileReducer.profile.videos.length > 0 ?
              ""
              :
              <div className="row px-3">
              <div className="col-md-12 text-center shadow  pb-3  pt-4 " style={{ borderRadius: "10px" }}>
                <h6 style={{ color: "#707070" }}>Upload your CV</h6>
                <p className="pt-0" style={{ fontSize: "11px" }}>Upload your CV for greater visibility to your clients!</p>
                <a href="#" className="px-2 py-1 btn uplaod_btn " >Upload File</a>
              </div>
            </div>
            } */}

                  {/* <div className="row px-3">
              <div className="col-md-12 text-center shadow mt-4 pb-3  pt-4 " style={{ borderRadius: "10px" }}>
                <h6 className="">Upload your Photo</h6>
                <p className="pt-0" style={{ fontSize: "11px" }}>Upload your photo for a better personal relation
with your clients!</p>
                <a href="#" className="px-2 py-1 btn uplaod_btn " >Upload File</a>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-md-12 text-center shadow mt-4 pb-3  pt-4 " style={{ borderRadius: "10px" }}>
                <h6 className="">Profile Summary</h6>
                <p className="pt-0" style={{ fontSize: "11px" }}>Outline the key experiences of your career</p>
                <a href="#" className="px-2 py-1 btn uplaod_btn " >Upload File</a>
              </div>
            </div>  */}

                </>

                : ""
                : ""
                : ""

            }




          </div>
        </div>
        <div className="col-md-8 mt-4 py-4 pr-0">
          <div className="row px-3">
            <div className="col-md-12 shadow pb-3" style={{ borderRadius: "10px" }}>

              <div className="py-4">
                {
                  props.profileReducer.profile.videos && props.profileReducer.profile.videos.length > 0 ? props.profileReducer.profile.videos.map(vid => (
                    <div className="d-flex justify-content-center">
                      <ReactPlayer url={vid.vid_url !== null && vid.vid_url !== undefined ? vid.vid_url : ""} playing={true} controls className='react-player text-center' />
                    </div>
                  )) : <>
                    <h5 className="font-weight-bold" style={{ color: "#865DDD" }}>Upload your Video CV</h5>
                    <p className="pt-0" style={{ fontSize: "12px", color: "#707070" }}>Upload a recording while explaining your personal and professional information</p>
                  </>
                }
              </div>

            </div>
          </div>


          {/* <div className="shadow mt-4  pb-2  pt-3 " style={{ borderRadius: "10px" }}>
            <div className="row px-3">

              <div className="col-md-10 ">
                <h5 className="pb-3" style={{ color: "#865DDD" }} className="font-weight-bold">Headline</h5>


                <p className="pt-0" style={{ fontSize: "12px" }}> {props.profileReducer.profile.headline ? props.profileReducer.profile.headline !== null && props.profileReducer.profile.headline !== undefined ? props.profileReducer.profile.headline : <p className="pt-0" style={{ fontSize: "12px" }}>Enter your introductory bio and experiences to give a brief highlight of yourself to the clients</p> : ""}</p>
              </div>
              <div className="col-md-2 text-right ">
                <h4 ><Link to="/head"><a href="#" className="btn font-weight-bold" style={{ color: "#865DDD" }}>ADD +</a></Link></h4>
              </div>
            </div>
          </div> */}





          <div className="shadow mt-4  pb-2  pt-3 " style={{ borderRadius: "10px" }}>

            <div className="row px-3">

              <div className="col-md-10 ">
                <h5 className="pb-3" style={{ color: "#865DDD" }} className="font-weight-bold">Personal Details</h5>

                {props.profileReducer.profile.profile ?
                  <>
                    <h6>Name</h6>
                    <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.name !== null && props.profileReducer.profile.profile.name !== undefined ? titleCase(props.profileReducer.profile.profile.name) : "" : ""}</p>
                    {/* <h6>Last Name</h6>
                    <p>{props.auth.last_name!==null&&props.auth.last_name!==undefined?props.auth.last_name:""}</p> */}
                    <h6>Date of Birth</h6>
                    <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.dob !== null && props.profileReducer.profile.profile.dob !== undefined ? props.profileReducer.profile.profile.dob : "" : ""}</p>
                    <h6>Gender</h6>
                    <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.gender !== null && props.profileReducer.profile.profile.gender !== undefined ? props.profileReducer.profile.profile.gender : "" : ""}</p>
                    <h6>Phone Number</h6>
                    <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.num !== null && props.profileReducer.profile.profile.num !== undefined ? props.profileReducer.profile.profile.num : "" : ""}</p>
                   {
                     props.profileReducer.profile.profile&&props.profileReducer.profile.profile.country!==null&&
                     props.profileReducer.profile.profile.country!==undefined&&props.profileReducer.profile.profile.country!==""?
                    <>
                     <h6>Address</h6>
                     <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.city !== null && props.profileReducer.profile.profile.city !== undefined ? props.profileReducer.profile.profile.city : "" : ""} , {props.profileReducer.profile.profile ? props.profileReducer.profile.profile.country !== null && props.profileReducer.profile.profile.country !== undefined ? props.profileReducer.profile.profile.country : "" : ""}</p>
                     </>
                     :""
                   }
                   
                    {
                      props.profileReducer.profile.profile ? props.profileReducer.profile.profile.marital_status !== null && props.profileReducer.profile.profile.marital_status !== undefined ?
                        props.profileReducer.profile.profile.marital_status !== "" ?
                          <>
                            <h6>Marital Status</h6>
                            <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.marital_status !== null && props.profileReducer.profile.profile.marital_status !== undefined ? props.profileReducer.profile.profile.marital_status : "" : ""}</p>
                          </>
                          : ""
                        : ""
                        : ""
                    }
                    <h6>Nationality</h6>
                    <p>{props.profileReducer.profile.profile ? props.profileReducer.profile.profile.nationality !== null && props.profileReducer.profile.profile.nationality !== undefined ? props.profileReducer.profile.profile.nationality : "" : ""}</p>
                  </>
                  : <p className="pt-0" style={{ fontSize: "12px" }}>Outline the key highlights of your professional career to Employers</p>}
              </div>
              <div className="col-md-2 text-right">
                <h4 ><Link to="/personal"><a href="#" className="btn font-weight-bold" style={{ color: "#865DDD" }}>ADD +</a></Link></h4>
              </div>
            </div>
          </div>








          <div className="shadow mt-4  pb-2  pt-3 " style={{ borderRadius: "10px" }}>
            <div className="row px-3">
              <div className="col-md-10 ">
                <h5 className="pb-3 font-weight-bold" style={{ color: "#865DDD" }}>Professional Details</h5>

                {props.profileReducer.profile.proffession ?
                  <>
                    <h6>Total Work Experience</h6>
                    <p>{props.profileReducer.profile.proffession ? props.profileReducer.profile.proffession.exp_level !== null && props.profileReducer.profile.proffession.exp_level !== undefined ? props.profileReducer.profile.proffession.exp_level : "" : ""}</p>
                    <h6>Industry</h6>
                    <p>{props.profileReducer.profile.proffession ? props.profileReducer.profile.proffession.industry !== null && props.profileReducer.profile.proffession.industry !== undefined ? props.profileReducer.profile.proffession.industry : "" : ""}</p>
                    <h6>Career level</h6>
                    <p>{props.profileReducer.profile.proffession ? props.profileReducer.profile.proffession.functional_area !== null && props.profileReducer.profile.proffession.functional_area !== undefined ? props.profileReducer.profile.proffession.functional_area : "" : ""}</p>
                    <h6>Monthly Salary</h6>
                    <p>{props.profileReducer.profile.proffession ? props.profileReducer.profile.proffession.salary !== null && props.profileReducer.profile.proffession.salary !== undefined ? props.profileReducer.profile.proffession.salary : "" : ""}</p>
                  </>
                  : <p className="pt-0" style={{ fontSize: "12px" }}>Enter your professional information</p>}
              </div>
              <div className="col-md-2 text-right">
                <h4 ><Link to="/professional"><a href="#" className="btn font-weight-bold" style={{ color: "#865DDD" }}>ADD +</a></Link></h4>
              </div>
            </div>
          </div>






          <div className="shadow mt-4  pb-2  pt-3 " style={{ borderRadius: "10px" }}>
            <div className="row px-3">
              {/* <button onClick={()=>console.log(props.qualificationReducer.qualification.course_vise_education)}>kkk</button> */}
              <div className="col-md-10 ">
                <h5 className="pb-3 font-weight-bold" style={{ color: "#865DDD" }}>Qualification Details</h5>

                {props.profileReducer.profile.education ?
                  <>
                    <h6>Qualification</h6>
                    <p>{props.profileReducer.profile.education ? props.profileReducer.profile.education.qualification !== null && props.profileReducer.profile.education.qualification !== undefined ? props.profileReducer.profile.education.qualification : "" : ""}</p>
                    <h6>Course Type</h6>
                    <p>{props.profileReducer.profile.education ? props.profileReducer.profile.education.course !== null && props.profileReducer.profile.education.course !== undefined ? props.profileReducer.profile.education.course : "" : ""}</p>
                    <h6>Course specialization</h6>
                    <p>{props.profileReducer.profile.education ? props.profileReducer.profile.education.course_spec !== null && props.profileReducer.profile.education.course_spec !== undefined ? props.profileReducer.profile.education.course_spec : "" : ""}</p>
                    <h6>Institute Name</h6>
                    <p>{props.profileReducer.profile.education ? props.profileReducer.profile.education.institute_name !== null && props.profileReducer.profile.education.institute_name !== undefined ? props.profileReducer.profile.education.institute_name : "" : ""}</p>
                    <h6>Institute Location</h6>
                    <p>{props.profileReducer.profile.education ? props.profileReducer.profile.education.institute_location !== null && props.profileReducer.profile.education.institute_location !== undefined ? props.profileReducer.profile.education.institute_location : "" : ""}</p>


                  </>
                  : <p className="pt-0" style={{ fontSize: "12px" }}>Your education details helps us suggest you more suitable job opportunities</p>}
              </div>
              <div className="col-md-2 text-right">
                <h4 ><Link to="/qualification"><a href="#" className="btn font-weight-bold" style={{ color: "#865DDD" }}>ADD +</a></Link></h4>
              </div>
            </div>
          </div>





          <div className="shadow mt-4  pb-2  pt-3 " style={{ borderRadius: "10px" }}>
            <div className="row px-3">
              <div className="col-md-10 pb-4 ">
                <h5 className="pb-3 font-weight-bold" style={{ color: "#865DDD" }}>
                  Key Skills
                </h5>

                {props.profileReducer.profile.skills && props.profileReducer.profile.skills.length > 0 ? props.profileReducer.profile.skills.map(skill => (
                  <button className="btn btn-light mt-2 shadow btn-color-key mx-3" id="btnn">
                    {skill.sk_name !== null && skill.sk_name !== undefined ? skill.sk_name : ""}
                  </button>
                ))

                  : <p className="pt-0" style={{ fontSize: "12px" }}>
                    Enter keywords of skills that you are experienced in
                  </p>}

              </div>
              <div className="col-md-2 text-right">
                <h4>
                  <Link to="/add-skills">
                    <a
                      href="#"
                      className="btn font-weight-bold"
                      style={{ color: "#865DDD" }}
                    >
                      ADD +
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/* <Headlinee />
       <Personal />
     <Professional />
       

       <Qualification />
      <Skills /> */}
        </div>
      </div>

    </div>


  );
}


const mapStateToProps = state => ({
  auth: state.auth,
  profileReducer: state.profileReducer

})


const mapDispatchToProps = dispatch => ({

  // getProfessional: () => dispatch(getProfessional()),
  getProfile: (userId) => dispatch(getProfile(userId)),

})
export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
