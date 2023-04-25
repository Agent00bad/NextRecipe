import React, { Fragment } from "react";

// import '../../css/colorscheme.css';
// import '../../css/filter.css';
// import '../../css/button.css';

import '../../scss/colorscheme.scss';
import '../../scss/filter.scss';
import '../../scss/button.scss';

import arrowDown from '../../Images/arrow-down.png';
import CheckMarkSquare from '../../images/pink-square.png'


export default function Filter() {
  const mealType = ["Breakfast", "Lunch", "Dinner"]
  const allergies = ["Gluten", "Nuts", "Milk", "Lactose", "Vegeterian", "Vegan"]
  const drinks = ["Beer", "Wine", "Milk", "Juice", "Coffee", "Tea"]
  const apply = ["Apply"]
  const clear = ["Clear"]

  //
  // return(
  //   <>
  //     <Section header="Meal Options"/>
  //     <Pills types={mealType}/>
  //     <MatchPills/>
  //     <hr />

  //     <Section header="Meal Allergies/Diet"/>
  //     <Pills types={allergies}/>
  //     <hr />

  //     <Section header="Drinks"/>
  //     <Pills types={drinks}/>
  //     <hr />

  //     <Section header="Match drinks with food"/>
  //     <Pills types={mealType}/>
  //     <MatchPills/>
  //     <hr />

  //     <div className="flex-container apply-clear">
  //       <ApplyClearPills types={apply} id="apply-button"/>
  //       <ApplyClearPills types={clear} id="clear-button"/>
  //     </div>
  //   </>
  // )
  
  return(
    <>
      <SectionDesktop header="Meal Options"/>
      <DesktopCheckbox types={mealType}/>
      <MatchCheckbox/>
      <hr />

      <SectionDesktop header="Meal Allergies/Diet"/>
      <DesktopCheckbox types={allergies}/>
      <hr />

      <SectionDesktop header="Drinks"/>
      <DesktopCheckbox types={drinks}/>
      <hr />

      <div className="flex-container apply-clear">
        <ApplyClearPills types={apply} id="apply-button"/>
        <ApplyClearPills types={clear} id="clear-button"/>
      </div>
    </>
  )
}

// -------    MOBILE    -------

function Pills({types}){
  return (
    types.map((item, index) => (
      <div key={index}>
        <span>{item}</span>
      </div>
  )))
}

function MatchPills(){
  return (
    <>
      <button className="filter-button" onClick={() => setText("")}>Match meal with time?</button>
    </>
  );
}

function SectionMobile({header}){
return(
  <>
    <div className="flex-container-horizontal">
      <h2>{header}</h2>
      {/* <button id="arrowButton"> */}
        <img className="arrow" src={arrowDown} alt="Arrow down" />
      {/* </button> */}
    </div>
    <hr />
  </>
)}

// -------    BOTH    -------

function ApplyClearPills({types, id}){
  return (
    <>
      {types.map((data) =>
        <button className="filter-button" id={id} onClick={() => id={id}}>{data}</button>
      )}
    </>
  );
}

// -------    DESKTOP    -------

function DesktopCheckbox({types}){
  return(
    types.map((item, index) => (
      <div key={index}>
        <label className="container">{item}
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>
      </div>
  )))
}

function MatchCheckbox(){
  return(
    <label className="container">Match meal with time?
      <input type="checkbox"/>
      <span className="checkmark"></span>
    </label>
  )
}

function SectionDesktop({header}){
  return(
    <>
      <div>
        <h2>{header}</h2>
        {/* <button id="arrowButton"> */}
          <img className="arrow" src={arrowDown} alt="Arrow down" />
        {/* </button> */}
      </div>
      <hr />
    </>
  )}