import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  deleteCartItem,
  fetchCartItems,
} from "../../redux/actions/Cart.action";
import CartItem from "./CartItem";
import "./css/Cart.css";

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

  // if (cartState.isLoading) {
  //   return <h1 className="center">Loading</h1>;
  // }

  return (
    <div className="cart">
      <div className="container">
        <div className="collection">
          <TransitionGroup>
            {cartState.list.map((item, i) => (
              <CSSTransition key={i} timeout={1000} classNames="cart-item">
                <CartItem item={item} handleDelete={handleDelete} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default Cart;
