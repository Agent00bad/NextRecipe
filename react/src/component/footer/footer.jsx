import "../../SCSS/headerfooter.scss"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="headerfooter">
        <footer className="footer">
            <div className="contact">
        <Link to="/contact" >
              <b>Contact</b>
            </Link>
            </div>
            <div className="about">
            <Link to="/about">
            <b>About</b>
            </Link>
            </div>
        </footer>
        </div>
    )
}