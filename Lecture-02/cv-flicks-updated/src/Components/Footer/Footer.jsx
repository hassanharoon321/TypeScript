// import React from "react";
// import "./Footer.css";
// import GooglePlay from "../../Assests/google-play.svg";
// import AppStore from "../../Assests/app-store.svg";
// import facebook from "../../Assests/facebook-icon.svg";
// import instagram from "../../Assests/Instagram-icon.svg";
// import linkedIn from "../../Assests/linkedIn-icon.svg";
// import store from "../../Assests/store_logo.png";


// function Footer() {
//   return (

// <div class="container-fluid mt-3" style={{backgroundColor:"#330066"}}>
//       <div class="container">
//         <div class="row pt-5">
//             <div className="col-md-1"></div>
//           <div class="col-lg-2 col-md-4 col-4">
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">
//               Job Seekers
//             </h6>
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">
//               Popular Searches
//             </h6>
//             <ul class="list-group">
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Graphic Design Jobs in Karachi
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Vidio Editing Jobs in Karachi
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Fresher Job in Pakistan
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   IT Intern Jobs in Karachi
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   +9 more
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="col-lg-2 col-md-4 col-4">
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">
//               Locations
//             </h6>
//             <ul class="list-group">
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Jobs in Karach
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Jobs in Lahore
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Jobs in Islamabad
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Jobs in Quetta
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Jobs in Hydrabad
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   +2 more
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="col-lg-2 col-md-4 col-4">
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">Candidate</h6>
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">Job Seekers</h6>
//             <ul class="list-group">
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Home
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Dashboard
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   My Profile
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                  Career Tips
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   FAQ
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Moble App
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="col-lg-2 col-md-4 col-4">
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">Recruiters</h6>
//             <ul class="list-group">
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Register
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Login
//                 </a>
//               </li>
//               <li class="my-1">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Testimonials
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="col-lg-2 col-md-4 col-4">
//             <h6 class="text-white s4dFontSize12 s4dFontWeightRegular">Download Our App</h6>
//             <ul class="list-group">
//               <li class="my-1">
//                 <img src={store} style={{maxWidth:"150px", maxHeight:"150px"}} />
//               </li>
//               <li class="my-1 ml-2">
//                 <h5 href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                   Follow us on
//                 </h5>
//               </li>
//               <li class="my-1 ml-2">
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                 <i className="fab fa-facebook-square fa-3x px-2"></i>
//                 </a>
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                 <i className="fab fa-instagram fa-3x px-2"></i>
//                 </a>
//                 <a href="#" class="text-white s4dFontSize15 s4dFontWeightLight">
//                 <i className="fab fa-linkedin fa-3x px-2"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-1"></div>
          
//         </div>
//         <div className="row pb-5">
//             <div className="col-md-12 text-center ">
//           <hr className="text-white w-50 mx-auto"></hr>
//           <ul className="footer_list">
//               <li className="">
//                   <a className="text-white btn s4dFontSize12">
//                       Home
//                   </a>
//               </li>
//               <li>
//                   <a className="text-white btn s4dFontSize12">
//                       About Us
//                   </a>
//               </li>
//               <li>
//                   <a className="text-white btn s4dFontSize12">
//                       Contact Us
//                   </a>
//               </li>
//               <li>
//                   <a className="text-white btn s4dFontSize12">
//                       Feedbacks
//                   </a>
//               </li>
//           </ul>
//             </div>
//         </div>
//       </div>
//     </div>





//     // <div className="footer-home">
//     //   <div className="footer-one-main">
//     //     {/* Foot 1 Starts */}
//     //   <div className="job-seekers-foot">
//     //     <h3>Job Seekers</h3>
//     //     <p className="recr-top-main">Popular Searches</p>
//     //     <small className="recr-top-main">Graphic Design Job in Karachi</small>
//     //     <small className="recr-top-main">Video Editing Job in Karachi</small>
//     //     <small className="recr-top-main">Accountant Jobs</small>
//     //     <small className="recr-top-main">Fresher Jobs in Pakistan</small>
//     //     <small className="recr-top-main">IT Interns Jobs in Karachi</small>
//     //     <small className="recr-top-main">+9 more</small>
//     //   </div>
//     //   {/* Foot 1 Ends */}

//     //   {/* Foot 2 Starts */}
//     //   <div className="location">
//     //     <p className="location-recr-top">Locations</p>
//     //     <small className="recr-top-main">Jobs in Karachi</small>
//     //     <small className="recr-top-main">Jobs in Lahore</small>
//     //     <small className="recr-top-main">Jobs in Islamabad</small>
//     //     <small className="recr-top-main">Jobs in Quetta</small>
//     //     <small className="recr-top-main">Jobs in Peshawar</small>
//     //     <small className="recr-top-main">+2 more</small>
//     //   </div>
//     //   {/* Foot 2 Ends */}

//     //   {/* Foot 3 Starts */}
//     //   <div className="candidate">
//     //     <h3>Candidate</h3>
//     //     <p className="recr-top-main">Job Seekers</p>
//     //     <small className="recr-top-main">Home</small>
//     //     <small className="recr-top-main">Dashboard</small>
//     //     <small className="recr-top-main">My Profile</small>
//     //     <small className="recr-top-main">Carrer Tips</small>
//     //     <small className="recr-top-main">FAQ</small>
//     //     <small className="recr-top-main">Mobil App</small>
//     //   </div>
//     //   {/* Foot 3 Ends */}

//     //   {/* Foot 4 Starts */}
//     //   <div className="recruiters">
//     //     <p className="location-recr-top">Recruiters</p>
//     //     <small className="recr-top-main">Register</small>
//     //     <small className="recr-top-main">Login</small>
//     //     <small className="recr-top-main">Testimonials</small>
//     //   </div>
//     //   {/* Foot 4 Ends */}

//     //   {/* Footer 5 starts */}
//     //   <div className="download-app-follow">
//     //   <h3>Download our App</h3>
//     //   <img src={GooglePlay} className="google-play-btn"/>
//     //   <img src={AppStore} className="app-store-btn"/>
//     //   <h3 className="follow-us-on">Follow Us On</h3>
//     //   <div className="social-med-icons-foo">
//     //     <img src={facebook} width="30px"/>
//     //     <img src={instagram} width="30px" className="instagram-icon"/>
//     //     <img src={linkedIn} width="30px" className="linked-in-icon"/>
//     //   </div>
//     //   </div>
//     //   {/* Footer 5 ends */}
//     //   </div>
//     //   <div className="footer-nav">
//     //     <hr className="horizontal-code"/>
//     //     <div className="footer-nav-item">
//     //       <small>Home</small>
//     //       <small className="home-to-left-foot">About us</small>
//     //       <small className="home-to-left-foot">Contact us</small>
//     //       <small className="home-to-left-foot">Feedback</small>
//     //     </div>
//     //   </div>
//     // </div>
    
//   );
// }

// export default Footer;
