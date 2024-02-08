import React, { useState } from 'react';
import "./SearchBar.css"
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchValue.trim() !== "") {
      // Add any logic here to handle the form submission, such as performing a search
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="searchBar">
      <div className="input-container">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search any city..."
            aria-label="Search"
            value={searchValue}
            onChange={handleChange}
            required
          />
          <Link to={searchValue.trim() !== "" ? "/category" : ""}>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
