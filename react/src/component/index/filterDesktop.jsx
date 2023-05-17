import React, { Component, Fragment, useEffect, useState } from "react";
import "../../scss/colorscheme.scss";
import "../../scss/filter.scss";
import "../../scss/button.scss";
import { useOutletContext } from "react-router-dom";
import { ApplyClearPills } from "../filter/applyClearPills.jsx";

export function FilterDesktop(filters= []){
    const [activeFilters, setActiveFilters] = useOutletContext();
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
    const [toggleMeals, setToggleMeals] = useState(true);
    const [toggleAllergies, setToggleAllergies] = useState(true);
    const [toggleProteins, setToggleProteins] = useState(true);
  
  
    function setFilter(filter) {
      if (filter != activeFilters.find((f) => f === filter)) {
        setActiveFilters((oldFilters) => [...oldFilters, filter]);
      } else {
        setActiveFilters((filters) =>
          filters.filter((oldFilter) => oldFilter != filter)
        );
      }
    }
  
    const removeFilterChoices = () => {
      setActiveFilters(activeFilters.filter((filter) => null));
    };
  
    return (
      <>
        <div className="filterDesktopCard">
          <main>
            <SectionDesktopMeals header="Meal Options"/>
            <DesktopCheckbox
              types={mealType}
              activeFilter={activeFilters}
              setFilter={setFilter}
              toggle={toggleMeals}
            />
            <SectionDesktopAllergies header="Meal Allergies/Diet"/>
            <DesktopCheckbox
              types={allergies}
              activeFilter={activeFilters}
              setFilter={setFilter}
              toggle={toggleAllergies}
            />
            <SectionDesktopProteins header="Type of food"/>
            <DesktopCheckbox
              types={proteins}
              activeFilter={activeFilters}
              setFilter={setFilter}
              toggle={toggleProteins}
            />
            <div className="flex-container-horizontal apply-clear">
              <ApplyClearPills types={apply} id="apply-button" />
              <ApplyClearPills types={clear} id="clear-button" />
            </div>
          </main>
        </div>
      </>
    );


  function DesktopCheckbox({ types }) {
    return types.map((item, index) => (
      <div className="flex-row" key={index}>
        {" "}
        <label className="container">
          {item}
          <input type="checkbox" />{" "}
          <span className="checkmark"></span>{" "}
        </label>
        {" "}
      </div>
    ));
  }

    // return (
    //     <>
    //     <div className="filterandbutton"  style={{display: toggle ? 'none' : 'block'}}>
    //     {types.map((type, id ) =>
    //       <button key={id} className={`filter-button ${activeFilter.find(filter => filter === type) === type && "selected"}`}
    //         onClick={() => setFilter(type)}>
    //         {type}
    //       </button>
    //     )}
    //     </div>
    //     </>
    //   );

  function SectionDesktopMeals({ header }) {
    const handleClick = () => {
      setToggleMeals(!toggleMeals);
    };
    return (
      <div className="filterandbutton" onClick={handleClick}>
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          <button
            className={toggleMeals ? "arrow arrowdown" : "arrow arrowup"}
            alt="Arrow down"
          ></button>
        </div>
        <hr />
      </div>
    );
  }

  function SectionDesktopAllergies({ header }) {
    const handleClick = () => {
      setToggleAllergies(!toggleAllergies);
    };
    return (
      <div className="filterandbutton" onClick={handleClick}>
        {!toggleMeals ? <hr /> : ""}
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          <button
            className={toggleAllergies ? "arrow arrowdown" : "arrow arrowup"}
            alt="Arrow down"
          ></button>
        </div>
        <hr />
      </div>
    );
  }

  function SectionDesktopProteins({ header }) {
    const handleClick = () => {
      setToggleProteins(!toggleProteins);
    };
    return (
      <div className="filterandbutton" onClick={handleClick}>
        {!toggleProteins ? <hr /> : ""}
        <div className="flex-container-horizontal">
          <h2>{header}</h2>
          <button
            className={toggleProteins ? "arrow arrowdown" : "arrow arrowup"}
            alt="Arrow down"
          ></button>
        </div>
        <hr />
      </div>
    );
  }

}