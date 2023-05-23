import React, { Component, Fragment, useEffect, useState } from "react";
import { Pills } from "./pills";
import "../../scss/colorscheme.scss";
import "../../scss/filter.scss";
import "../../scss/button.scss";
import arrowDown from "../../Images/arrow-down.png";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Filter({onMobile = true}) {
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

  const navigate = useNavigate();
  const navigateToIndex = () => {
    navigate("/");
  };

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
      <div className="filterandbutton">
        <main className={onMobile ? "onMobile" : ""}>
          <SectionMobileMeals header="Meal Options" id="1" />
          <Pills
            types={mealType}
            activeFilter={activeFilters}
            setFilter={setFilter}
            toggle={toggleMeals}
          />
          <SectionMobileAllergies header="Meal Allergies/Diet" id="2" />
          <Pills
            types={allergies}
            activeFilter={activeFilters}
            setFilter={setFilter}
            toggle={toggleAllergies}
          />
          <SectionMobileProteins header="Type of food" id="3" />
          <Pills
            types={proteins}
            activeFilter={activeFilters}
            setFilter={setFilter}
            toggle={toggleProteins}
          />
          <div className="flex-container-horizontal apply-clear">
            {onMobile && <ApplyClearPills types={apply} id="apply-button"/>}
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

  function SectionMobileMeals({ header }) {
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

  function SectionMobileAllergies({ header }) {
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

  function SectionMobileProteins({ header }) {
    const handleClick = () => {
      setToggleProteins(!toggleProteins);
    };
    return (
      <div className="filterandbutton" onClick={handleClick}>
        {!toggleAllergies ? <hr /> : ""}
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

  function ApplyClearPills({ types, id }) {
    return (
        <div className="filterandbutton">
          {types.map((data) => (
            <button
              className="filter-button"
              id={id}
              onClick={
                id == "apply-button" ? navigateToIndex : removeFilterChoices
              }
            >
              {data}
            </button>
          ))}
        </div>
    );
  }
}
