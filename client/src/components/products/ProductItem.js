import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ProductItem({ product }) {
  const { url } = useRouteMatch();

  return (
    <>
      <Link
        to={`${url}/${product._id}`}
        className="collection-item avatar black-text"
      >
        <img src={product.image} alt={product.name} className="circle" />
        <span className="title">{product.name}</span>
        <p>{product.description}</p>
        <p datatype="link" className="secondary-content grey-text">
          {new Date(product.createdAt).toDateString()}
        </p>
      </Link>
    </>
  );
}

export default ProductItem;
