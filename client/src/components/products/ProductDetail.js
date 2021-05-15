import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneProduct } from "../../redux/actions/Product.action";
import "./css/ProductDetail.css";

function ProductDetail() {
  const productState = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams();

  let scrollspyInstance = useRef(null);
  useEffect(() => {
    const elem = document.querySelector(".scrollspy");
    scrollspyInstance.current = window.M.ScrollSpy.init(elem, {
      top: 0,
      offset: 0,
    });

    dispatch(getOneProduct(id));

    return () => {
      scrollspyInstance.current.destroy();
    };
  }, [scrollspyInstance, dispatch, id]);

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
              <h2>{productState.productDetail?.name}</h2>
              <div className="divider"></div>
              <p>
                Also Knows as: <b>common names</b>
              </p>
              <div>
                <button className="btn-large orange waves-effect">
                  <i className="material-icons right">add</i> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <p>{productState.productDetail?.doses}</p>
          </div>

          <div id="empty-space"></div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
