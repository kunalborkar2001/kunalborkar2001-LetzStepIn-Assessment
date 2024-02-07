import React from 'react';
import "./SearchBar.css"

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add any logic here to handle the form submission, such as performing a search
  };

  return (
    <div className="searchBar">
      <div className="input-container">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search any city..." aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;
