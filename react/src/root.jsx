import { Outlet } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import { useEffect, useState } from "react";
import { fetchApiEdemam } from "./JS/fetchApiEdamam";
import { fetchApiSpoonacular } from "./JS/fetchApiSpoonacular";

export default function Root() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApiEdemam();
      setData(result);
    };
    getData();
    console.log(data)
  }, [activeFilters]);
  return (
    <div className="root">
      <header>
        <Header />
        {data && 
        <div>
            <p>Datan är laddad</p>
        </div>}
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
