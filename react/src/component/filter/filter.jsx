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
  {/* <div className="flexColumn"> */}

    <div>
      {/* <input type="checkbox" className="NRCheckbox" name={allergies} /> */}
      <input type="checkbox" />
        <span className="NRCheckbox" name={allergies} />
      <label for={allergies}>{allergies}</label>
    </div>

  {/* </div> */}

      <Section header="Meal Options"/>
      <Lister types={mealType}/>
      <MatchLister/>
      <hr />

      <Section header="Meal Allergies/Diet"/>
      <Lister types={allergies}/>
      <hr />

      <Section header="Drinks"/>
      <Lister types={drinks}/>
      <hr />

      <Section header="Match drinks with food"/>
      <Lister types={mealType}/>
      <MatchLister/>
      <hr />

      <div className="flex-container apply-clear">
        <ApplyClearPills types={apply} id="apply-button"/>
        <ApplyClearPills types={clear} id="clear-button"/>
      </div>
    </>
  )
}


function Lister({types}){
  return (
    <div>
      <ul>
        {types.map(data =>
          {return(
            <li>{data}</li>
        )})}
      </ul>
    </div>
  )
}

function MatchLister(){
  return(
    <ul><li>Match meal with time?</li></ul>
  )
}

function Pills({types}){
  return (
    <>
      {types.map((data) =>
        <button onClick={() => id={id}}>{data}</button>
      )}
    </>
  );
}

function ApplyClearPills({types, id}){
  return (
    <>
      {types.map((data) =>
        <button id={id} onClick={() => id={id}}>{data}</button>
      )}
    </>
  );
}

function MatchPills(){
  return (
    <>
      <button onClick={() => setText("")}>Match meal with time?</button>
    </>
  );
}

function Section({header}){
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