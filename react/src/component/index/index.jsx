import "../../CSS/index.css";
import { Card } from "./card";
import { ActiveFilter } from "./activeFilter";
import logo from "../../Images/logo.png";
// import "../../CSS/HeaderFooter.css";
import menuIcon from "../../Images/menu-icon.png";
import perfectpair_transparent from "../../Images/perfectpair_transparent.png";
import userIcon from "../../Images/user-icon.png";
export default function Index() {
  return (
    <>
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

          <Card
            title="Recipie"
            description="Bla Bla Bla"
            calories="5000"
            type="dinner"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheatherlikesfood.com%2Fwp-content%2Fuploads%2F2015%2F05%2FDSC03691_1.jpg&f=1&nofb=1&ipt=00921f274e58215cdaaa2ef2c7edc54c6403716a6e800ef332ed86d16be48ad5&ipo=images"
          />
          <Card
            title="Recipie"
            description="Bla Bla Bla"
            calories="5000"
            type="dinner"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheatherlikesfood.com%2Fwp-content%2Fuploads%2F2015%2F05%2FDSC03691_1.jpg&f=1&nofb=1&ipt=00921f274e58215cdaaa2ef2c7edc54c6403716a6e800ef332ed86d16be48ad5&ipo=images"
          />
          <Card
            title="Recipie"
            description="Bla Bla Bla"
            calories="5000"
            type="dinner"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheatherlikesfood.com%2Fwp-content%2Fuploads%2F2015%2F05%2FDSC03691_1.jpg&f=1&nofb=1&ipt=00921f274e58215cdaaa2ef2c7edc54c6403716a6e800ef332ed86d16be48ad5&ipo=images"
          />
          {/*<!--Shows overview drink details and works as a selection-->*/}
          <Card
            title="Drink"
            description="Best drink ever!"
            calories="1000"
            type="dinner"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VVKcNyqJMGbMrW-u2lKStAHaEo%26pid%3DApi&f=1&ipt=40124abb2e8e4f5e0bac3b38ef1e02a42fd14524aeeab3b88ae5a23d3a50f9d1&ipo=images"
          />
        {/* </div> */}
        </div>

      </main>
    </>
  );
}
