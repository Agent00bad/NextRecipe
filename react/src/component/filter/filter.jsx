import React, { Component, Fragment, useEffect, useState } from "react";
import { Pills } from "./pills";
import "../../scss/colorscheme.scss";
import "../../scss/filter.scss";
import "../../scss/button.scss";
import arrowDown from "../../Images/arrow-down.png";
import CheckMarkSquare from "../../images/pink-square.png";
import { useOutletContext } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';



export default function Filter() {

  const [activeFilters, setActiveFilters] = useOutletContext();
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const allergies = ["Vegeterian", "Vegan", "Gluten free", "Lactose free", "Milk free", "Nut free"];
  const proteins = ["Steak", "Pork", "Seafood", "Chicken"];
  const apply = ["Apply"];
  const clear = ["Clear"];
  const[toggleMeals, setToggleMeals] = useState(true);
  const[toggleAllergies, setToggleAllergies] = useState(true);
  const[toggleProteins, setToggleProteins] = useState(true);


  const navigate = useNavigate();
  const navigateToIndex = () => {
    navigate('/')
  }

  function setFilter(filter) {
    if (filter != activeFilters.find((f) => f === filter)) {
      setActiveFilters(oldFilters => [...oldFilters, filter]);
    } 
    else {
      setActiveFilters(filters => filters.filter(oldFilter => oldFilter != filter))
    }
  }

  const removeFilterChoices = () =>{
    setActiveFilters(activeFilters.filter(filter => null))
  }

  return (
    <>
        <div className="filterandbutton">
            <main>
              <SectionMobileMeals header="Meal Options" id="1"/>
              <Pills types={mealType} activeFilter={activeFilters} setFilter={setFilter} toggle={toggleMeals} />
              <SectionMobileAllergies header="Meal Allergies/Diet" id="2"/>
              <Pills types={allergies} activeFilter={activeFilters} setFilter={setFilter} toggle={toggleAllergies}/>
              <SectionMobileProteins header="Type of food" id="3"/>
              <Pills types={proteins} activeFilter={activeFilters} setFilter={setFilter} toggle={toggleProteins} />
              <div className="flex-container-horizontal apply-clear">
                <ApplyClearPills  types={apply} id="apply-button" />
                <ApplyClearPills types={clear} id="clear-button" />
              </div>
        </main>
     </div>

    </>
  );

  // -------    MOBILE    -------

  function MatchPills() {
    return (
      <>
        <button className="filter-button" onClick={() => setText("")}>
          Match meal with time?
        </button>
      </>
    );
  }

  function SectionMobileMeals({header}) {
    const handleClick = () =>{
      setToggleMeals(!toggleMeals)
    }
    return (
      <div className="filterandbutton">
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          <button
            onClick={handleClick}
            className={toggleMeals ? "arrow arrowdown" : "arrow arrowup"}
            alt="Arrow down"
          ></button>
        </div>
        <hr/>
      </div>
    );
  }
  
  function SectionMobileAllergies({header}) {
    const handleClick = () =>{
      setToggleAllergies(!toggleAllergies)
    }
    return (
      <div className="filterandbutton">
        {!toggleMeals ? <hr/> : ""}
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          <button
            onClick={handleClick}
            className={toggleAllergies ? "arrow arrowdown" : "arrow arrowup"}
            alt="Arrow down"
          ></button>
        </div>
        <hr/>
      </div>
    );
  }
  
  function SectionMobileProteins({header}) {
    const handleClick = () =>{
      setToggleProteins(!toggleProteins)
    }
    return (
      <div className="filterandbutton">
        {!toggleAllergies ? <hr/> : ""}
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          <button
            onClick={handleClick}
            className={toggleProteins ? "arrow arrowdown" : "arrow arrowup"}
            alt="Arrow down"
          ></button>
        </div>
        <hr/>
      </div>
    );
  }

 

  // -------    BOTH    -------

  function ApplyClearPills({ types, id }) {
    return (
      <>
      <div className="filterandbutton">
        {types.map((data) => (
          <button
            className="filter-button"
            id={id}
            onClick={id == "apply-button" ? navigateToIndex : removeFilterChoices} >
            {data}
          </button>
        ))}
        </div>
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
