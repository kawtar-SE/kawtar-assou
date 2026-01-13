import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({isOpen}) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <NavLink to="/Home" className="side-item">Home</NavLink>
      <NavLink to="/Popular" className="side-item">Popular</NavLink>
      <NavLink to="/TopRating" className="side-item">Top Rating</NavLink>
      <NavLink to="/Signin" className="side-item">Sign In</NavLink>
    </div>
  );
}

export default Sidebar;
