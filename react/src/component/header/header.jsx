import "../../CSS/headerfooter.css"
import "../../CSS/search_bar.css"
import menuicon from "../../Images/menu-icon.png"
import logo from "../../Images/perfectpair_transparent.png"
import userIcon from "../../Images/user-icon.png"

export default function Header()
{
    return(
        <>
        <header> 
    <div className="header">
        <a href="filter.html" className="menu-link"><img src={menuicon}/></a>
        <a href="index.html" className="logo-link"><img src={logo}/></a>
        <a href="loading.html" className="login-link"><img src={userIcon}/></a>
    </div> 
    <div className="topnav">
        <div className="search-container">
            <input type="text" placeholder="Search.."/>
           <button type="submit"><img className="search-button" src="Images/Search_Button.png"/><i className="fa fa-search"></i></button>
        </div>
    </div>
</header>
        </>
    )
}