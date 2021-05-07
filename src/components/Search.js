import React from 'react';

const Search = ({ searchChange }) => {
  return (
    <div className="search-box">
      <input
        className="input is-rounded"
        type="search"
        placeholder="Search.."
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
