import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      {/* Title */}
      <span className="title">
        Movlie
      </span>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/Home" className="item">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Popular" className="item">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/TopRating" className="item">Top Rating</NavLink>
        </li>
        <li>
          <NavLink to="/Signin">
            <button className="button">Sign in</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
