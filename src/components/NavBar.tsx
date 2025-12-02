
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Pelo Discos 💿
      </Link>

      <ul className="navbar-links">
        <li><Link to="/category/rock">Rock</Link></li>
        <li><Link to="/category/pop">Pop</Link></li>
        <li><Link to="/category/jazz">Jazz</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;



