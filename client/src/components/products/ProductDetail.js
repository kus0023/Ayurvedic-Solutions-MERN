import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneProduct } from "../../redux/actions/Product.action";
import "./css/ProductDetail.css";
import AddToCartButton from "./AddToCartButton";

function ProductDetail() {
  const productState = useSelector((state) => state.productState);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
    return () => {};
  }, [dispatch, id]);

  let scrollspyInstance = useRef(null);
  useEffect(() => {
    const elem = document.querySelector(".scrollspy");
    scrollspyInstance.current = window.M.ScrollSpy.init(elem, {
      top: 0,
      offset: 0,
    });

    // dispatch(getOneProduct(id));

    return () => {
      scrollspyInstance.current.destroy();
    };
  }, [scrollspyInstance]);

  return productState.isLoading ? (
    <h1 className="center">Loading...</h1>
  ) : (
    <>
      <div className="head">
        <div className="container ">
          <div className="row section ">
            <div className="col s12 m4">
              <img
                className="responsive-img"
                alt={productState.productDetail?.name}
                src={productState.productDetail?.image}
              />
            </div>

            <div className="col s12 m8">
              <h4>{productState.productDetail?.name}</h4>
              <div className="divider"></div>
              <p>
                Also Knows as: <b>common names</b>
              </p>
              <div>
                <AddToCartButton productId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />

      <div className="row">
        <div className="col hide-on-small-only m3 l2">
          <ul className="section table-of-contents">
            <li>
              <a href="#description">Description</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#doses">Doses</a>
            </li>
          </ul>
        </div>
        <div className="col s12 m9 l10">
          <div id="description" className="section scrollspy">
            <h3>Description</h3>
            <div className="divider"></div>
            <p>{productState.productDetail?.description}</p>
          </div>

          <div id="benefits" className="section scrollspy">
            <h3>Benefits</h3>
            <div className="divider"></div>
            <p>{productState.productDetail?.benefits}</p>
          </div>

          <div id="doses" className="section scrollspy">
            <h3>Doses</h3>
            <div className="divider"></div>
            <p>{productState.productDetail?.dose}</p>
          </div>

          <div id="empty-space"></div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
