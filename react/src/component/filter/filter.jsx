import React, { Fragment, useEffect, useState } from "react";
import { Pills } from "./pills";
import "../../scss/colorscheme.scss";
import "../../scss/filter.scss";
import "../../scss/button.scss";
import arrowDown from "../../Images/arrow-down.png";
import CheckMarkSquare from "../../images/pink-square.png";

export default function Filter() {
 
  let x = [];
  const y = [];
  
  const [activeFilters, setActiveFilters] = useState([]);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const allergies = [
    "Vegeterian",
    "Vegan",
    "Gluten free",
    "Lactose free",
    "Milk free",
    "Nut free",
  ];
  const proteins = ["Steak", "Pork", "Seafood", "Chicken"];
  const apply = ["Apply"];
  const clear = ["Clear"];
    
   function setFilter(filter) {
      if (filter != activeFilters.find((f) => f === filter)) {
        setActiveFilters(oldFilters => [...oldFilters, filter]);
      } 
      else {
        setActiveFilters(filters => filters.filter(oldFilter => oldFilter != filter))
    }
  }
  return (
    <>
      <SectionMobile header="Meal Options" />
      <Pills types={mealType} activeFilter={activeFilters} setFilter={setFilter} />
      <hr />
      <SectionMobile header="Meal Allergies/Diet" />
      <Pills types={allergies} activeFilter={activeFilters} setFilter={setFilter} />
      <hr />
      <SectionMobile header="Drinks" />
      <Pills types={proteins} activeFilter={activeFilters} setFilter={setFilter}/>
      <hr />
      <div className="flex-container apply-clear">
        <ApplyClearPills types={apply} id="apply-button" />
        <ApplyClearPills types={clear} id="clear-button" />
      </div>
    </>
  );

  function UpdatePressedValues(name) {
    let fromRegex = RegexCheck(name);
    let buttonPressed = fromRegex + "Pressed";
    return buttonPressed;
  }

  function UpdateSetValues(name) {
    let fromRegex = RegexCheck(name);
    let setPressed = "set" + fromRegex;
    return setPressed;
  }

  function RegexCheck(input) {
    let newValue;

    let value1 = input.includes("/");
    let value2 = input.includes("-");
    if (value1) {
      newValue = input.replace("/", "");
    } else if (value2) {
      newValue = input.replace("-", "");
    } else {
      newValue = input;
    }
    return newValue;
  }

  function WriteSomething(name) {
    console.log(name);
  }

  function TransformToArray(types) {
    let useType = types.type;
    let useId = types.id;

    let pressedArray = [];
    let setArray = [];
    for (let index = 0; index < types.length; index++) {
      const element = types[index];

      let pressedValue = UpdatePressedValues(element);
      pressedArray.push(pressedValue);
    }
    return pressedArray;
  }

  // -------    MOBILE    -------

  // function Pills({types, activeFilter = []}){
  //   let ItemsArray = TransformToArray(types)

  //   // {ItemsArray.map((ItemsArray[0].types,ItemsArray[1].pressedArray) =>
  //   // <p>{ItemsArray[0].types</p>
  //   // )}

  //   console.log("Items: " + ItemsArray)
  //   // console.log("Types: " + types)

  //   return (
  //     <>
  //     {types.map((type, id ) =>
  //       // <button key={id} className={`${activeFilter.find(filter => filter === type) === undefined ? "filterButton" : "selected"}`}
  //       //   onClick={() => WriteSomething(type)}>{type}
  //       //   </button>

  //       <button key={id} className={`${activeFilter.find(filter => filter === type) === undefined ? "filterButton" : "selected"}`}
  //         onClick={() => setTemp(type)}>
  //         {type}
  //       </button>
  //     )}
  //     </>
  //   );
  // }

  // onClick={() => UpdatePressedValues(type, id)}
  // onClick={() =>{ id={id}}}
  // onClick={changeState(isPressed,setValue)}
  //

  function MatchPills() {
    return (
      <>
        <button className="filter-button" onClick={() => setText("")}>
          Match meal with time?
        </button>
      </>
    );
  }

  function SectionMobile({ header }) {
    return (
      <>
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          {/* <button id="arrowButton"> */}
          <img
            className="arrow"
            src={arrowDown}
            alt="Arrow down"
            style={{ maxWidth: "30px" }}
          />
          {/* </button> */}
        </div>
        <hr />
      </>
    );
  }

  // -------    BOTH    -------

  function ApplyClearPills({ types, id }) {
    return (
      <>
        {types.map((data) => (
          <button
            className="filter-button"
            id={id}
            onClick={() => (id = { id })}
          >
            {data}
          </button>
        ))}
      </>
    );
  }

  // -------    DESKTOP    -------

  function DesktopCheckbox({ types }) {
    return types.map((item, index) => (
      <div key={index}>
               {" "}
        <label className="container">
          {item}
                    <input type="checkbox" />         {" "}
          <span className="checkmark"></span>       {" "}
        </label>
             {" "}
      </div>
    ));
  }

  function MatchCheckbox() {
    return (
      <label className="container">
        Match meal with time?       <input type="checkbox" />     {" "}
        <span className="checkmark"></span>   {" "}
      </label>
    );
  }

  function SectionDesktop({ header }) {
    return (
      <>
             {" "}
        <div>
                  <h2>{header}</h2>        {/* <button id="arrowButton"> */}
                   {" "}
          <img
            className="arrow"
            src={arrowDown}
            alt="Arrow down"
            style={{ maxWidth: "30px" }}
          />
                  {/* </button> */}     {" "}
        </div>
              <hr />   {" "}
      </>
    );
  }
}

// return( //   <> //     <SectionDesktop header="Meal Options"/> //     <DesktopCheckbox types={mealType}/> //     <MatchCheckbox/> //     <hr /> //     <SectionDesktop header="Meal Allergies/Diet"/> //     <DesktopCheckbox types={allergies}/> //     <hr /> //     <SectionDesktop header="Drinks"/> //     <DesktopCheckbox types={proteins}/> //     <hr /> //     <div className="flex-container apply-clear"> //       <ApplyClearPills types={apply} id="apply-button"/> //       <ApplyClearPills types={clear} id="clear-button"/> //     </div> //   </> // )
