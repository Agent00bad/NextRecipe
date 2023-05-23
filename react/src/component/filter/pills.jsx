import { useState } from "react";
import "../../SCSS/button.scss"

export function Pills({types, activeFilter = [], setFilter, toggle}){

    return (
      <>
      <div className="filterandbutton"  style={{display: toggle ? 'none' : 'block'}}>
      {types.map((type, id ) =>
        <button key={id} className={`filter-button ${activeFilter.find(filter => filter === type) === type && "selected"}`}
          onClick={() => setFilter(type)}>
          {type}
        </button>
      )}
      </div>
      </>
    );
  }