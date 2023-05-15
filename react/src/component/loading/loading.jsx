import logo from "../../Images/logo.png";
import "../../SCSS/loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <div className="container">
        <img className="loading-logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
}
