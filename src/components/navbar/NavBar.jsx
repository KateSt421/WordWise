import { Link } from "react-router-dom";
import logo from "./letter_w_alphabet_icon_263122.ico";
import "./navBar.css";

function NavBar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/game", label: "Card" },
  ];

  return (
    <div>
      <div className="header-box">
        <Link className="logo-box" to="/">
          <img className="logo" src={logo} alt="WordWise" />
          <h1 className="logo-title">WordWise</h1>
        </Link>
        <div />
        <div className="header-navy">
          {navLinks.map((link, index) => (
            <Link key={index} className="link-navy" to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
