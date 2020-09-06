import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="search-box__container">
      <form>
        <input type="text" className="form-control search-box__input" placeholder="Enter username + press Enter" />
      </form>
    </div>
  );
};

export default SearchBox;
