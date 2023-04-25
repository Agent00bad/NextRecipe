// import "../../CSS/headerfooter.css"
// import "../../CSS/search_bar.css"

import "../../CSS/headerfooter.scss"
import "../../CSS/search_bar.scss"

import menuicon from "../../Images/menu-icon.png"
import logo from "../../Images/perfectpair_transparent.png"
import userIcon from "../../Images/user-icon.png"
import searchImage from "../../Images/Search_Button.png"
import {Link} from "react-router-dom"

export default function Header()
{
    return(
        <>
        <header> 
    <div className="header">
        <Link to="/filter" className="menu-link"><img src={menuicon}/></Link>
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
        </>
    )
}