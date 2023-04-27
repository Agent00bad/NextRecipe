import { Outlet } from "react-router-dom"
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import { useEffect, useState } from "react"
import { fetchApiEdemam } from "./JS/fetchApiEdamam"
export default function Root()
{
    const filterInput = ["Breakfast", "Lunch"]
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () =>{
            const result = await fetchApiEdemam(filterInput,);
            setData(result);
        }
        getData();
        console.log(data);
    },[])
    return(
        <div className="root">
            <header>
                <Header/>
            </header>
            <main>
                {data && 
                <p>{data.length}</p>
                }
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )

}