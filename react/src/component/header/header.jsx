import "../../SCSS/headerfooter.scss"
import "../../SCSS/search_bar.scss"
import menuicon from "../../Images/menu-icon.png"
import crossicon from "../../Images/cross-icon.png"
import logo from "../../Images/perfectpair_transparent.png"
import userIcon from "../../Images/user-icon.png"
import searchImage from "../../Images/Search_Button.png"
import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react";

export default function Header()
{
    let tempLocation;
    const [onFilterPage,setOnFilterPage] = useState(false)
    
    useEffect( () => {
        tempLocation = location.pathname
        if(tempLocation == "/filter"){
            setOnFilterPage(true)
        }
        else{
            setOnFilterPage(false)
        }
    },
    [useLocation().pathname]
    )

    function saveLocation(){
        tempLocation = useLocation().pathname
    }

    return(
        <div className="headerfooter">
        <header> 
    <div className="header">
    {
        onFilterPage == true ? <Link to="/" className="menu-link"><img src={crossicon}/></Link> : <Link to="/filter" className="menu-link"><img src={menuicon}/></Link>
    }

        <Link to="/" className="logo-link"><img src={logo}/></Link>
        <Link to="loading" className="login-link"><img src={userIcon}/></Link>
    </div> 
    <div className="topnav">
        <div className="search-container">
            <input type="text" placeholder="Search.."/>
           <button type="submit"><img className="search-button" src={searchImage}/></button>
        </div>
    </div>
</header>
        </div>
    )
}
