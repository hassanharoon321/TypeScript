
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Personal from "./Personal"
// // import PersonalDetails from './PersonalDetails';
// import Skills from "./Skills"
// import Professional from './Professional';
// import Qualification from "./Qualification"
// import Headlinee from "./Headline"
// import {getProfile} from "../actions/profileAction"
// import  { useState, useEffect } from 'react';
// import { connect } from 'react-redux';

// const ProfileStatus=(props)=> {
//   useEffect(() => {
//     loadGetPersonal(props.auth.auth_id)

// });
// const loadGetPersonal = async (userId) => {

//     await props.getProfile(userId)
//     return null;

// }
//   return (
// <div className="container mb-5">
//   <div className="row">
//       <div className="col-md-4 ">
//           <div className="shadow mt-5 py-4 px-4" style={{borderRadius:"10px"}}>
//         <div className="row">
//     <div className="col-md-8 pr-0">
//         <h3 className="" style={{color:"#0000cc"}}><b>{props.profileReducer.profile.profile?props.profileReducer.profile.profile.percentage!==null&&props.profileReducer.profile.profile.percentage!==undefined?props.profileReducer.profile.profile.percentage:"":""}<small className="font-weight-bold" style={{fontSize:"15px"}}>% Profile Complete</small></b></h3>
//     </div>
//     <div className="col-md-4 pl-0 pt-2 text-right">
// <small className="text_gray">Updated Today</small>
//     </div>
//         </div>
//         <div className="row">
//             <div className="col-md-12">
//             <progress className="w-100" value = {props.profileReducer.profile.profile?props.profileReducer.profile.profile.percentage!==null&&props.profileReducer.profile.profile.percentage!==undefined?props.profileReducer.profile.profile.percentage:"":""} max = "100" />
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-md-12 pt-3">
//             <h6 className="mb-0">5 Pending Actions</h6>
//             <p className="pt-0" style={{fontSize:"11px"}}>Here is a list of pending actions missing in your profile. Add these to reach a
// 100% completion score!
// </p>
//             </div>
//         </div>
//         <div className="row px-3">
//             <div className="col-md-12 text-center shadow  pb-3  pt-4 " style={{borderRadius:"10px"}}>
//             <h6 className="">Upload your CV</h6>
//             <p className="pt-0" style={{fontSize:"11px"}}>Upload your CV for greater visibility to your clients!</p>
//             <a href="#" className="px-2 py-1 btn uplaod_btn " >Upload File</a>
//             </div>
//         </div>
//         <div className="row px-3">
//             <div className="col-md-12 text-center shadow mt-4 pb-3  pt-4 " style={{borderRadius:"10px"}}>
//             <h6 className="">Upload your Photo</h6>
//             <p className="pt-0" style={{fontSize:"11px"}}>Upload your photo for a better personal relation
// with your clients!</p>
//             <a href="#" className="px-2 py-1 btn uplaod_btn " >Upload File</a>
//             </div>
//         </div>
//         <div className="row px-3">
//             <div className="col-md-12 text-center shadow mt-4 pb-3  pt-4 " style={{borderRadius:"10px"}}>
//             <h6 className="">Profile Summary</h6>
//             <p className="pt-0" style={{fontSize:"11px"}}>Outline the key experiences of your career</p>
//             <a href="#" className="px-2 py-1 btn uplaod_btn " >Upload File</a>
//             </div>
//         </div>
//         </div>
//       </div>
//       <div className="col-md-8 mt-4 py-4">
//       <div className="row px-3">
//             <div className="col-md-12 shadow  pb-3  pt-4 " style={{borderRadius:"10px"}}>
//             <h4 className="" style={{color:"#0000cc"}}>Upload your Video CV</h4>
//             <p className="pt-0" style={{fontSize:"12px"}}>Upload a recording while explaining your personal and professional information</p>
//             <div className="text-center py-4">
            

//             {
//       props.profileReducer.profile.videos&&props.profileReducer.profile.videos.length>0?props.profileReducer.profile.videos.map(vid=>(
// <iframe className="" width="100%" height="315" src={vid.vid_url!==null&&vid.vid_url!==undefined?vid.vid_url:""} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

//       )):<iframe className="" width="100%" height="315" src="https://www.youtube.com/embed/c_PZTAW5piQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     }
//             </div>
           
//             </div>
//         </div>







//       {/* <Headlinee />
//        <Personal />
//      <Professional />
       

//        <Qualification />
//       <Skills /> */}
//       </div>
//   </div>
// </div>

   
//   );
// }

// const mapStateToProps = state => ({
//   auth:state.auth,
//   profileReducer: state.profileReducer

// })


// const mapDispatchToProps = dispatch => ({
 
//   // getProfessional: () => dispatch(getProfessional()),
//   getProfile:(userId)=>dispatch(getProfile(userId)),
  
// })
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatus)
