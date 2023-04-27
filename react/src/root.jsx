import { Outlet } from "react-router-dom"
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import { useEffect, useState } from "react"
import { fetchEdemamData } from "./JS/fetchApiData"
export default function Root()
{
    const [data, setData] = useState(null);
    const [key, setKey] = useState("9ed58f54f91135c58c96fd426518175a");
    const [url,setUrl] = useState("https://api.edamam.com/api/recipes/v2?type=public&app_id=67dcdfc6&app_key=9ed58f54f91135c58c96fd426518175a&mealType=Breakfast");
    useEffect(() => {
        const getData = async () =>{
            const result = await fetchEdemamData();
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