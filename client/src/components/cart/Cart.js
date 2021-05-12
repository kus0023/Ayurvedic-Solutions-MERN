import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  deleteCartItem,
  fetchCartItems,
} from "../../redux/actions/Cart.action";
import CartItem from "./CartItem";

function Cart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);

  useEffect(() => {
    dispatch(fetchCartItems());
    return () => {};
  }, [dispatch]);

  const handleDelete = (cartId) => {
    dispatch(deleteCartItem(cartId));
  };

  if (cartState.isLoading) {
    return <h1 className="center">Loading</h1>;
  }

  return (
    <div className="cart">
      <div className="container">
        <TransitionGroup className="collection">
          {cartState.list.map((item, i) => (
            <CSSTransition classNames="cart-item" key={i} timeout={500}>
              <CartItem item={item} handleDelete={handleDelete} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Cart;
