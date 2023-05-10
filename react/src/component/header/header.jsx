import "../../SCSS/headerfooter.scss"
import "../../SCSS/search_bar.scss"

import menuicon from "../../Images/menu-icon.png"
import logo from "../../Images/perfectpair_transparent.png"
import userIcon from "../../Images/user-icon.png"
import searchImage from "../../Images/Search.png"
import {Link} from "react-router-dom"

export default function Header()
{
    return(
        <div className="headerfooter">
        <header> 
    <div className="header">
        <Link to="/filter" className="menu-link">
            <div className="filterBox">
                <img src={menuicon}/>
            </div>
        </Link>
        <Link to="/">
            <div className="logoBox">
                <img src={logo} className="logo"></img>
            </div>
        </Link>
        {/* <Link to="loading" className="login-link"><img src={userIcon}/></Link> */}
        <div className="search-container">
            <input type="text" placeholder="Search.."/>
           <button type="submit"><img className="search-button" src={searchImage}/></button>
        </div>
    </div> 

</header>
        </div>
    )
}