import React from 'react';

const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <div className="search">
      <input onChange={changeHandler} type="search" placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
