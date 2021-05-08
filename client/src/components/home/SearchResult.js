import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SearchResultItem from "./SearchResultItem";
import "./css/SearchResult.css";

class SearchResult extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    const add = setInterval(() => {
      this.setState((state) => {
        const newList = [...state.list, 1];

        return {
          list: newList,
        };
      });
    }, 2000);

    setTimeout(() => {
      clearInterval(add);
      const del = setInterval(() => {
        this.setState((state) => {
          // eslint-disable-next-line
          const newList = state.list.filter((e, i) => i != 0);

          return {
            list: newList,
          };
        });
      }, 2000);

      setTimeout(() => {
        clearInterval(del);
      }, 10000);
    }, 10000);
  }

  render() {
    return (
      <div className="container ">
        <div className="collection">
          <TransitionGroup>
            {this.state.list?.map((e, i) => {
              return (
                <CSSTransition key={i} timeout={1000} classNames="item">
                  <SearchResultItem />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default SearchResult;
