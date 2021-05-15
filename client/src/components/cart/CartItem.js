import React from "react";
import { Link } from "react-router-dom";

function CartItem({ item, handleDelete }) {
  const { product } = item;
  return (
    <div className="row collection-item">
      <div className="col s12 m2">
        <img
          className="responsive-img"
          alt={product?.name}
          src={product?.image}
        />
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="col s8 m8">
          <h6 className="truncate">{product.name}</h6>
        </div>
      </Link>

      <div className="col s4 m2 ">
        <button
          className="btn wave-effect red right "
          onClick={() => handleDelete(item._id)}
        >
          <i className="material-icons ">close</i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
