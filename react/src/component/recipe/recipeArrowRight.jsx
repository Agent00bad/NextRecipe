import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

import arrowImage from "../../Images/arrow-image-transparent.png"

export default function RightArrow(){
    return(
        <img className="arrowRight" src = {arrowImage}></img>
        )
    }