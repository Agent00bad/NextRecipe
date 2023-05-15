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
import { useLocation } from "react-router-dom";
import { winePairingKeywords } from "../../JS/winePairingKeywords";
import { fetchApiSpoonacular } from "../../JS/fetchApiSpoonacular";

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
    <div className="main recipe">
      {/* Description */}
      <Description
        description={`Cuisine type: ${state.recipe.cuisineType}`}
        title={state.recipe.label}
      />

      <div className="static-flex">

      {/* Head Image */}
      <HeadImage
        description="HeadDesciption"
        recipeImage={state.recipe.image}
      />

      

      {/* How to */}
      {/* <RecipeListCard isOrdered={true} Listitems={HowToList} /> */}

      {/* Recommended Drink */}
      {wineData && (
        <div className="loaded-drink">
          <DrinkGroup
            drinkImage={wineData.image}
            drinkDescription={wineData.description}
            drinkTitle={wineData.title}
          />
        </div>
      )}

      </div>


      {/* Ingredients */}
      <RecipeListCard
        isOrdered={false}
        Listitems={state.recipe.ingredientLines}
      />
    </div>
  );
}
