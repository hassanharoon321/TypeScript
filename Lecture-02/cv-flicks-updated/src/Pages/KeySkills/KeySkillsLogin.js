import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./KeySkills.css";
import { getSkillsLogin, createSkillsLogin } from "../../actions/key-skills-loginAction";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";
import { useState, useEffect } from "react";
import { connect,useSelector } from "react-redux";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";



function KeySkillsLogin(props) {
 const skills=useSelector(state=>state.keySkillsLogin)
 const [skillSet,setSkillSet]=useState([])
  


  const [multiLanguage, setMultiLanguage] = useState([]);
  const [checkId, setCheckId] = useState([]);
  const [simpleArray, setSimpleArray] = useState([]);
  const [checkStrings, setCheckStrings] = useState([]);
  const [skillsMain, setSkillsMain] = useState([]);
  const [skillCounter, setSkillCounter] = useState(0);

  useEffect(async() => {
    loadGetSkill(localStorage.getItem("auth_id"));

  },[]);
  const loadGetSkill = async (userId) => {
    await props.getSkillsLogin(userId);
    return null;
  };
  

  const deleteKeySkills = (e) => {
    console.log("eeeeeee",e,skillCounter)
    
  if(skillCounter==0){
    var tempId=[]
    var temp=[...props.keySkillsLogin.addSkill.stored_values]
    
    for(var n=0;n<temp.length;n++){
          tempId.push(temp[n].id)
        }
    var check=tempId.filter(data=>data!==e) 
    setSkillSet(check)
    setSkillCounter(1)
  }
  else if(skillCounter==1){
      var temp=[...skillSet]
      console.log("delete 1 block");
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
      console.log("del 1 string");
      var check=temp.filter(data=>data!==e)
      setSkillSet(check)
    }
    }
  

  let handleTest = (e) => {
    console.log("eeeeeeee",e);
    try{
    var getEvent=e[e.length-1]
    console.log(getEvent);
    
    if(skillSet.length==0&&skillCounter==0){
      console.log("block 00000")
      setSkillCounter(1)
      var previousData=[...props.keySkillsLogin.addSkill.stored_values]
      if(getEvent.id==null||getEvent.id==undefined){
        //console.log(getEvent["label"]);
        console.log("not id");
        var tempId=[]
        for(var n=0;n<previousData.length;n++){
          tempId.push(previousData[n].id)
        }
        if(tempId.length==6){
          setSkillSet(tempId)
          alert('max 6 skills')
        }
        else{
          tempId.push(getEvent)
        setSkillSet(tempId)
        }
        
        return
      } 
      var tempId=[]
      for(var n=0;n<previousData.length;n++){
        tempId.push(previousData[n].id)
      }
      if(tempId.length==6){
        setSkillSet(tempId)
        alert('max 6 skills')
      }
      else{
      var data=tempId.filter(skill=>skill==getEvent.id)
      if(data.length>0){
        setSkillSet(tempId)
        return
      }
      else{
        tempId.push(getEvent.id)
        setSkillSet(tempId)
      }
    }
   
    }
    else if(skillSet.length==0&&skillCounter==1){
      console.log("block 01111")
      var previousData=[]
      if(getEvent.id==null||getEvent.id==undefined){
        //console.log(getEvent["label"]);
        console.log("not id");
        previousData.push(getEvent)
        setSkillSet(previousData)
        return
      }
      previousData.push(getEvent.id)
      setSkillSet(previousData)
  
    } 
    else if(skillSet.length>0){
      console.log("block all 111111");
      var previousData=[...skillSet]
      //var checkProperty=getEvent.hasOwnProperty('id')
      if(getEvent.id==null||getEvent.id==undefined){
        if(previousData.length==6){
          setSkillSet(previousData)
          alert('max 6 skills')
        }
        else{
        console.log(getEvent["label"]);
        console.log("not id");
        previousData.push(getEvent)
        setSkillSet(previousData)
        }
        return
      }
      if(previousData.length==6){
        setSkillSet(previousData)
        alert('max 6 skills')
      }
      else{
      
      var data=previousData.filter(skill=>skill==getEvent.id)
      if(data.length>0){
        return
      }
      else{
        previousData.push(getEvent.id)
        setSkillSet(previousData)
      }
    }
    }
  }
  catch(e){
    console.log("err",e)
  }
    };

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 3;

  const handleKeySkill = async () => {
    var tempSkillSet=[]
    var newSkill=[]
    var existingSkills=[]
    if(skillCounter==0&&skillSet.length==0){
      var tempList=[...props.keySkillsLogin.addSkill.stored_values]
      for(var x=0;x<tempList.length;x++){
        tempSkillSet.push(tempList[x].id)
      }
      }
    else{
      tempSkillSet=[...skillSet]
    }  
    
    for(var n=0;n<tempSkillSet.length;n++){
      if(typeof tempSkillSet[n]=='object'){
        newSkill.push(tempSkillSet[n].label)
      }
      else if(typeof tempSkillSet[n]=='string'){
        existingSkills.push(tempSkillSet[n])
      }
    
    }
     //console.log(newSkill,existingSkills)
    await props.createSkillsLogin(localStorage.getItem("auth_id"), existingSkills, newSkill)
  };

  

  return (
    <div className="container mt-5 ">
      <div className="row mt-5">
        <div className="col-md-4"></div>
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
        <div className="col-md-2" ></div>
        {/* Main Background of Input starts */}
        <div className="col-md-8 shadow mt-5 p-5 key-main-div">
          {/* Input Starts  */}
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 hideValue " >
               <Creatable
              name = ''
                options={
                  props.keySkillsLogin.addSkill.skills &&
                    props.keySkillsLogin.addSkill.skills.length > 0 ? (
                    props.keySkillsLogin.addSkill.skills
                  ) : ""
                }
                
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
              <p className="sel-key-skill mt-2 p-0 m-0">Selected Keywords</p>
              <small className="mb-3">You can add upto 6 skills</small><br/>
              
              {skills.addSkill.stored_values&&skillSet.length==0?
            (skills.addSkill.stored_values.length>0?(
            skillCounter==0?
            skills.addSkill.stored_values.map(skill=>(
              <button
                  onClick={(e) => deleteKeySkills(skill.id)}
                  // key={lang.i}
                  className="btn btn-light mt-2 shadow btn-color-key mx-3"
                  id="btnn"
                >
                  <span className="btn-label">
                    <i className="far fa-trash pr-1"></i>
                  </span>
                  {skill !== null && skill !== undefined ? skill.name : ""}
                </button>
              
            )):""):
            ""):(skillSet.length>0?
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
                    (props.keySkillsLogin.addSkill.skills&&props.keySkillsLogin.addSkill.skills.length>0?
                  (props.keySkillsLogin.addSkill.skills.filter(data=>data.id==skill).length>0?props.keySkillsLogin.addSkill.skills.filter(data=>data.id==skill)[0].name:"")
                  :"")
                  }
                    {/* {skill !== null && skill !== undefined ? skill.name : ""} */}
                  </button>
                
                </>
              ))
              
              :"")
          }  
            

              
              {/* {multiLanguage&&multiLanguage.length>0?multiLanguage.map((lang, i) => (
                <button
                  onClick={(e) => deleteKeySkills(i)}
                  // key={lang.i}
                  className="btn btn-light mt-2 shadow btn-color-key mx-3"
                  id="btnn"
                >
                  <span className="btn-label">
                    <i className="far fa-trash pr-1"></i>
                  </span>
                  {lang !== null && lang !== undefined ? lang : ""}
                </button>
              )):
             ""
              } */}
            </div>
          </div>
          {/* KeyWord Sub Head Row Ends */}

          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                className="mt-5 btn btn-warning key-sub-btn"
                onClick={handleKeySkill}
                // disabled={multiLanguage.length > 0 ? false : true}
              >
                Save and Continue
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        {/* Main Background of Input Ends */}
        <div className="col-md-2"   ></div>
      </div>
      {/* Row 3 Para Ends */}
      {
        props.keySkillsLogin.loading==false?<FullPageLoader />:""
      }
      {
        props.keySkillsLogin.loading==true?
        ""
        :
<FullPageLoader />
      }
     
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  keySkillsLogin: state.keySkillsLogin,
});

const mapDispatchToProps = (dispatch) => ({
  getSkillsLogin: (userId) => dispatch(getSkillsLogin(userId)),
  createSkillsLogin: (userId, checkId, multiLanguage) =>
    dispatch(createSkillsLogin(userId, checkId, multiLanguage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsLogin);
