import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart.js";
import CartItem from "./CartItem";

describe("CART component", () => {
  let container;

  beforeEach(() => {
    container = shallow(<Cart />);
  });

  it("test for only first div contains cart class", () => {
    expect(container.first("div").hasClass("cart")).toBeTruthy();
    expect(container.find(".cart").length).toBe(1);
  });

  it("should have .container below .cart", () => {
    expect(container.find(".cart").children(".container").length).toBe(1);
    expect(container.find(".container").length).toBe(1);
  });

  it("should find TransitionGroup under .container", () => {
    expect(container.find("TransitionGroup").length).toEqual(1);
    expect(
      container.find(".container").children("TransitionGroup").length
    ).toEqual(1);
  });

  // it("should find TransitionGroup with class .collection", () => {
  //   expect(container.find("ul").hasClass("collection")).toBeTruthy();
  // });

  it("should render <CartItem />", () => {
    expect(container.containsMatchingElement(<CartItem />)).toEqual(true);
  });
});
