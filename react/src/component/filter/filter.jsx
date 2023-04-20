import React, { Fragment } from "react";

import '../../css/colorscheme.css';
import '../../css/filter.css';
import '../../css/button.css';
import arrowDown from '../../Images/arrow-down.png';
import CheckMarkSquare from '../../images/pink-square.png'


export default function Filter() {
  const mealType = ["Breakfast", "Lunch", "Dinner"]
  const allergies = ["Gluten", "Nuts", "Milk", "Lactose", "Vegeterian", "Vegan"]
  const drinks = ["Beer", "Wine", "Milk", "Juice", "Coffee", "Tea"]
  const apply = ["Apply"]
  const clear = ["Clear"]

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
      <Desktop types={mealType}/>
      <MatchCheckbox/>
      <hr />

      <SectionDesktop header="Meal Allergies/Diet"/>
      <Desktop types={allergies}/>
      <hr />

      <SectionDesktop header="Drinks"/>
      <Desktop types={drinks}/>
      <hr />

      <div className="flex-container apply-clear">
        <ApplyClearPills types={apply} id="apply-button"/>
        <ApplyClearPills types={clear} id="clear-button"/>
      </div>
    </>
  )
}

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
      <button onClick={() => setText("")}>Match meal with time?</button>
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

function ApplyClearPills({types, id}){
  return (
    <>
      {types.map((data) =>
        <button id={id} onClick={() => id={id}}>{data}</button>
      )}
    </>
  );
}

function Desktop({types}){
  return(
    types.map((item, index) => (
      <div key={index}>
        <label><input type="checkbox"/>{item}</label>
      </div>
  )))
}

function MatchCheckbox(){
  return(
    <label><input type="checkbox" />Match meal with time?</label>
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

  // function Lister({types}){
//   return (
//     <div>
//       <ul>
//         {types.map(data =>
//           {return(
//             <li>{data}</li>
//         )})}
//       </ul>
//     </div>
//   )
// }