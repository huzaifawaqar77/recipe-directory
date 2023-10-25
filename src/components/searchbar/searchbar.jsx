import { useState } from "react";
import "./searchbar.css";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // add the search to query params
    window.location = `/search/?q=${search}`;
  };
  return (
    <form onSubmit={handleSearch} className="search">
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
