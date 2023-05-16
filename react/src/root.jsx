
import { Outlet , useLocation} from "react-router-dom"
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import { useEffect, useState } from "react"
import { fetchApiEdemam } from "./JS/fetchApiEdamam"
import { fetchApiSpoonacular } from "./JS/fetchApiSpoonacular"

export default function Root() {
  const [activeFilters, setActiveFilters] = useState([]);
  
  function setSearch(input, oldState)
  {
    setActiveFilters(filters => filters.filter(oldFilter => oldFilter != oldState))
    if(input){
      setActiveFilters(oldfilters => [...oldfilters, input]);
    }
  } 
  return (
    <div className="root">
      <header>
        <Header setSearch={setSearch}/>
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
