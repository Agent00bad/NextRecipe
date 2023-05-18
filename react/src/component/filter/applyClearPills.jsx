import React, { Component, Fragment, useEffect, useState } from "react";
import { Pills } from "./pills";
import "../../scss/colorscheme.scss";
import "../../scss/filter.scss";
import "../../scss/button.scss";
import { useOutletContext } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Filter} from "./filter.jsx"

export function  ApplyClearPills({types = [], id}){

    const navigate = useNavigate();
    const navigateToIndex = () => {
      navigate("/");
    };
    const removeFilterChoices = () => {
        setActiveFilters(activeFilters.filter((filter) => null));
      };
        return (
          <>
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
          </>
)};