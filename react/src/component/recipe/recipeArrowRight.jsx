import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../CSS/colorscheme.scss";
import "../../CSS/recipe.scss";
import "../../CSS/HeaderFooter.scss";

import arrowImage from "../../Images/arrow-image-transparent.png"

export default function RightArrow(){
    return(
        <img className="arrowRight" src = {arrowImage}></img>
        )
    }