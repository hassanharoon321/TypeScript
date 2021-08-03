import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import TopManagment from "../Pages/TopManagment/TopManagment";
import JobsDetail from "../Pages/JobsDetail/JobsDetail";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import SearchJobs from "../Pages/SearchJobs/SearchJobs";
import SearchResults from "../Pages/SearchResults/SearchResults";
import GetPremium from "../Pages/GetPremium/GetPremium";
import Dashboard from "../Pages/Dashboard/Dashboard";
import JobAlert from "../Pages/JobAlert/JobAlert";
import ProfileViewed from "../Pages/ProfileViewed/ProfileViewed";
import UploadCv from "../Pages/UploadCV/UploadCv";
import AppliedSuccess from "../Pages/AppliedSuccess/AppliedSuccess";
import TermsandCondition from "../Pages/TermsandConditions/TermsandCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import CvShortListed from "../Pages/CvShortListed/CvShortListed";
import UpdatedProfile from "../Components/updatedprofile";
import Headlines from "../Pages/Headlines/Headlines";
import PersonalDetails from "../Pages/PersonalDetails/PersonalDetails";
import ProfessionalDetails from "../Pages/ProfessionalDetails/ProfessionalDetails";
import QualifcicationDetails from "../Pages/QualificationDetails/QualifcicationDetails";
import KeySkills from "../Pages/KeySkills/KeySkills";
import Search from "../Pages/search/search";
import SearchLoginJobs from "../Pages/SearchJobs/SearchLoginJobs";
import Webcam2 from "../Components/WebCam/Webcam2";
import HeadlinesLogin from "../Pages/Headlines/headlinelogin";
import JobsByIndustry from "../Pages/JobsByIndustry/JobsByIndustry";
import SearchResultsLogin from "../Pages/SearchResults/SearchResultsLogin";
import PersonalDetailsLogin from "../Pages/PersonalDetails/personaldetaillogin";
import ProfessionalDetailsLogin from "../Pages/ProfessionalDetails/professionallogin";
import QualifcicationDetailsLogin from "../Pages/QualificationDetails/qualificationlogin";
import TopManagmentLogin from "../Pages/TopManagment/TopManagementLogin";
import JobsDetailLogin from "../Pages/JobsDetail/jobdetailslogin";
import ViewAllRecentJob from "../Pages/TopManagment/viewallRecentJob";
import JobsByIndustrySliderPage from "../Pages/JobsByIndustrySliderPage/JobsByIndustrySliderPage";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Otp from "../Components/Otp/Otp";
// import LinkedInPage from '../getURL';
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import Tips from "../Pages/Tips/Tips";
import KeySkillsLogin from "../Pages/KeySkills/KeySkillsLogin";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import JobsLogin from "../Pages/Jobs/JobsLogin";
import WhatWeDoLogin from "../Pages/WhatWeDo/WhatWeDoLogin";
import UploadCvTwo from "../Pages/UploadCV/UploadCvTwo"
import JobsByIndustrySliderPageLogin from "../Pages/JobsByIndustrySliderPage/JobsByIndustrySliderPageLogin";
import TopManagmentLogin2 from "../Pages/TopManagment/TopManagmentLogin2";
import TopManagmentLoginAfter from "../Pages/TopManagment/TopManagmentLoginAfter";
import Messaging from "../Pages/Messaging/Message";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ContactUsLogin from "../Pages/ContactUs/ContactUsLogin";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AboutUsLogin from "../Pages/AboutUs/AboutUsLogin";
import LoginWithLinkedinTest from "../Pages/testLin";
import OnPageLoadModal from "../Components/OnPageLoadModal";

function Routing() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={OnPageLoadModal} />
          <Route path="/home" exact component={Home} />
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route path="/otp" exact component={Otp} />
          <Route path="/jobsbyindustry" exact component={JobsByIndustry} />
          <Route path="/head" exact component={HeadlinesLogin} />
          <Route path="/viewallrecent" exact component={ViewAllRecentJob} />
          <Route path="/profile" exact component={UpdatedProfile} />
          <Route path="/jobdetaillog" exact component={JobsDetailLogin} />
          <Route path="/topmanagement" exact component={TopManagmentLogin} />
          <Route path="/topmanagementlogin2" exact component={TopManagmentLogin2} />
          <Route path="/topmanagmentloginafter" exact component={TopManagmentLoginAfter} />
          <Route
            path="/qualification"
            exact
            component={QualifcicationDetailsLogin}
          />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/top-managment" exact component={TopManagment} />
          <Route
            path="/professional"
            exact
            component={ProfessionalDetailsLogin}
          />
          <Route path="/job-details" exact component={JobsDetail} />
          <Route path="/company-profile" exact component={CompanyProfile} />
          <Route path="/search-jobs" exact component={SearchJobs} />
          <Route path="/search-results" exact component={SearchResultsLogin} />
          <Route path="/search-result" exact component={SearchResults} />
          <Route path="/get-premium" exact component={GetPremium} />
          <Route path="/personal" exact component={PersonalDetailsLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/create-job-alert" exact component={JobAlert} />
          <Route path="/profile-viewed" exact component={ProfileViewed} />
          <Route path="/upload-cv" exact component={UploadCv} />
          <Route path="/save-cv" exact component={UploadCvTwo} />
          <Route path="/applied-success" exact component={AppliedSuccess} />
          <Route
            path="/terms-and-condition"
            exact
            component={TermsandCondition}
          />
          <Route path="/search_login" exact component={SearchLoginJobs} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/cv-shortlisted" exact component={CvShortListed} />
          <Route path="/headlines" exact component={Headlines} />
          <Route path="/personaldetails" exact component={PersonalDetails} />
          <Route
            path="/professionaldetails"
            exact
            component={ProfessionalDetails}
          />
          <Route path="/webcam" exact component={Webcam2} />
          <Route
            path="/qualificationdetails"
            exact
            component={QualifcicationDetails}
          />
          <Route path="/skills" exact component={KeySkills} />
          <Route path="/search" exact component={Search} />
          <Route path="/search" exact component={Search} />
          <Route
            path="/jobsbyindustrypage"
            exact
            component={JobsByIndustrySliderPage}
          />
          <Route
            path="/jobsbyindustrypagelogin"
            exact
            component={JobsByIndustrySliderPageLogin}
          />
          <Route path="/resetpassword" exact component={ResetPassword} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/add-skills" exact component={KeySkillsLogin} />
          <Route path="/whatwedo" exact component={WhatWeDo} />
          <Route path="/jobs-login" exact component={JobsLogin} />
          <Route path="/whatwedologin" exact component={WhatWeDoLogin} />
          <Route path="/message" exact component={Messaging} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/contact-us-login" exact component={ContactUsLogin} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/about-us-login" exact component={AboutUsLogin} />
          <Route path="/test" exact component={LoginWithLinkedinTest} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routing;
