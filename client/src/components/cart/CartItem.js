import React from "react";

function CartItem({ item, handleDelete }) {
  return (
    <div className="row collection-item">
      <div className="col s10 m8 ">
        <h6 className="truncate">{item._id}</h6>
      </div>
      <div className="col right">
        <button
          className="btn wave-effect red "
          onClick={() => handleDelete(item._id)}
        >
          <i className="material-icons ">close</i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
