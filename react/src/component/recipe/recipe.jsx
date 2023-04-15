import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function Recipe(){
    return(
        //Head Image

        <div className="center">
            <div className="headImg">
                <img src={RecipeImage} alt="Plate with salmon, potatoes, carrots and broccoli"/>
            </div>
        
        {/* Description */}

        <div className="boxA box-shadow">
            <h3>BBQ salmon with veggies</h3>
            <div className="innerBox">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ipsum, aspernatur assumenda laboriosam nulla blanditiis aut a ipsa facere nihil, optio facilis ab! Expedita adipisci nostrum eveniet obcaecati quis dolor.</p>
            </div>
        </div>

        {/* Recommended Drink */}


        <div className="boxParent flex-container">
            <svg className="arrow bi bi-arrow-left-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            
            <div className="boxB box-shadow" id="recommendedDrinkBox">
            <h3>Recomended drink</h3>

            <div className="RecDTwo img-responsive">
                        {/* < //<img src={"Images/wine.jpg}" alt="Two glasses of wine. One white and one red."/>  */}
                        <img src={RecDrinkImage} alt="No Image"></img>
                    </div>
                <div className="boxB flex-container flex-wrap">
                    <div className="RecDOne">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in nesciunt dolor eum sapiente blanditiis veniam incidunt illum. Labore ratione quae voluptate illum odio quidem odit eligendi harum modi obcaecati?</p>
                    </div>
                    
                </div>
            </div>

            <svg className="arrow bi bi-arrow-right-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
        </div>

        {/* Ingredients */}

        <div className="boxA box-shadow">
            <h3>Ingredients:</h3>
            <div className="innerBox">
                <ul>
                    <li>Salmon</li>
                    <li>Broccoli</li>
                    <li>Carrots</li>
                    <li>Potatoes</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Butter</li>
                </ul>
            </div>
        </div>

        {/* How to */}

        <div className="boxA box-shadow">
            <h3>How to:</h3>
            <div className="innerBox">
                <ol>
                    <li>Put salt and pepper on the salmon</li>
                    <li>Boil potatis</li>
                    <li>Put the salmon on the grill</li>
                    <li>Boil broccoli and carrots</li>
                </ol>
            </div>
        </div>
    </div>
    )
}