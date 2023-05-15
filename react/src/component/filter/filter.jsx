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
  const [onFilterPage, setOnFilterPage] = useState(false);

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
  //Robbans lösning
  const handleDelete = () =>{
    setActiveFilters(activeFilters.filter(filter => null))
  }
  // Jonathans lösning
  const removeFilterChoices = () =>{
    setActiveFilters((current) => current.filter(x => null))
  }

  return (
    <>
      <SectionMobile header="Meal Options" />
      <Pills types={mealType} activeFilter={activeFilters} setFilter={setFilter} />
      <hr />
      <SectionMobile header="Meal Allergies/Diet" />
      <Pills types={allergies} activeFilter={activeFilters} setFilter={setFilter} />
      <hr />
      <SectionMobile header="Type of food" />
      <Pills types={proteins} activeFilter={activeFilters} setFilter={setFilter}/>
      <hr />
      <div className="filterandbutton">
       <div className="flex-container-horizontal apply-clear">
        <ApplyClearPills  types={apply} id="apply-button" />
        <ApplyClearPills types={clear} id="clear-button" />
      </div>
      </div>
    </>
  );

/*          {onFilterPage == true ? (
            <Link to="/" className="menu-link">
              <img src={crossicon} />
            </Link>
          ) : (
            <Link to="/filter" className="menu-link">
              <div className="filterBox">
                <img src={menuicon} />
              </div>
            </Link>
          )} 
          */


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
