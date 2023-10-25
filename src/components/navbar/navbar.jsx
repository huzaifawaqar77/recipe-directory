import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Recipe App</h1>
      </Link>
      <SearchBar />
      <Link to="/create">Create Recipe</Link>
    </nav>
  );
};

export default Navbar;
