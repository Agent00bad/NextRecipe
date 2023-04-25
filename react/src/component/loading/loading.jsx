import logo from "../../Images/logo.png"
// import "../../CSS/loading.css"
import "../../SCSS/loading.scss"


export default function Loading(){
    return(
        <>
        <div className="container">
        <img className="loading-logo" src={logo} alt="Logo"/>
        </div>
    </>
    )
}