import React from 'react';

function SearchParams({ searchTerm, handleChange }) {
  return (
    <div>
        <form>
            <label>Filter Foods: </label>
                <input id='foods' type='text' value={searchTerm} onChange={handleChange} placeholder='Find food by name...'></input>
        </form>
    </div>
  );
}

export default SearchParams;