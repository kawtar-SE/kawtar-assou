import { Link, NavLink } from "react-router-dom";


import "./Navbar.css"
function Navbar() {

  return (
    <nav>
        <Link to="/" className="title">
          Movlie
        </Link>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <ul>
            <li>
          <NavLink to="/Home" class="active">
            Home
          </NavLink>
          </li>
          <li>
          <NavLink to="/Popular" >
            Popular
          </NavLink>
          </li>
          <li>
          <NavLink to="/Top-Rating" >
            Top Rating
          </NavLink>
          </li>
          </ul>
        <button className="button">
          Sign in
        </button>
        
    </nav>
  );
}
export default Navbar;