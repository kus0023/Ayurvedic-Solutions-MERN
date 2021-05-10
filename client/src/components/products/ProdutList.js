import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./css/ProductList.css";

//actions
import { getProducts } from "../../redux/actions/Product.action";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SwitchTransition } from "react-transition-group";

const limit = 3;
class ProdutList extends Component {
  componentDidMount() {
    this.props.getProducts(1, limit);
  }

  handleNextPage = () => {
    const { pagination } = this.props;

    if (pagination?.next) {
      this.props.getProducts(pagination.next.page, limit);
    }
  };

  handlePrevPage = () => {
    const { pagination } = this.props;
    if (pagination?.prev) {
      this.props.getProducts(pagination.prev.page, limit);
    }
  };

  render() {
    const { pagination } = this.props;
    if (!pagination) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="container section ">
        {/* pagination */}
        <div className="row valign-wrapper center">
          <div
            className="page-box col s4 m3 btn white black-text waves-effect waves-orange "
            disabled={pagination?.prev ? false : true}
            onClick={this.handlePrevPage}
          >
            <h4 className="flow-text ">
              <span className="left">Prev</span>
              <i className="material-icons rotate-left">double_arrow</i>
            </h4>
          </div>
          <div className="current-page col s4 m6 center-align ">
            <h2 className=" orange-text">{pagination?.current}</h2>
          </div>
          <div
            className="page-box col s4 m3 waves-effect waves-orange btn white black-text"
            disabled={pagination?.next ? false : true}
            onClick={this.handleNextPage}
          >
            <h4 className="flow-text">
              <i className="material-icons">double_arrow</i>
              <span className="right">Next</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <TransitionGroup className="collection">
            {this.props.products?.map((product, i) => (
              <SwitchTransition key={i}>
                <CSSTransition
                  appear={true}
                  key={product._id}
                  timeout={500}
                  classNames="product-item"
                >
                  <div>
                    <ProductItem product={product} />
                  </div>
                </CSSTransition>
              </SwitchTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, result } = state.productState;

  return {
    isLoading,
    pagination: result?.pagination,
    products: result?.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (page, limit) => dispatch(getProducts(page, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdutList);
