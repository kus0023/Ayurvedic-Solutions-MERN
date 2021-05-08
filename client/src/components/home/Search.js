import React from "react";
import { CSSTransition } from "react-transition-group";
import "./css/Search.css";

function Search() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <CSSTransition appear={true} in={true} timeout={1000} classNames="search">
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col m4">
              <label>Select For Search</label>
              <select className="browser-default">
                <option value="product">Product</option>
                <option value="disease">Disease</option>
              </select>
            </div>
            <div className="input-field col s8 ">
              <input
                id="search"
                placeholder="Search"
                type="text"
                className="validate"
                minLength={2}
              />
              <label htmlFor="search"></label>
            </div>
          </div>
        </form>
      </CSSTransition>
    </div>
  );
}

export default Search;
