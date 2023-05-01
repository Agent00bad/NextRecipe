import { useState } from "react";
import "../../SCSS/button.scss"

export function Pills({types, activeFilter = [], setTemp}){

    // {ItemsArray.map((ItemsArray[0].types,ItemsArray[1].pressedArray) =>
    // <p>{ItemsArray[0].types</p>
    // )}
    
    // console.log("Items: " + ItemsArray)
    // console.log("Types: " + types)
    function clickHandler(type)
    {
      setTemp(type);
    }

    return (
      <div className="filterandbutton">
      {types.map((type, id ) =>
        <button key={id} className={`filter-button ${activeFilter.find(filter => filter === type) === type && "selected"}`}  
          onClick={() => clickHandler(type)}>
          {type}
        </button>
      )}
      </div>
    );
  }