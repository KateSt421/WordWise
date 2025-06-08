import { Link } from "react-router";
import logo from "./logoW.jpg";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <div className="header-box">
        <a className="logo-box" href="#">
          <img className="logo" src={logo} alt="WordWise" />
          <h1 className="logo-title">WordWise</h1>
        </a>
        <div />
        <div className="header-navy">
          <Link to="/">Home</Link>
          <Link to="/card">Card</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
