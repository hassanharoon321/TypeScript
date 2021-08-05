import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./KeySkills.css";
import { getSkill, createSkill } from "../../actions/add-skill_getAction";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const Menu = (props) => {
  
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 6 ? (
        props.children
      ) : (
        <div style={{ margin: 15 }}>Max limit achieved</div>
      )}
    </components.Menu>
  );
};

function KeySkills(props) {
  const [multiLanguage, setMultiLanguage] = useState([]);
  const [checkId, setCheckId] = useState([]);
  const [simpleArray, setSimpleArray] = useState([]);
  const [checkStrings, setCheckStrings] = useState([]);
  const [skillsMain, setSkillsMain] = useState([]);
  const [skillSet,setSkillSet]=useState([])
  useEffect(() => {
    loadGetSkill(localStorage.getItem("auth_id"));

    if (
      props.addSkillReducer.addSkill.stored_values &&
      props.addSkillReducer.addSkill.stored_values.length > 0 &&
      props.addSkillReducer.addSkill.stored_values !== null
    ) {
      setSkillsMain(
        props.addSkillReducer.addSkill.stored_values.forEach((e) => {
          if (!multiLanguage.some((a) => a == e.name)) {
            multiLanguage.concat(e.name);
            checkId.concat(e.id);
          }
        })
      );
    }
  });
  const loadGetSkill = async (userId) => {
    await props.getSkill(userId);
    return null;
  };

  let handleMultiLanguage = (e) => {
    setMultiLanguage(Array.isArray(e) ? e.map((x) => x.label) : []);
    setCheckId(
      Array.isArray(e) ? e.map((x) => x.id).filter((f) => f != null) : []
    );
    setSimpleArray(props.addSkillReducer.addSkill.skills.map((e) => e.name));
    setCheckStrings(
      Array.isArray(e)
        ? e.map((x) => x.label).filter((f) => !simpleArray.includes(f))
        : []
    );
  };
  
  let handleTest = (e) => {
    console.log("eeeeeeee",e);
    try{
    var getEvent=e[e.length-1]
    console.log(getEvent);
    var temp=[...skillSet]
    if(getEvent.id==null||getEvent.id==undefined){
      if(temp.length==6){
        alert('max 6 skills')
      }
      else{
        var check=temp.filter(data=>data.label==getEvent.label)
        if(check.length>0){
          return
        }
        temp.push(getEvent)
        setSkillSet(temp)
      }
      return
    }
    if(temp.length!==6){
      var check=temp.filter(data=>data==getEvent.id)
      if(check.length>0){
        return
      }
      else{
        temp.push(getEvent.id)
        setSkillSet(temp)
      }
      return
    }
    else if(temp.length==6){
      alert("max 6 skills")
      return
    }
    
    
    
    // if(skillSet.length==0&&skillCounter==0){
    //   console.log("block 00000")
    //   setSkillCounter(1)
    //   var previousData=[...props.keySkillsLogin.addSkill.stored_values]
    //   if(getEvent.id==null||getEvent.id==undefined){
    //     //console.log(getEvent["label"]);
    //     console.log("not id");
    //     var tempId=[]
    //     for(var n=0;n<previousData.length;n++){
    //       tempId.push(previousData[n].id)
    //     }
    //     if(tempId.length==6){
    //       setSkillSet(tempId)
    //       alert('You can add maximum 6 skills')
    //     }
    //     else{
    //       tempId.push(getEvent)
    //     setSkillSet(tempId)
    //     }
        
    //     return
    //   } 
    //   var tempId=[]
    //   for(var n=0;n<previousData.length;n++){
    //     tempId.push(previousData[n].id)
    //   }
    //   if(tempId.length==6){
    //     setSkillSet(tempId)
    //     alert('You can add maximum 6 skills')
    //   }
    //   else{
    //   var data=tempId.filter(skill=>skill==getEvent.id)
    //   if(data.length>0){
    //     setSkillSet(tempId)
    //     return
    //   }
    //   else{
    //     tempId.push(getEvent.id)
    //     setSkillSet(tempId)
    //   }
    // }
   
    // }
    // else if(skillSet.length==0&&skillCounter==1){
    //   console.log("block 01111")
    //   var previousData=[]
    //   if(getEvent.id==null||getEvent.id==undefined){
    //     //console.log(getEvent["label"]);
    //     console.log("not id");
    //     previousData.push(getEvent)
    //     setSkillSet(previousData)
    //     return
    //   }
    //   previousData.push(getEvent.id)
    //   setSkillSet(previousData)
  
    // } 
    // else if(skillSet.length>0){
    //   console.log("block all 111111");
    //   var previousData=[...skillSet]
    //   //var checkProperty=getEvent.hasOwnProperty('id')
    //   if(getEvent.id==null||getEvent.id==undefined){
    //     if(previousData.length==6){
    //       setSkillSet(previousData)
    //       alert('You can add maximum 6 skills')
    //     }
    //     else{
    //     console.log(getEvent["label"]);
    //     console.log("not id");
    //     previousData.push(getEvent)
    //     setSkillSet(previousData)
    //     }
    //     return
    //   }
    //   if(previousData.length==6){
    //     setSkillSet(previousData)
    //     alert('You can add maximum 6 skills')
    //   }
    //   else{
      
    //   var data=previousData.filter(skill=>skill==getEvent.id)
    //   if(data.length>0){
    //     return
    //   }
    //   else{
    //     previousData.push(getEvent.id)
    //     setSkillSet(previousData)
    //   }
    // }
    // }
  }
  catch(e){
    console.log("err",e)
  }
    };

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 6;

  const handleKeySkill = async () => {
    var tempSkillSet=[]
    var newSkill=[]
    var existingSkills=[]
    
    tempSkillSet=[...skillSet]
    
    
    for(var n=0;n<tempSkillSet.length;n++){
      if(typeof tempSkillSet[n]=='object'){
        newSkill.push(tempSkillSet[n].label)
      }
      else if(typeof tempSkillSet[n]=='string'){
        existingSkills.push(tempSkillSet[n])
      }
    
    }
    await props.createSkill(
      localStorage.getItem("auth_id"),
      existingSkills,
      newSkill
    );
  };

  const deleteKeySkills = (e) => {
    console.log("eeeeeee",e)
    var temp=[...skillSet]
    if(typeof e=='object'){
      console.log("del 1 objjj ");
      var check=[]
      console.log("obj k boclk me he");
      for(var n=0;n<temp.length;n++){
        if((temp[n].label!==undefined||temp[n].label!==null)&&(temp[n].label==e.label)){
          console.log("this has to be deletd")
        }
        else{
          check.push(temp[n])
        }
      }
      
      setSkillSet(check)
      return
    }
    var check=temp.filter(data=>data!==e)
    setSkillSet(check)

    /////   
  
    }

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        {/* <button onClick={() => console.log(props.addSkillReducer.addSkill)}>
          sdf
        </button> */}
        <h1 className="col-md-4 d-flex justify-content-center font-weight-bold key-skill-head">
          Key Skills
        </h1>
        <div className="col-md-4"></div>
      </div>
      {/* Row 1 for Heading Ends */}

      {/* Row 2 for Para Starts */}
      <div className="row">
        <div className="col-md-3"></div>
        <p className="col-md-6 d-flex justify-content-center key-skill-para">
          Enter keywords of skills that you are experienced in
        </p>
        <div className="col-md-3"></div>
      </div>
      {/* Row 2 for Para Ends */}

      {/* Row 3 Para Starts */}
      <div className="row">
        <div className="col-md-2"></div>
        {/* Main Background of Input starts */}
        <div className="col-md-8 shadow mt-5 p-5 key-main-div">
          {/* Input Starts  */}
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 hjk">
              <Creatable
                options={
                  props.addSkillReducer.addSkill.skills &&
                  props.addSkillReducer.addSkill.skills.length > 0
                    ? props.addSkillReducer.addSkill.skills
                    : ""
                }
                //components={{ Menu }}
                isMulti
                //isValidNewOption={isValidNewOption}
                onChange={(e)=>handleTest(e)}
              />
            </div>
            <div className="col-md-2"></div>
          </div>
          {/* Input Ends  */}

          {/* Hr starts */}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <hr className="mt-4 key-hr" />
            </div>
            <div className="col-md-1"></div>
          </div>
          {/* Hr Ends */}

          {/* KeyWord Sub Head Row Starts */}
          <div className="row">
            <div className="col-md-12">
              <p className="sel-key-skill mt-2">Selected Keywords</p>
              <small className="mb-3">You can add upto 6 skills</small><br/>
              {
                (skillSet.length>0?
                  skillSet.map(skill=>(
                    <>
                    <button
                        onClick={(e) => deleteKeySkills(skill)}
                        // key={lang.i}
                        className="btn btn-light mt-2 shadow btn-color-key mx-3"
                        id="btnn"
                      >
                        <span className="btn-label">
                          <i className="far fa-trash pr-1"></i>
                        </span>
                        { typeof skill=='object'?skill.label:
                        (props.addSkillReducer.addSkill.skills&&props.addSkillReducer.addSkill.skills.length>0?
                      (props.addSkillReducer.addSkill.skills.filter(data=>data.id==skill).length>0?props.addSkillReducer.addSkill.skills.filter(data=>data.id==skill)[0].name:"")
                      :"")
                      }
                        {/* {skill !== null && skill !== undefined ? skill.name : ""} */}
                      </button>
                    
                    </>
                  ))
                  
                  :"")
              }
            </div>
          </div>
          {/* KeyWord Sub Head Row Ends */}

          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                className="mt-5 btn btn-warning key-sub-btn"
                onClick={handleKeySkill}
                disabled={skillSet.length > 0 ? false : true}
              >
                Save and Continue
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        {/* Main Background of Input Ends */}
        <div className="col-md-2"></div>
      </div>
      {/* Row 3 Para Ends */}
      {props.addSkillReducer.loader == false ? <FullPageLoader /> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  addSkillReducer: state.addSkillReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getSkill: (userId) => dispatch(getSkill(userId)),
  createSkill: (userId, checkId, multiLanguage) =>
    dispatch(createSkill(userId, checkId, multiLanguage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(KeySkills);
