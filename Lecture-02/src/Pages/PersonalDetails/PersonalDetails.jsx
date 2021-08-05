import React from "react";
import "./PersonalDetails.css";
import UserIcon from "../../Assests/user-Profile-big.svg";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPersonal } from "../../actions/Personalaction";
import { connect } from "react-redux";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import { map } from "jquery";
import axios from "axios";
const config = require("../../helpers/config.json");

// React Select Starts
const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 3 ? (
        props.children
      ) : (
        <div style={{ margin: 15 }}>Max limit achieved</div>
      )}
    </components.Menu>
  );
};
// React Select Ends

function PersonalDetails(props) {
  const [dataStates, setDataStates] = useState("");
  const [imgData, setImgData] = useState(null);
  const [file, setFile] = useState(null);
  const [first_name, setFirst_name] = useState(
    props.personalReducer.personal.stored_values
      ? props.personalReducer.personal.stored_values.first_name !== null &&
        props.personalReducer.personal.stored_values.first_name !== undefined
        ? props.personalReducer.personal.stored_values.first_name
        : ""
      : ""
  );
  const [last_name, setLast_name] = useState(
    props.personalReducer.personal.stored_values
      ? props.personalReducer.personal.stored_values.last_name !== null &&
        props.personalReducer.personal.stored_values.last_name !== undefined
        ? props.personalReducer.personal.stored_values.last_name
        : ""
      : ""
  );
  const [email, setEmail] = useState(
    props.personalReducer.personal.stored_values
      ? props.personalReducer.personal.stored_values.email !== null &&
        props.personalReducer.personal.stored_values.email !== undefined
        ? props.personalReducer.personal.stored_values.email
        : ""
      : ""
  );
  const [num, setNum] = useState(
    props.personalReducer.personal.stored_values
      ? props.personalReducer.personal.stored_values.num !== null &&
        props.personalReducer.personal.stored_values.num !== undefined
        ? props.personalReducer.personal.stored_values.num
        : ""
      : ""
  );
  const [profession, setProfession] = useState(null);
  const [dob, setDob] = useState("");
  const [addr_1, setAddr_1] = useState(null);
  const [addr_2, setAddr_2] = useState(null);
  const [marital_stat, setMarital_stat] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [multiLanguage, setMultiLanguage] = useState([]);
  const [gender, setGender] = useState(null);
  const [postLoader, setPostLoader] = useState(true);
  const [checkId, setCheckId] = useState([]);
  const [simpleArray, setSimpleArray] = useState([]);
  const [lingo, setLingo] = useState([]);
  const [selectedCountryCities, setSelectedCountryCities] = useState([]);
  useEffect(() => {
    loadGetPersonal(localStorage.getItem("auth_id"));
    getAllStatesData()
  }, []);

  const loadGetPersonal = async (userId) => {
    await props.getPersonal(userId);
    return null;
  };

  const getAllStatesData = async()=>{
    const res = await axios.get("https://api.cvvlogs.com/cv-tube/api.v.1/user/cunt_city.php")
    setDataStates(res.data.data)
  }

  // console.log(dataStates)
  
  let handleMultiLanguage = (e) => {
    setMultiLanguage(Array.isArray(e) ? e.map((x) => x.label) : []);
    setCheckId(
      Array.isArray(e) ? e.map((x) => x.id).filter((f) => f != null) : []
    );
    setSimpleArray(
      props.personalReducer.personal.languages.map((e) => e.l_name)
    );
  };
  let handleTest = (e) => {
    console.log(e);
    //var language = e[e.length - 1];
    //console.log(language);
    var temp = [...lingo];
    if (temp.length == 3) {
      alert("you can add max 3 languages!");
      return;
    }
    var check = temp.filter((data) => data == e);
    if (check.length > 0) {
      return;
    }
    temp.push(e);
    setLingo(temp);
  };

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 6;

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("file: ", e.target.files);
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFile = async (e) => {
    setPostLoader(false);
    let formData = new FormData(); //formdata object
    formData.append("file", file);
    formData.append(
      "first_name",
      first_name !== null && first_name !== undefined && first_name !== ""
        ? first_name
        : props.personalReducer.personal.stored_values
        ? props.personalReducer.personal.stored_values.first_name !== null &&
          props.personalReducer.personal.stored_values.first_name !== undefined
          ? props.personalReducer.personal.stored_values.first_name
          : ""
        : ""
    );
    formData.append(
      "last_name",
      last_name !== null && last_name !== undefined && last_name !== ""
        ? last_name
        : props.personalReducer.personal.stored_values
        ? props.personalReducer.personal.stored_values.last_name !== null &&
          props.personalReducer.personal.stored_values.last_name !== undefined
          ? props.personalReducer.personal.stored_values.last_name
          : ""
        : ""
    );
    formData.append(
      "email",
      email !== null && email !== undefined && email !== ""
        ? email
        : props.personalReducer.personal.stored_values
        ? props.personalReducer.personal.stored_values.email !== null &&
          props.personalReducer.personal.stored_values.email !== undefined
          ? props.personalReducer.personal.stored_values.email
          : ""
        : ""
    );
    formData.append(
      "num",
      num !== null && num !== undefined && num !== ""
        ? `+1${num}`
        : props.personalReducer.personal.stored_values
        ? props.personalReducer.personal.stored_values.num !== null &&
          props.personalReducer.personal.stored_values.num !== undefined
          ? props.personalReducer.personal.stored_values.num
          : ""
        : ""
    );
    //  formData.append('profession', JSON.stringify(profession));
    formData.append("dob", dob);
    formData.append("gender", gender);
    //  formData.append('addr_1', JSON.stringify(addr_1));
    //  formData.append('addr_2', JSON.stringify(addr_2));
    formData.append("marital_stat", marital_stat);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("nationality", nationality);

    for (var i = 0; i < lingo.length; i++) {
      formData.append("lang[]", lingo[i]);
    }

    console.log("data", formData.get("file"));
    console.log("data", formData.get("first_name"));
    console.log("data", formData.get("last_name"));
    console.log("data", formData.get("email"));
    console.log("data", formData.get("num"));
    console.log("data", formData.get("dob"));
    console.log("data", formData.get("gender"));
    console.log("data", formData.get("marital_stat"));
    console.log("data", formData.get("country"));
    console.log("data", formData.get("city"));
    console.log("data", formData.get("nationality"));
    console.log("data", formData.get("lang[]"));

    fetch(`${config["baseUrl"]}/user/add_profile.php`, {
      method: "POST",
      body: formData,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Accept: "application/json",
        auth_id: localStorage.getItem("auth_id"),
      },
    })
      .then((response) => {
        console.log("res", response.json(), localStorage.getItem("auth_id"));
        window.location = "/professionaldetails";
        setPostLoader(true);
      })
      .catch((error) => {
        console.log(error);
        setPostLoader(true);
      });
    var someid = document.getElementById("persDet");
    console.log(someid);
  };

  const handleName = (e) => {
    setFirst_name(e.target.value);
  };

  const handleLastName = (e) => {
    setLast_name(e.target.value);
  };

  const handleDateInput = (e) => {
    setDob(e.target.value.toString());
  };

  const setEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setNum(e.target.value.toString());
  };

  const handleNationality = (e) => {
    setNationality(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);

    var selectedCountry = dataStates.country.filter(
      (c) => c.id === e.target.value
    );

    if (selectedCountry.length > 0) {
      var city = selectedCountry[0].city;
      console.log(city);
      setSelectedCountryCities(city);
    } else {
      setSelectedCountryCities([]);
    }
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleMartialStatus = (e) => {
    setMarital_stat(e.target.value);
  };

  const deleteKeySkills = (e) => {
    // multiLanguage.splice(e, 1);
    // setMultiLanguage([...multiLanguage]);
    var temp = [...lingo];
    var check = temp.filter((data) => data !== e);
    setLingo(check);
    // console.log("dddd",multiLanguage.splice(e,1))
    // skillsMain.splice(e, 1);
  };
  // const handleRadio = (e) => {
  //   setGender(e.target.value);
  // };

  return (
    <div className="container mt-5">
      {/* <button
        onClick={() =>
          console.log(
            props.personalReducer.personal.countries.filter(
              (c) => c.id == country
            )

           
          )
        }
      >
        Click me
      </button> */}
      {/* Row 1 for Heading Starts */}
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <h1 className="col-md-8 d-flex justify-content-center per-det-head">
          Personal Details
        </h1>
        <div className="col-md-2"></div>
      </div>
      {/* Row 1 for Heading Ends */}

      {/* Row 2 for Para Starts */}
      {/* <div className="row">
        <div className="col-md-2"></div>
        <p className="col-md-8 d-flex justify-content-center para-per-det">
          Provide your personal information
        </p>
        <div className="col-md-2"></div>
      </div> */}
      {/* Row 2 for Para Ends */}

      {/* Row 3 Para Starts */}
      <div className="row">
        <div className="col-md-1"></div>
        {/* Main Background of Input starts */}
        <div className="col-md-10 shadow p-5 per-det-main">
          {/* Input Row 0 Profile Pic Starts */}
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2">
              <input
                type="file"
                id="image"
                className="inputs"
                onChange={(e) => onChangePicture(e)}
                accept="image/png, image/gif, image/jpeg"
              />
              {file === null ? (
                <i className="fas fa-user fa-3x border rounded p-4"></i>
              ) : (
                <img
                  className="border p-3 rounded"
                  src={imgData}
                  style={{ objectFit: "cover" }}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
            <div className="col-md-5"></div>
          </div>
          {/* Input Row 0 Profile Pic Ends */}
          {/* Inputs Row 1 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="per-det-label mt-3">First name</label>
              <input
                onChange={(e) => setFirst_name(e.target.value)}
                type="text"
                defaultValue={
                  props.personalReducer.personal.stored_values
                    ? props.personalReducer.personal.stored_values
                        .first_name !== null &&
                      props.personalReducer.personal.stored_values
                        .first_name !== undefined
                      ? props.personalReducer.personal.stored_values.first_name
                      : ""
                    : ""
                }
                className="form-control per-det-input"
                // placeholder="Type your first name"
              />
            </div>
            <div className="col-md-2"></div>
            {/* Lastname Starts */}
            <div className="col-md-5">
              <label className="per-det-label mt-3">Last name</label>
              <input
                onChange={handleLastName}
                type="text"
                defaultValue={
                  props.personalReducer.personal.stored_values
                    ? props.personalReducer.personal.stored_values.last_name !==
                        null &&
                      props.personalReducer.personal.stored_values.last_name !==
                        undefined
                      ? props.personalReducer.personal.stored_values.last_name
                      : ""
                    : ""
                }
                className="form-control per-det-input"
                placeholder="Type your last name"
              />
            </div>
            {/* Last name ends */}
          </div>
          {/* Inputs Row 1 Ends */}

          {/* Inputs Row 2 Starts */}
          <div className="row">
            {/* languages Starts */}
            <div className="col-md-5 hjk">
              <label className="per-det-label mt-3">Languages</label>
              <select
                className="form-control"
                onChange={(e) => handleTest(e.target.value)}
              >
                <option selected>select</option>
                {props.personalReducer.personal.languages
                  ? props.personalReducer.personal.languages &&
                    props.personalReducer.personal.languages.length > 0
                    ? props.personalReducer.personal.languages.map((l) => (
                        <>
                          <option value={l.id} key={l.id}>
                            {l.label}
                          </option>
                          <br />
                        </>
                      ))
                    : ""
                  : ""}
              </select>
              {lingo.length > 0
                ? lingo.map((lang) => (
                    <>
                      <button
                        onClick={(e) => deleteKeySkills(lang)}
                        key={lang}
                        className="btn btn-light mt-2 btn-color-key mx-1"
                        id="btnn"
                        style={{ fontSize: "12px" }}
                      >
                        <span className="btn-label">
                          <i className="far fa-trash pr-1"></i>
                        </span>
                        {props.personalReducer.personal.languages &&
                        props.personalReducer.personal.languages.length > 0
                          ? props.personalReducer.personal.languages.filter(
                              (data) => data.id == lang
                            ).length > 0
                            ? props.personalReducer.personal.languages.filter(
                                (data) => data.id == lang
                              )[0].label
                            : ""
                          : ""}
                      </button>
                    </>
                  ))
                : ""}
            </div>
            {/* Languages ends */}
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <label className="per-det-label mt-3">Nationality</label>
              <select
                value={nationality}
                onChange={handleNationality}
                className="form-control per-det-input"
                aria-label="Default select example"
              >
                <option selected>Select Your Nationality</option>
                {props.personalReducer.personal.nationality &&
                props.personalReducer.personal.nationality.length > 0 ? (
                  props.personalReducer.personal.nationality.map((nat) => (
                    <option value={nat.id}>
                      {nat.nat_name !== null && nat.nat_name !== undefined
                        ? nat.nat_name
                        : ""}
                    </option>
                  ))
                ) : (
                  <option>Loading....</option>
                )}
              </select>
            </div>
          </div>
          {/* Inputs Row 2 Ends */}

          {/* Inputs Row 3 Starts */}
          <div className="row">
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            {/* States Starts */}
            <div className="col-md-5">
              <label className="per-det-label mt-3">State</label>
              {/* <button onClick={()=>console.log(dataStates)}>Click me</button> */}
              <select
                value={country}
                onChange={handleCountry}
                className="form-control per-det-input"
                aria-label="Default select example"
              >
                <option selected>Select Your States</option>
                {dataStates.country &&
                dataStates.country.length > 0
                  ? dataStates.country.map((con) => (
                      <option value={con.id}>
                        {con.co_name !== null && con.co_name !== undefined
                          ? con.co_name
                          : ""}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
            {/* States ends */}
            <div className="col-md-2"></div>
            {/* City Starts */}
            <div className="col-md-5">
              <label className="per-det-label mt-3">City</label>
              <select
                onChange={handleCity}
                value={city}
                className="form-control per-det-input"
                aria-label="Default select example"
                disabled={country ? false : true}
                style={{ background: "#fff" }}
              >
                <option selected>Select Your City</option>
                {selectedCountryCities && selectedCountryCities.length > 0
                  ? selectedCountryCities.map((f) => (
                      <option value={f.id}>{f.c_name}</option>
                    ))
                  : ""}
              </select>
            </div>
            {/* City ends */}
          </div>
          {/* Inputs Row 3 Ends */}

          {/* Inputs Row 4 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="per-det-label mt-3">Gender</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value={1}
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label per-det-input" for="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value={0}
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label per-det-input" for="female">
                  Female
                </label>
              </div>
            </div>
            <div className="col-md-2"></div>
            {/* Date of Bith starts */}
            <div className="col-md-5">
              <label className="per-det-label mt-3">Date of Birth</label>
              <input
                onChange={handleDateInput}
                value={dob}
                type="date"
                className="form-control per-det-input"
                placeholder="Enter your current functional area"
              />
            </div>
            {/* date of birth ends */}
          </div>
          {/* Inputs Row 4 Ends */}

          {/* Inputs Row 5 Starts */}
          <div className="row">
            <div className="col-md-5">
              <label className="per-det-label mt-3">Email Address</label>
              <input
                onChange={setEmailInput}
                defaultValue={
                  props.personalReducer.personal.stored_values
                    ? props.personalReducer.personal.stored_values.email !==
                        null &&
                      props.personalReducer.personal.stored_values.email !==
                        undefined
                      ? props.personalReducer.personal.stored_values.email
                      : ""
                    : ""
                }
                type="email"
                className="form-control per-det-input big-dog"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-md-2"></div>
            {/* Phone Number starts */}
            <div className="col-md-5">
              <label className="per-det-label mt-3">Phone number</label>
              <div className="d-flex">
                <h6 className="pr-3 pt-2" style={{ color: "#000" }}>
                  +1
                </h6>
                <input
                  onChange={handlePhoneNumber}
                  defaultValue={
                    props.personalReducer.personal.stored_values
                      ? props.personalReducer.personal.stored_values.num !==
                          null &&
                        props.personalReducer.personal.stored_values.num !==
                          undefined
                        ? props.personalReducer.personal.stored_values.num.replace(
                            "+1",
                            ""
                          )
                        : ""
                      : ""
                  }
                  type="text"
                  placeholder="Type your phone number"
                  className="form-control pl-2"
                  maxLength="10"
                  min="1"
                  max="10"
                  id="reg-form-all"
                  style={{
                    border: "1px solid #c8c8c8",
                    borderRadius: "5px",
                    color: "#000",
                  }}
                />
              </div>
            </div>
            {/* Phone number ends */}
          </div>
          {/* Inputs Row 5 Ends */}

          {/* Inputs Row 6 Starts */}
          <div className="row">
            {/* Martial Status Starts */}
            <div className="col-md-5">
              <label className="per-det-label mt-3">Marital Status</label>
              <select
                value={marital_stat}
                onChange={handleMartialStatus}
                className="form-control per-det-input"
                aria-label="Default select example"
              >
                <option value="-1">
                  Select your marital status (optional)
                </option>
                {props.personalReducer.personal.marital_statuses &&
                props.personalReducer.personal.marital_statuses.length > 0 ? (
                  props.personalReducer.personal.marital_statuses.map((mar) => (
                    <option value={mar.id}>
                      {mar.m_name !== null && mar.m_name !== undefined ? (
                        mar.m_name
                      ) : (
                        <div>
                          <div
                            className="spinner-border text-secondary"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      )}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>
            </div>
            {/* Martial Status Ends */}

            <div className="col-md-2"></div>
            <div className="col-md-5"></div>
          </div>
          {/* Inputs Row 6 Ends */}

          {/* Inputs Row 7 Button Starts */}
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center">
              {/* <Link to="/qualificationdetails"> */}

              <button
                onClick={() => handleFile()}
                disabled={
                  !dob === false &&
                  !file === false &&
                  !nationality === false &&
                  !country === false &&
                  !city === false &&
                  !lingo === false &&
                  !gender === false
                    ? false
                    : true
                }
                id="persDet"
                className="btn btn-warning per-det-btn"
              >
                Save and Continue
              </button>

              {/* </Link> */}
            </div>
            <div className="col-md-2"></div>
          </div>
          {/* Inputs Row 7 Button Ends */}
        </div>
        {/* Main Background of Input Ends */}
        <div className="col-md-1"></div>
      </div>
      {/* Row 3 Para Ends */}
      {props.personalReducer.loading == true ? <FullPageLoader /> : null}
      {postLoader == false ? <FullPageLoader /> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  registerReducer: state.registerReducer,
  personalReducer: state.personalReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getPersonal: (userId) => dispatch(getPersonal(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
