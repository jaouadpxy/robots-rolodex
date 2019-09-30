import React from 'react';

const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <div className="search">
      <input
        className="mv3 db pa3 mr-auto ml-auto"
        onChange={changeHandler}
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBox;
