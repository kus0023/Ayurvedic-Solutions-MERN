import React, { Component } from "react";
import DiseaseItem from "./DiseaseItem";
import "./css/DiseaseList.css";

//actions
import { getDiseases } from "../../redux/actions/Disease.action";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SwitchTransition } from "react-transition-group";

const limit = 3;
class DiseaseList extends Component {
  componentDidMount() {
    this.props.getDiseases(1, limit);
  }

  handleNextPage = () => {
    const { pagination } = this.props;

    if (pagination?.next) {
      this.props.getDiseases(pagination.next.page, limit);
    }
  };

  handlePrevPage = () => {
    const { pagination } = this.props;
    if (pagination?.prev) {
      this.props.getDiseases(pagination.prev.page, limit);
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
            {this.props.diseases?.map((disease, i) => (
              <SwitchTransition key={i}>
                <CSSTransition
                  appear={true}
                  key={disease._id}
                  timeout={500}
                  classNames="disease-item"
                >
                  <div>
                    <DiseaseItem disease={disease} />
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
  const { isLoading, result } = state.diseaseState;

  return {
    isLoading,
    pagination: result?.pagination,
    diseases: result?.diseases,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDiseases: (page, limit) => dispatch(getDiseases(page, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseList);
