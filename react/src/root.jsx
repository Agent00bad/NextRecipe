
import { Outlet , useLocation} from "react-router-dom"
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import { useEffect, useState } from "react"
import { fetchApiEdemam } from "./JS/fetchApiEdamam"
import { fetchApiSpoonacular } from "./JS/fetchApiSpoonacular"




export default function Root() {
  const [onFilterPage,setOnFilterPage] = useState(false)
  const location = useLocation();

  useEffect(

  ()=>{
    function setBool(){
      
    }
    let boolValue;
    if(location.pathname == "/filter"){
      boolValue = true
    }
    else{boolValue = false}
    setOnFilterPage(boolValue)
    console.log(onFilterPage)
    },[location.pathname])

  const [activeFilters, setActiveFilters] = useState([]);
  return (
    <div className="root">
      <header>
        <p>{onFilterPage}</p>
        <Header onFilterPage = {onFilterPage}/>
      </header>
      <main>
        <div>
          <Outlet context={[activeFilters, setActiveFilters]} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
