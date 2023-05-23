import React, { useEffect, useState } from "react";
import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";
import HeadImage from "./recipeHeadImage";
import Title from "./recipeTitle";
import DrinkGroup from "./recipeDrinkGroup";
import RecipeListCard from "./recipeListCard";
import { useLocation } from "react-router-dom";
import { winePairingKeywords } from "../../JS/winePairingKeywords";
import { fetchApiSpoonacular } from "../../JS/fetchApiSpoonacular";
import Portion from "./recipePortions";
import Nutrition from "./recipeNutrition";

export default function Recipe() {
  let { state } = useLocation();
  const [wineData, setWineData] = useState(null);

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
  }, []);

  return (
    <div className="recipe">
        <Title
          cuisine={`Cuisine type: ${state.recipe.cuisineType}`}
          title={state.recipe.label}
        />
      <div>
        <div className="horizontal-wrap">
          <div>
            <HeadImage
              alt={`Image of:  ${state.recipe.label}`}
              recipeImage={state.recipe.image}
            />
            <Portion
              nutrient={state.recipe.totalNutrients}
              portions={state.recipe.yield}
              weight={state.recipe.totalWeight}
            />
          </div>
          <div>
            <RecipeListCard ingredients={state.recipe.ingredientLines} />
            <Nutrition
              nutrient={state.recipe.totalNutrients}
              weight={state.recipe.totalWeight}
            />
          </div>
          <div className="wineContainer">{fetchedWine(wineData)}</div>
        </div>
      </div>
    </div>
  );
}

function fetchedWine(wineData) {
  if (wineData != null) {
    return (
      <>
        {wineData && (
          <DrinkGroup
            drinkImage={wineData.image}
            drinkDescription={wineData.description}
            drinkTitle={wineData.title}
          />
        )}
      </>
    );
  }
}
