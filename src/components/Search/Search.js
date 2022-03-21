import React from "react";
import SearchIcon from "../../search-icon.svg";

import "./Search.scss";

const Search = ({ searchQuery, setSearchQuery, setMovies }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search">
      <div className="search__title">Search</div>
      <div className="search__box">
        <input
          name="searchQuery"
          className="search__box-input"
          value={searchQuery}
          onChange={handleChange}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => setSearchQuery(searchQuery)}
        />
      </div>
    </div>
  );
};

export default Search;
