import { Link } from "react-router-dom";
import logo from "./logoW.jpg";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <div className="header-box">
        <Link className="logo-box" to="/">
          <img className="logo" src={logo} alt="WordWise" />
          <h1 className="logo-title">WordWise</h1>
        </Link>
        <div />
        <div className="header-navy">
          <Link className="link-navy" to="/">
            Home
          </Link>
          <Link className="link-navy" to="/card">
            Card
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
