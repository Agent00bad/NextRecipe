import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/HeaderFooter.css";

import arrowImage from "../../Images/arrow-image-transparent.png"

export default function RightArrow(){
    return(
        <img className="arrowRight" src = {arrowImage}></img>
        )
    }