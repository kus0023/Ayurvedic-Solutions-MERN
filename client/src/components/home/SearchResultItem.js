import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SearchResultItem({ item }) {
  const searchState = useSelector((state) => state.searchState);
  return (
    <>
      <Link to={`${searchState.type}/${item._id}`} className="collection-item ">
        <h4 className="black-text">{item.name}</h4>
        <p className="grey-text">{item.description}</p>
        {/* <p datatype="link" className="secondary-content">
          {item.createdAt}
        </p> */}
      </Link>
    </>
  );
}

export default SearchResultItem;
