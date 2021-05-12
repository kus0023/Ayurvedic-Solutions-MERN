import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SearchResultItem from "./SearchResultItem";
import "./css/SearchResult.css";
import { connect } from "react-redux";

class SearchResult extends Component {
  render() {
    return (
      <div className="container searchresult">
        <div className="collection">
          <TransitionGroup>
            {this.props.list.map((item, i) => {
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
});

export default connect(mapStateToProps)(SearchResult);
