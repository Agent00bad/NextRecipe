import "../../SCSS/index.scss";
import {useState, useEffect, useRef} from "react"
// import "../../SCSS/HeaderFooter.scss";
import { Card } from "./card";
import { ActiveFilter } from "./activeFilter";
import { fetchApiEdemam } from "../../JS/fetchApiEdamam";
import logo from "../../Images/logo.png";
import { useOutletContext } from "react-router-dom";
import menuIcon from "../../Images/menu-icon.png";
import perfectpair_transparent from "../../Images/perfectpair_transparent.png";
import userIcon from "../../Images/user-icon.png";
import Loading from "../loading/loading"
import Filter from "../filter/filter.jsx";
import "../../SCSS/button.scss";

export default function Index() {
  
const[activeFilter, setActiveFilters] = useOutletContext();

 const [data, setData] = useState([]);
  // const[loadMore, setLoadMore] = useState(100);
  const[to, setTo] = useState(15);

  function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, [])

    return size;
  }
  const width = useWindowSize();


  useEffect(() => {
    const getData = async () =>{
      const result = await fetchApiEdemam(activeFilter,0, to);
      setData(result);
    }
    getData();
  },[to, activeFilter])


  return (
    <>
    <div className="index">
      <main>
        {/* <!--Shows overview recipe details and works as a selection--> */}
       {/* <div className="recipe-drink-flex"> */}
          {/* <!--Displays active filters--> */}
            <div className="stickySpace" id="stickySpace" style={{display: (width > 1024) ? 'none' : 'block'}}>
            <ActiveFilter
                filters={activeFilter}
                header={"Active Filter"}
              />
              </div>
              <div className="stickySpace filterDesktop" id="stickySpace" style={{display: (width < 1024) ? 'none' : 'block'}}>
                <Filter  onMobile={false}/>
              </div>
          <div className="CardSpace" id="CardSpace">  {/*Ifall vi vill flytta alla kort*/}
          {data && data[0] != undefined ?
          <div className="card-mapping">
          {data.map((obj) => {
            return(
              <div className="inner-mapped-card">
             <Card 
             prop={obj}
             title={obj.recipe.label}
             description={obj.recipe.ingredients}
             type={obj.recipe.mealType[0]}
             calories={obj.recipe.calories}
             image={obj.recipe.image}
             />
            </div>
            )
          })}
          <div className="filterandbutton">
            <button className="load-more" onClick={() => setTo(to + 15)}>Load more</button>
          </div>
          </div>
        :
        <Loading/>
      }
        </div>
                
      </main>
    </div>
    </>
  );
}

