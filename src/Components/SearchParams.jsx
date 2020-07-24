import React from "react";
import './Foods.css'

function SearchParams({ searchTerm, handleChange }) {
  return (
    <div>
      <form>
        <label className="filterLabel">Filter Foods: </label>
        <br />
        <input
          id="foods"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Find food by name..."
        ></input>
      </form>
    </div>
  );
}

export default SearchParams;
