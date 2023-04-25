import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

import arrowImage from "../../Images/arrow-image-transparent.png"

export default function LeftArrow(){
    return(
        <img className="arrowLeft" src = {arrowImage}></img>
        )
    }