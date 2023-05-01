import "../../SCSS/index.scss";
import {useState, useEffect} from "react"
// import "../../SCSS/HeaderFooter.scss";
import { Card } from "./card";
import { ActiveFilter } from "./activeFilter";
import ApiCall from "../../JS/printApiDataToCards";
import { fetchApiEdemam } from "../../JS/fetchApiEdamam";
import logo from "../../Images/logo.png";
import menuIcon from "../../Images/menu-icon.png";
import perfectpair_transparent from "../../Images/perfectpair_transparent.png";
import userIcon from "../../Images/user-icon.png";

export default function Index() {

 const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () =>{
      const result = await fetchApiEdemam();
      setData(result);
    }

    getData();

    console.log(data);
  },[])

  return (
    
    <div className="index">
      <div className="logo">
        <img src={logo} alt="WelcomeImage" />
      </div>
      <main>
        {/* <!--Shows overview recipe details and works as a selection--> */}
       {/* <div className="recipe-drink-flex"> */}
          {/* <!--Displays active filters--> */}
          <ActiveFilter
            filters={[
              "Dinner",
              "Lactose Free",
              "Gluten Free",
              "Alcohol Free",
              "High Protein",
            ]}
            header={"Active Filter"}
          />
          <div className="CardSpace" id="CardSpace">  {/*Ifall vi vill flytta alla kort*/}
          {data && data[0] != undefined ?
          <div>
          {data.map((obj) => {
            return(
            <div>
             <Card 
             title={obj.recipe.label}
             description={obj.recipe.ingredientLines}
             type={obj.recipe.mealType[0]}
             calories={obj.recipe.calories}
             image={obj.recipe.image}
             />
            </div>
            )
          })}
          </div>
        :
        <h2>loading...</h2>  
        }

          {/*<!--Shows overview drink details and works as a selection-->*/}
          {/* <Card
            title="Drink"
            description="Best drink ever!"
            calories="1000"
            type="dinner"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VVKcNyqJMGbMrW-u2lKStAHaEo%26pid%3DApi&f=1&ipt=40124abb2e8e4f5e0bac3b38ef1e02a42fd14524aeeab3b88ae5a23d3a50f9d1&ipo=images"
          /> */}
        {/* </div> */}
        </div>
        
        {/* <button onClick={testApiOutPut}>TEST</button> */}
        
      </main>
    </div>
  );
}

