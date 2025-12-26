import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"; 
import "./NavBar.css";

function NavBar() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => 
    isActive ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Pelo Discos</Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/category/rock" className={navLinkClassName}>Rock</NavLink>
          </li>
          <li>
            <NavLink to="/category/pop" className={navLinkClassName}>Pop</NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;