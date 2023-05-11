import "../../SCSS/headerfooter.scss"
import "../../SCSS/search_bar.scss"

import menuicon from "../../Images/menu-icon.png"
import logo from "../../Images/perfectpair_transparent.png"
import userIcon from "../../Images/user-icon.png"
import searchImage from "../../Images/Search_Button.png"
import {Link, useLocation} from "react-router-dom"
import { useEffect } from "react";



export default function Header(onFilterPage)
{

    return(
        <div className="headerfooter">
        <header> 
    <div className="header">
{
    onFilterPage == true ? <p>On filter page</p> : <Link to="/filter" className="menu-link"><img src={menuicon}/></Link>
}


{/* <button onClick={ClickMe}>Click Me</button> */}  

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


// function usePageViews() {
//   let location = useLocation()

//   useEffect(
//     () => {
//       ga.send(['pageview', location.pathname])
//     },
//     [location]
//   )
// }

// function App() {
//   usePageViews()
//   return <Switch>{/* your routes here */}</Switch>
// }