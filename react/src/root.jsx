import { Outlet } from "react-router-dom"
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import { useEffect, useState } from "react"
import { fetchApiEdemam } from "./JS/fetchApiEdamam"
import { fetchApiSpoonacular } from "./JS/fetchApiSpoonacular"
export default function Root()
{
    const filterInput = ["Breakfast", "Lunch"]
    const [data, setData] = useState(null);
    const [wines, setWines] = useState(null);
    useEffect(() => {
        const getData = async () =>{
            const result = await fetchApiEdemam(filterInput);
            setData(result);
            const wineResult = await fetchApiSpoonacular("chicken");
            setWines(wineResult);
        }
        getData();
        console.log(wines);
    },[])
    return(
        <div className="root">
            <header>
                <Header/>
            </header>
            <main>
                { wines && 
                <div>
                    <Outlet/>
                    <h2>{wines.title}</h2>
                    <p>{wines.pairingText}</p>
                    <img src={wines.imageUrl} alt="" />
                </div>
                }
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )

}