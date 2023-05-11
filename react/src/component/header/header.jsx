import "../../SCSS/headerfooter.scss"
import "../../SCSS/search_bar.scss"

import menuicon from "../../Images/menu-icon.png"
import logo from "../../Images/perfectpair_transparent.png"
import userIcon from "../../Images/user-icon.png"
import searchImage from "../../Images/Search_Button.png"
import {Link} from "react-router-dom"
import { useState  } from "react"

export default function Header({setSearch})
{

    const [input, setInput] = useState("");
    const [oldInput, setOldInput] = useState("");
    
    function inputHandler(event)
    {
        setInput(event.target.value)
    }
    function submitHandler(event)
    {
        event.preventDefault();
        setSearch(input,oldInput);
        setOldInput(input);
    }
    return(
        <div className="headerfooter">
        <header> 
    <div className="header">
        <Link to="/filter" className="menu-link"><img src={menuicon}/></Link>
        <Link to="/" className="logo-link"><img src={logo}/></Link>
        <Link to="loading" className="login-link"><img src={userIcon}/></Link>
    </div> 
    <div className="topnav">
        <div className="search-container">
            <form onSubmit={(e) => submitHandler(e)}>
            <input type="text" placeholder="Search.." onChange={(e) => inputHandler(e)}/>
           <button type="submit"><img className="search-button" src={searchImage}/></button>
            </form>
        </div>
    </div>
</header>
        </div>
    )
}