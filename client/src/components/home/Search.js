import React from "react";
import { CSSTransition } from "react-transition-group";
import "./css/Search.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions/Search.action";

function Search() {
  const { handleSubmit, register, setValue } = useForm();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setValue(e.target.name, e.target.value);
    handleSubmit(submitForm)();
  };
  const submitForm = async (data) => {
    const search = data.search.trim();
    await dispatch(fetchData(data.type, search));
  };
  return (
    <div className="container search-page">
      <CSSTransition appear={true} in={true} timeout={1000} classNames="search">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="row">
            <div className="col m4">
              <label>Select For Search</label>
              <select
                defaultValue="product"
                className="browser-default"
                {...register("type")}
                onChange={onChangeHandler}
              >
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
                name="search"
                {...register("search")}
                onChange={onChangeHandler}
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
