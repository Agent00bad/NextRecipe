import React, { useEffect, useState } from "react";
import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";
import HeadImage from "./recipeHeadImage";
import Description from "./recipeDescription";
import DrinkGroup from "./recipeDrinkGroup";
import RecipeImage from "../../Images/image.jpg";
import RecipeListCard from "./recipeListCard";
import RecDrinkImage from "../../Images/wine.jpg";

// import CarbonFont from "../../Images/CarbonFont.jpg"

import { useLocation } from "react-router-dom";
import { winePairingKeywords } from "../../JS/winePairingKeywords";
import { fetchApiSpoonacular } from "../../JS/fetchApiSpoonacular";
import Portion from "./recipePortions";
import Nutrition from "./recipeNutrition";

export default function Recipe() {
  let { state } = useLocation();
  const [wineData, setWineData] = useState(null);
  const defaultWine = {
    description:
      "As with any wine tasting experience, it begins with the aromas rising from the glass. For Riesling wine, the aromas can be intense even when the wine is ice cold. The initial aromas of a Riesling wine are orchard fruits like nectarine, honey-crisp apple, pear, and apricot. Plus, you might also note softer, more soothing scents like jasmine, honeycomb, or lime zest.",
    image:
      "https://latahcreek.com/assets/uploads/post/What-Does-Riesling-Taste-Like.jpg",
    title: "Riesling ",
  };

  useEffect(() => {
    const getWine = async () => {
      let result = null;

      if (winePairingKeywords(state.recipe.cuisineType[0])) {
        result = await fetchApiSpoonacular(state.recipe.cuisineType[0]);
        console.log(
          "cuisineType match = " +
            state.recipe.cuisineType[0] +
            " : " +
            result.title
        );
        setWineData(result);
      } else {
        for (let i = 0; i < state.recipe.ingredients.length; i++) {
          if (winePairingKeywords(state.recipe.ingredients[i].foodCategory)) {
            result = await fetchApiSpoonacular(
              state.recipe.ingredients[i].foodCategory
            );
            console.log("category match = " + result.title);
            setWineData(result);
            i = state.recipe.ingredients.length;
          }
        }
      }
    };
    getWine();
    console.log(wineData);
    // if(!wineData){
    //   console.log("setting default")
    //   setWineData(defaultWine)
    // }
  }, []);

  return (
    <div className="main recipe" >
      {/* style={{backgroundImage:CarbonFont}} */}
      {/* Description */}
      <Description
        description={`Cuisine type: ${state.recipe.cuisineType}`}
        title={state.recipe.label}
      />
      <image src = ""></image>

      {/* <div className="CarbonFont flex-rows" style={{backgroundColor: "red"}}> */}
      {/* <div className="CarbonFont flex-rows" > */}
      <div className=" flex-rows" >
      {/* CarbonFont
        <img CarbonFont /> */}
        {/* Flex container - Left */}
        <div className="static-flex-column">
          <div className="fixedMargin">
            {/* Head Image */}
            <HeadImage
              description="HeadDesciption"
              recipeImage={state.recipe.image}
            />
          </div>

          <div className="fixedMargin listCard" id="card">
            {/* Portion */}
            <Portion
              nutrient={state.recipe.totalNutrients}
              portions={state.recipe.yield}
              weight={state.recipe.totalWeight}
            />
          </div>
          {/* How to */}
          {/* <RecipeListCard isOrdered={true} Listitems={HowToList} /> */}
        </div>
        {/* Flex container - Left */}

        {/* Flex container - Center */}
        <div className="dynamic-flex-column">
          <div className="fixedMargin">
            {/* Ingredients */}
            <RecipeListCard
              
              isOrdered={false}
              Listitems={state.recipe.ingredientLines}
            />
          </div>

          <div className="fixedMargin listCard" id="card">
          <Nutrition
          nutrient = {state.recipe.totalNutrients}
          weight={state.recipe.totalWeight}
          
          />

          </div>


          {/* Flex container - Center */}
        </div>
        {/* Flex container Right */}
        {wineIsNull(wineData)}
        {/* Flex container Right */}
      </div>
    </div>
  );
}


function wineIsNull(wineData){
if(wineData != null){
  return(
<div    className="dynamic-flex-column">
          {/* Recommended Drink */}
          {wineData && (
            <div className="loaded-drink fixedMargin">
              <DrinkGroup
                drinkImage={wineData.image}
                drinkDescription={wineData.description}
                drinkTitle={wineData.title}
              />
            </div>
          )}
          {/* Flex container Right */}

          
        </div>

  )
}
}