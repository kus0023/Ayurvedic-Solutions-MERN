import React from "react";
import { Link } from "react-router-dom";

function SearchResultItem() {
  return (
    <>
      <Link to="" className="collection-item avatar">
        <img
          src="https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="circle"
        />
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
        <button datatype="link" className="secondary-content">
          <i className="material-icons">grade</i>
        </button>
      </Link>
    </>
  );
}

export default SearchResultItem;
