import React, { useState } from "react";
import SearchIcon from "../../search-icon.svg";

import "./Search.scss";

const Search = ({ setSearchQuery, setMovies }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search">
      <div className="search__title">Search</div>
      <div className="search__box">
        <input
          name="searchQuery"
          className="search__box-input"
          value={query}
          onChange={handleChange}
        />
        {/* <button
          onClick={() => {
            query !== "" && setSearchQuery(query);
          }}
        >
          Search
        </button> */}
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            query !== "" && setSearchQuery(query);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
