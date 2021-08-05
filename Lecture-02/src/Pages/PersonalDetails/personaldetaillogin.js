import React from "react";
import "./PersonalDetails.css";
import { getPersonalLogin } from "../../actions/personalloginAction"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FullPageLoader from '../../Components/fullpageloader/fullPageLoader';
import axios from "axios";
const config = require('../../helpers/config.json');

function PersonalDetailsLogin(props) {
  const [dataStates, setDataStates] = useState("");
  useEffect(async () => {
    //setLingo(personal.personal.stored_values.languages)
    loadGetPersonalLogin(localStorage.getItem("auth_id"))
    getAllStatesData()
  }, []);

  const loadGetPersonalLogin = async (userId) => {
    await props.getPersonalLogin(userId)
    return null;
  }

  const getAllStatesData = async()=>{
    const res = await axios.get("https://api.cvvlogs.com/cv-tube/api.v.1/user/cunt_city.php")
    setDataStates(res.data.data)
  }

  const [loader, setLoader] = useState(true)
  const [imgData, setImgData] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dp !== null && props.personalloginReducer.personal.stored_values.dp !== undefined ? props.personalloginReducer.personal.stored_values.dp : null : null);
  const [file, setFile] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dp !== null && props.personalloginReducer.personal.stored_values.dp !== undefined ? props.personalloginReducer.personal.stored_values.dp : null : null);
  const [first_name, setFirst_name] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.first_name !== null && props.personalloginReducer.personal.stored_values.first_name !== undefined ? props.personalloginReducer.personal.stored_values.first_name : "" : "");
  const [last_name, setLast_name] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.last_name !== null && props.personalloginReducer.personal.stored_values.last_name !== undefined ? props.personalloginReducer.personal.stored_values.last_name : "" : "");
  const [email, setEmail] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.email !== null && props.personalloginReducer.personal.stored_values.email !== undefined ? props.personalloginReducer.personal.stored_values.email : "" : "");
  const [num, setNum] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.num !== null && props.personalloginReducer.personal.stored_values.num !== undefined ? props.personalloginReducer.personal.stored_values.num : "" : "");
  const [profession, setProfession] = useState(null);
  const [dob, setDob] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dob !== null && props.personalloginReducer.personal.stored_values.dob !== undefined ? props.personalloginReducer.personal.stored_values.dob : "" : "");
  const [gender, setGender] = useState(null);
  const [addr_1, setAddr_1] = useState(null);
  const [addr_2, setAddr_2] = useState(null);
  const [marital_stat, setMarital_stat] = useState(null);
  const [country, setCountry] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.country ? props.personalloginReducer.personal.stored_values.country.id !== null && props.personalloginReducer.personal.stored_values.country.id !== undefined ? props.personalloginReducer.personal.stored_values.country.id : null : null : null);
  const [city, setCity] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.country ? props.personalloginReducer.personal.stored_values.country.cit ? props.personalloginReducer.personal.stored_values.country.cit.id !== null && props.personalloginReducer.personal.stored_values.country.cit.id !== undefined ? props.personalloginReducer.personal.stored_values.country.cit.id : null : null : null : null);
  const [nationality, setNationality] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.nationality ? props.personalloginReducer.personal.stored_values.nationality.id !== null && props.personalloginReducer.personal.stored_values.nationality.id !== undefined ? props.personalloginReducer.personal.stored_values.nationality.id : null : null : null);
  // const [lang, setLang] = useState([]);
  const [multiLanguage, setMultiLanguage] = useState([]);
  const [checkId, setCheckId] = useState([])
  const [simpleArray, setSimpleArray] = useState([])
  const [lan, setLan] = useState([])
  // const [gender, setGender] = useState(props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.gender !== null && props.personalloginReducer.personal.stored_values.gender !== undefined ? props.personalloginReducer.personal.stored_values.gender : 0 : 0);
  const [lingo, setLingo] = useState([])
  const [lingCounter, setLingCounter] = useState(0)
  const [selectedCountryCities, setSelectedCountryCities] = useState([]);

  let handleTest = (e) => {
    console.log(e);
    if (lingo.length == 0 && lingCounter == 0) {
      console.log("block 00000")
      var preIdList = []
      var previousData = [...props.personalloginReducer.personal.stored_values.languages]
      for (var x = 0; x < previousData.length; x++) {
        preIdList.push(previousData[x].id)
      }
      var temp = preIdList.filter(data => data == e)
      if (temp.length > 0) {
        return
      }
      console.log("lenn", preIdList.length)
      if (preIdList.length == 3) {
        alert('You can only enter three languages!')
        setLingo(preIdList)
      }
      else {
        preIdList.push(e)
        setLingo(preIdList)
      }

      setLingCounter(1)

    }
    else if (lingo.length == 0 && lingCounter == 1) {
      console.log("block 01111")
      var preIdList = []
      var len = e.length
      setLingo(preIdList)
      preIdList.push(e)

    }
    else if (lingo.length > 0) {
      console.log("block 1111");
      var tempp = [...lingo]
      console.log("temppp", tempp);
      var check = tempp.filter(data => data == e)
      if (check.length > 0) {
        return
      }
      else {
        if (tempp.length == 3) {
          alert('You can only enter three languages!')
          //setLingo(tempp)
        }
        else {
          tempp.push(e)
          setLingo(tempp)
        }

      }

    }

  };
  ////////////


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
    setLoader(false);
    let formData = new FormData(); //formdata object
    formData.append('file', file !== null && file !== undefined && file !== "" ? file : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dp !== null && props.personalloginReducer.personal.stored_values.dp !== undefined ? props.personalloginReducer.personal.stored_values.dp : null : null);
    formData.append('first_name', first_name !== null && first_name !== undefined && first_name !== "" ? first_name : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.first_name !== null && props.personalloginReducer.personal.stored_values.first_name !== undefined ? props.personalloginReducer.personal.stored_values.first_name : "" : "");
    formData.append('last_name', last_name !== null && last_name !== undefined && last_name !== "" ? last_name : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.last_name !== null && props.personalloginReducer.personal.stored_values.last_name !== undefined ? props.personalloginReducer.personal.stored_values.last_name : "" : "");
    formData.append('email', email !== null && email !== undefined && email !== "" ? email : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.email !== null && props.personalloginReducer.personal.stored_values.email !== undefined ? props.personalloginReducer.personal.stored_values.email : "" : "");
    formData.append('num', num !== null && num !== undefined && num !== "" ? `+1${num}` : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.num !== null && props.personalloginReducer.personal.stored_values.num !== undefined ? props.personalloginReducer.personal.stored_values.num : "" : "");
    formData.append('dob', dob !== null && dob !== undefined && dob !== "" ? dob : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dob !== null && props.personalloginReducer.personal.stored_values.dob !== undefined ? props.personalloginReducer.personal.stored_values.dob : "" : "");
    formData.append('gender', gender!==null&&gender!==undefined&&gender!==""?gender: props.personalloginReducer.personal.stored_values&&props.personalloginReducer.personal.stored_values.gender!==null&&
    props.personalloginReducer.personal.stored_values.gender!==undefined&&
    props.personalloginReducer.personal.stored_values.gender!==""?
    props.personalloginReducer.personal.stored_values.gender:null);
    formData.append('marital_stat', marital_stat);
    formData.append('country', country !== null && country !== undefined ? country : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.country ? props.personalloginReducer.personal.stored_values.country.id !== null && props.personalloginReducer.personal.stored_values.country.id !== undefined ? props.personalloginReducer.personal.stored_values.country.id : null : null : null);
    formData.append('city', city !== null && city !== undefined ? city : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.country ? props.personalloginReducer.personal.stored_values.country.cit ? props.personalloginReducer.personal.stored_values.country.cit.id !== null && props.personalloginReducer.personal.stored_values.country.cit.id !== undefined ? props.personalloginReducer.personal.stored_values.country.cit.id : null : null : null : null);
    formData.append('nationality', nationality !== null && nationality !== undefined ? nationality : props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.nationality ? props.personalloginReducer.personal.stored_values.nationality.id !== null && props.personalloginReducer.personal.stored_values.nationality.id !== undefined ? props.personalloginReducer.personal.stored_values.nationality.id : null : null : null);
    if (checkId && checkId.length > 0) {
      for (var i = 0; i < checkId.length; i++) {
        formData.append('lang[]', checkId[i]);
      }
    }
    if (lingCounter == 0) {
      var apiList = []
      var list = props.personalloginReducer.personal.stored_values.languages
      for (var i = 0; i < list.length; i++) {
        apiList.push(list[i].id)
      }
      for (var i = 0; i < apiList.length; i++) {
        formData.append('lang[]', apiList[i]);
      }


    }
    else if (lingCounter == 1) {
      for (var l = 0; l < lingo.length; l++) {
        formData.append('lang[]', lingo[l]);
      }
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

    fetch(`${config['baseUrl']}/user/add_profile.php`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        "auth_id": localStorage.getItem("auth_id")
      }

    })
      .then(response => {
        console.log("res", response.json());
        // if (response.status == 500) {
        //   alert("EMAIL OR NUMBER ALREADY REGISTERED")
        // }
        window.location = "/profile"
        setLoader(true)

      })
      .catch(error => {
        console.log(error);
        setLoader(true)
      })
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
    )
    if (selectedCountry.length > 0) {
      var city = selectedCountry[0].city
      console.log(city)
      setSelectedCountryCities(city)
    } else {
      setSelectedCountryCities([])
    }
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleMartialStatus = (e) => {
    setMarital_stat(e.target.value);
  };

  const handleRadio = (e) => {
    setGender(e.target.value);
  };

  const deleteKeySkills = (e) => {
    console.log("eeeeeee", e)
    if (lingCounter == 0) {
      var tempId = []
      var temp = [...props.personalloginReducer.personal.stored_values.languages]
      console.log("qqqqqqqq", temp);
      for (var n = 0; n < temp.length; n++) {
        tempId.push(temp[n].id)
      }
      var check = tempId.filter(data => data !== e)
      console.log("check", check);
      setLingo(check)
      setLingCounter(1)
    }
    else if (lingCounter == 1) {
      var temp = [...lingo]
      var check = temp.filter(data => data !== e)
      setLingo(check)
    }

  }
  return (
    <>
      <div className="container mt-5">

        {/* <button onClick={() => console.log(props.personalloginReducer.personal.stored_values)}>clivk</button> */}

        <div className="row mt-5">
          <div className="col-md-2"></div>
          <h1 className="col-md-8 d-flex justify-content-center per-det-head">
            Personal Details
          </h1>
          <div className="col-md-2"></div>
        </div>
        {/* <div className="row">
          <div className="col-md-2"></div>
          <p className="col-md-8 d-flex justify-content-center para-per-det">
            Provide your personal information
          </p>
          <div className="col-md-2"></div>
        </div> */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-md-1"></div>
            {/* starts */}
            <div className="col-md-10 shadow p-5 per-det-main">
              {props.personalloginReducer.personal && props.personalloginReducer.personal == null ?
                <>
                  <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "200px" }}>
                    <div className="spinner-border text-secondary" role="status">
                      <span className="sr-only">No Jobs</span>
                    </div>
                  </div>
                </>
                :
                <>
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
                      {imgData === null ? (
                        <img
                          style={{ objectFit: "cover" }}
                          className="border p-3 rounded"
                          width="100%"
                          height="100%"
                          src={props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dp !== null && props.personalloginReducer.personal.stored_values.dp !== undefined ? props.personalloginReducer.personal.stored_values.dp : "" : ""} />
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
                  <div className="row">
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">First name</label>
                      <input
                        row="1"
                        col="1"
                        onChange={(e) => setFirst_name(e.target.value)}
                        id="inp"
                        type="text"
                        defaultValue={props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.first_name !== null && props.personalloginReducer.personal.stored_values.first_name !== undefined ? props.personalloginReducer.personal.stored_values.first_name : "" : ""}
                        className="form-control per-det-input"
                        placeholder="Type your first name"
                        required
                      />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Last name</label>
                      <input
                        onChange={handleLastName}
                        type="text"
                        defaultValue={props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.last_name !== null && props.personalloginReducer.personal.stored_values.last_name !== undefined ? props.personalloginReducer.personal.stored_values.last_name : "" : ""}
                        className="form-control per-det-input"
                        placeholder="Type your last name"
                        required
                      />
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-5 hjk">
                      <label className="per-det-label mt-3">Languages</label>
                      <select
                        className="form-control" onChange={(e) => handleTest(e.target.value)}>
                        <option selected>select</option>
                        {props.personalloginReducer.personal ?
                          (props.personalloginReducer.personal.languages && props.personalloginReducer.personal.languages.length > 0
                            ? props.personalloginReducer.personal.languages.map(l => (
                              <>

                                <option
                                  value={l.id}
                                  key={l.id}>{l.label}</option>
                                <br /></>
                            )) : "") : ""

                        }
                      </select>

                      {props.personalloginReducer.personal.stored_values && lingo.length < 1 ? (
                        lingCounter == 0 ?
                          props.personalloginReducer.personal.stored_values.languages.map((lang) => (
                            <button
                              onClick={() => deleteKeySkills(lang.id)}
                              // key={lang.id}
                              className="btn btn-light mt-2 btn-color-key mx-1"
                              id="btnn"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="btn-label">
                                <i className="far fa-trash pr-1"></i>
                              </span>

                              {lang !== null && lang !== undefined ? lang.label : ""}
                            </button>
                          )) : <b>add languages</b>
                      )
                        : lingo.map((lang) => (
                          <button
                            onClick={() => deleteKeySkills(lang)}
                            // key={lang.id}
                            className="btn btn-light mt-2 btn-color-key mx-1"
                            id="btnn"
                            style={{ fontSize: "12px" }}
                          >
                            <span className="btn-label">
                              <i className="far fa-trash pr-1"></i>
                            </span>



                            {props.personalloginReducer.personal.languages && props.personalloginReducer.personal.languages.length > 0 ?
                              (props.personalloginReducer.personal.languages.filter(data => data.id == lang).length > 0 ? props.personalloginReducer.personal.languages.filter(data => data.id == lang)[0].label : "")
                              : ""}
                            {/* {lang !== null && lang !== undefined ? lang : ""} */}
                          </button>
                        ))

                      }

                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Nationality</label>
                      <select
                        onChange={handleNationality}
                        className="form-control"
                        aria-label="Default select example"
                        required
                      >
                        <option selected >{props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.nationality ? props.personalloginReducer.personal.stored_values.nationality.nat_name !== null && props.personalloginReducer.personal.stored_values.nationality.nat_name !== undefined ? props.personalloginReducer.personal.stored_values.nationality.nat_name : "Select Your Nationality" : "Select Your Nationality" : "Select Your Nationality"}</option>
                        {props.personalloginReducer.personal.nationality &&
                          props.personalloginReducer.personal.nationality.length > 0 ? (
                          props.personalloginReducer.personal.nationality.map((nat) => (
                            <option value={nat.id}>
                              {nat.nat_name !== null && nat.nat_name !== undefined ? (
                                nat.nat_name
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
                          <div>
                            <div className="spinner-border text-secondary" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        )}
                      </select>
                    </div>
                  </div>
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  {/* heere */}
                  <div className="row">
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">State</label>
                      <select
                        value={country}
                        onChange={handleCountry}
                        className="form-control per-det-input"
                        aria-label="Default select example"
                        required
                      >
                        <option selected>{props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.country ? props.personalloginReducer.personal.stored_values.country.co_name !== null && props.personalloginReducer.personal.stored_values.country.co_name !== undefined ? props.personalloginReducer.personal.stored_values.country.co_name : "Select Your States" : "Select Your States" : "Select Your States"}</option>
                        {dataStates.country &&
                          dataStates.country.length > 0 ? (
                          dataStates.country.map((con) => (
                            <option value={con.id}>
                              {con.co_name !== null && con.co_name !== undefined ? (
                                con.co_name
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
                          <div>
                            <div className="spinner-border text-secondary" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        )}
                      </select>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">City</label>
                      <select
                        onChange={handleCity}
                        value={city}
                        className="form-control per-det-input"
                        aria-label="Default select example"
                        required
                      >
                        <option selected>{props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.country ? props.personalloginReducer.personal.stored_values.country.cit ? props.personalloginReducer.personal.stored_values.country.cit.c_name !== null && props.personalloginReducer.personal.stored_values.country.cit.c_name !== undefined ? props.personalloginReducer.personal.stored_values.country.cit.c_name : "Select Your City" : "Select Your City" : "Select Your City" : "Select Your City"}</option>
                        {selectedCountryCities && selectedCountryCities.length > 0 ?
                          selectedCountryCities.map(f =>
                            <option value={f.id}>{f.c_name}</option>
                          )

                          : ""}
                      </select>
                    </div>


                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Gender</label>
                      <br />
                      <div className="form-check form-check-inline">
                        {
                         props.personalloginReducer.personal.stored_values&&props.personalloginReducer.personal.stored_values.gender!==null&&
                         props.personalloginReducer.personal.stored_values.gender!==undefined&&
                         props.personalloginReducer.personal.stored_values.gender!==""&&
                         props.personalloginReducer.personal.stored_values.gender==1?
                         <input
                         className="form-check-input"
                         type="radio"
                         id="male"
                         value={1}
                         checked
                         name="gender"
                         onChange={e=>setGender(e.target.value)}
                       />
                       :
                       <input
                       className="form-check-input"
                       type="radio"
                       id="male"
                       value={1}
                       name="gender"
                       onChange={e=>setGender(e.target.value)}
                     />

                        }
  
                        <label className="form-check-label per-det-input" for="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                      {
                         props.personalloginReducer.personal.stored_values&&props.personalloginReducer.personal.stored_values.gender!==null&&
                         props.personalloginReducer.personal.stored_values.gender!==undefined&&
                         props.personalloginReducer.personal.stored_values.gender!==""&&
                         props.personalloginReducer.personal.stored_values.gender==0?
                         <input
                         className="form-check-input"
                         type="radio"
                         id="female"
                         value={0}
                         checked
                         name="gender"
                         onChange={e=>setGender(e.target.value)}
                       />
                       :
                       <input
                       className="form-check-input"
                       type="radio"
                       id="female"
                       value={0}
                       name="gender"
                       onChange={e=>setGender(e.target.value)}
                     />

                        }
                      
                        <label className="form-check-label per-det-input" for="female">
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                    {/* here */}
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Date of Birth</label>
                      <input
                        onChange={handleDateInput}
                        defaultValue={props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.dob !== null && props.personalloginReducer.personal.stored_values.dob !== undefined ? props.personalloginReducer.personal.stored_values.dob : "" : ""}
                        type="date"
                        className="form-control per-det-input"
                        placeholder="Enter your current functional area"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Email Address</label>
                      <input
                        onChange={setEmailInput}
                        defaultValue={props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.email !== null && props.personalloginReducer.personal.stored_values.email !== undefined ? props.personalloginReducer.personal.stored_values.email : "" : ""}
                        type="email"
                        className="form-control per-det-input"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Phone number</label>
                      <div className="d-flex">
                        <h6 className="pr-3 pt-2" style={{ color: "#000" }}>
                          +1
                        </h6>
                        <input
                          onChange={handlePhoneNumber}
                          defaultValue={props.personalloginReducer.personal.stored_values ? props.personalloginReducer.personal.stored_values.num !== null && props.personalloginReducer.personal.stored_values.num !== undefined ? props.personalloginReducer.personal.stored_values.num.replace("+1", "") : "" : ""}
                          type="text"
                          placeholder="Type your phone number"
                          className="form-control pl-2"
                          maxLength="10"
                          min="1"
                          max="10"
                          id="reg-form-all"
                          style={{ border: "1px solid #c8c8c8", borderRadius: "5px", color: "#000" }}
                        />
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    {/* here */}
                    <div className="col-md-5">
                      <label className="per-det-label mt-3">Marital Status</label>
                      <select
                        value={marital_stat}
                        onChange={handleMartialStatus}
                        className="form-control per-det-input"
                        aria-label="Default select example"
                        required
                      >
                        <option selected>Select your marital status (optional)</option>
                        {props.personalloginReducer.personal.marital_statuses &&
                          props.personalloginReducer.personal.marital_statuses.length > 0 ? (
                          props.personalloginReducer.personal.marital_statuses.map((mar) => (
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
                          <div>
                            <div className="spinner-border text-secondary" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        )}
                      </select>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5"></div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex justify-content-center">
                      <input
                        onClick={() => handleFile()}
                        // disabled={
                        // !first_name === false &&
                        //   !last_name === false &&
                        //   !dob === false &&
                        //   !email === false &&
                        //   !num === false &&
                        //   !file === false &&
                        //   !nationality === false &&
                        //   !country === false &&
                        //   !city === false &&
                        // !multiLanguage === false
                        // !gender === false
                        // ? false
                        // : true
                        // }
                        type="submit"
                        value="Save Changes"
                        id="persDet"
                        className="btn btn-warning per-det-btn"
                      />

                    </div>
                    <div className="col-md-2"></div>
                  </div>

                </>
              }
            </div>
          </div>
          {/* Ends */}
          <div className="col-md-1"></div>
        </form>
        {props.personalloginReducer.loader == false ? <FullPageLoader /> : null}
        {loader == true ? null : <FullPageLoader />}
      </div>
    </>

  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  personalloginReducer: state.personalloginReducer,
  // profileReducer: state.profileReducer

}

)


const mapDispatchToProps = dispatch => ({
  // getProfile:(userId)=>dispatch(getProfile(userId)),
  getPersonalLogin: (userId) => dispatch(getPersonalLogin(userId)),
  // getPersonal: () => dispatch(getPersonal()),

})
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetailsLogin)