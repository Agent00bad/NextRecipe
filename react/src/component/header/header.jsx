import "../../SCSS/headerfooter.scss";
import "../../SCSS/search_bar.scss";
import menuicon from "../../Images/menuIcon.png";
import crossicon from "../../Images/cross.png";
import logo from "../../Images/perfectpair_transparent.png";
import userIcon from "../../Images/user-icon.png";
import searchImage from "../../Images/Search.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({ setSearch }) {
  const [input, setInput] = useState("");
  const [oldInput, setOldInput] = useState("");
  let tempLocation;
  const [onFilterPage, setOnFilterPage] = useState(false);

  function inputHandler(event) {
    setInput(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    setSearch(input, oldInput);
    setOldInput(input);
  }
  useEffect(() => {
    tempLocation = location.pathname;
    if (tempLocation == "/filter") {
      setOnFilterPage(true);
    } else {
      setOnFilterPage(false);
    }
  }, [useLocation().pathname]);
  function saveLocation() {
    tempLocation = useLocation().pathname;
  }
  return (
    <div className="headerfooter">
      <header>
        <div className="header">
          {onFilterPage == true ? (
            <Link to="/" className="menu-link">
              <div className="filterBox">
                <img src={crossicon} id="cross"/>
              </div>
            </Link>
          ) : (
            <Link to="/filter" className="menu-link">
              <div className="filterBox">
                <img src={menuicon} />
              </div>
            </Link>
          )}

          <Link to="/">
            <div className="logoBox">
              <img src={logo} className="logo"></img>
            </div>
          </Link>
          {/* <Link to="loading" className="login-link"><img src={userIcon}/></Link> */}
          <form onSubmit={(e) => submitHandler(e)} className="pop">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search.."
                onChange={(e) => inputHandler(e)}
              />
              <button type="submit">
                <img className="search-button" src={searchImage} />
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
