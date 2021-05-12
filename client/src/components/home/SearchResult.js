import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SearchResultItem from "./SearchResultItem";
import "./css/SearchResult.css";
import { connect } from "react-redux";

class SearchResult extends Component {
  render() {
    let show = null;

    if (this.props.isLoading) {
      show = <h1>Loading...</h1>;
    } else if (this.props.query === "") {
      show = <h1>Enter search to get result</h1>;
    } else if (this.props.list.length === 0) {
      show = <h1>No result</h1>;
    }

    return (
      <div className="container searchresult">
        <div className="collection">
          <TransitionGroup>
            {show !== null
              ? show
              : this.props.list.map((item, i) => {
                  return (
                    <CSSTransition key={i} timeout={1000} classNames="item">
                      <SearchResultItem item={item.item} />
                    </CSSTransition>
                  );
                })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.searchState.list,
  isLoading: state.searchState.isLoading,
  query: state.searchState.query,
});

export default connect(mapStateToProps)(SearchResult);
