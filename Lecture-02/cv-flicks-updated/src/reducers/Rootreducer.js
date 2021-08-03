import { combineReducers } from 'redux';
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import addSkillReducer from "../reducers/add_skill_getReducer"
import personalReducer from "../reducers/Personalreducer"
import professionalReducer from "../reducers/professionalreducer"
import qualificationReducer from "../reducers/qualificationreducer"
import headlineReducer from "../reducers/Headlinereducer"
import authReducer from './authReducer';
import homejobReducer from "./homejobReducer"
import registerReducer from "./registerReducer"
import dashboardReducer from "./dashboardReducer"
import dashboardjobReducer from "./dashboardjobReducer"
import alljobsReducer from "./alljobReducer"
import pricingReducer from "./pricingReducer"
import profileReducer from "./profileReducer"
import profileViewedReducer from "./profile_viewedReducer"
import CompanyProfiledReducer from "./company_profileReducer"
import cvShortlisteddReducer from "./cv_shortlistedReducer"
import SearchReducer from "./SearchReducer"
import SearchLoginReducer from "./SearchLoginReducer"
import jobdetailReducer from "./jobdetailReducer"
import dashboardLoginReducer from "./dashboardloginReducer"
import logoutReducer from "./logoutReducer"
import jobIndustryReducer from "./job_industryReducer"
import uploadCvVideoReducer from "./uploadCvVideoReducer"
import professionalloginReducer from "./professionalloginReducer"
import selectVideoReducer from "./select_videoReducer"
import qualificationloginReducer from "./qualificationloginReducer"
import personalloginReducer from "./personalloginReducer"
import topmanagementReducer from "./topmanagementReducer"
import jobdetailloginReducer from "./jobdetailloginReducer"
import jobAlertReducer from "./job_alertReducer"
import forgetPasswordReducer from "./forget_passwordReducer"
import resetReducer from "./resetPassReducer"
import otpReducer from "./otpReducer"
import { loadingBarReducer } from 'react-redux-loading-bar'
import keySkillsLogin from "./key_skills_loginReducer"
import headlineloginReducer from "./headlineloginReducer"
import whatWeDoReducer from "./whatWeDoReducer"
import contactUsLoginReducer from "./contactUsLoginReducer"
import homeVideorReducer from "./HomeVideo"


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const mainReducer = combineReducers({
    auth: authReducer,
    professionalloginReducer: professionalloginReducer,
    headlineloginReducer: headlineloginReducer,
    loadingBar: loadingBarReducer,
    otpReducer: otpReducer,
    resetReducer: resetReducer,
    jobdetailloginReducer: jobdetailloginReducer,
    topmanagementReducer: topmanagementReducer,
    personalloginReducer: personalloginReducer,
    qualificationloginReducer: qualificationloginReducer,
    jobdetailReducer: jobdetailReducer,
    dashboardLoginReducer: dashboardLoginReducer,
    pricingReducer: pricingReducer,
    dashboardjobReducer: dashboardjobReducer,
    logoutReducer: logoutReducer,
    alljobsReducer: alljobsReducer,
    registerReducer: registerReducer,
    dashboardReducer: dashboardReducer,
    homejobReducer: homejobReducer,
    addSkillReducer: addSkillReducer,
    personalReducer: personalReducer,
    professionalReducer: professionalReducer,
    qualificationReducer: qualificationReducer,
    headlineReducer: headlineReducer,
    profileReducer: profileReducer,
    profileViewedReducer: profileViewedReducer,
    CompanyProfiledReducer: CompanyProfiledReducer,
    cvShortlisteddReducer: cvShortlisteddReducer,
    SearchReducer: SearchReducer,
    SearchLoginReducer: SearchLoginReducer,
    jobIndustryReducer: jobIndustryReducer,
    uploadCvVideoReducer: uploadCvVideoReducer,
    selectVideoReducer: selectVideoReducer,
    jobAlertReducer: jobAlertReducer,
    keySkillsLogin: keySkillsLogin,
    whatWeDoReducer:whatWeDoReducer,
    contactUsLoginReducer:contactUsLoginReducer,
    homeVideorReducer:homeVideorReducer,
    forgetPasswordReducer: forgetPasswordReducer,
    
})

export default persistReducer(persistConfig, mainReducer);
