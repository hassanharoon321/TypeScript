// import logo from "./logo.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav2 from "./Nav2/Nav2";
import UserCard from "./User_card";
import Menu from "./Menu";
import ProfileStatus from "./Profile_status";
import FooterTwo from "./Footer/Footer2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function UpdatedProfile() {
  return (
    <>
   
      <Nav2 />
      <UserCard />
      {/* <Menu /> */}
      {/* <ProfileStatus /> */}
      <FooterTwo />
    </>
  );
}

export default UpdatedProfile;
