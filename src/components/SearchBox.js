import React from "react";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2 rounded-pill border-end-0 border"
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        onChange={handleChange}
      />
      {/*       <span className="input-group-append">
        <button
          className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3"
          type="button"
        >
          <i className="fa fa-search"></i>
        </button>
      </span> */}
    </form>
  );
};

export default SearchBox;
