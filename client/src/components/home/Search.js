import React, { useEffect } from "react";
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

  useEffect(() => {
    var elem = document.querySelector("select");
    var instance = window.M.FormSelect.init(elem, {});

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="container search-page">
      <CSSTransition appear={true} in={true} timeout={1000} classNames="search">
        <form
          className="search-form z-depth-3 "
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="row valign-wrapper">
            <div className="col s4 m3">
              {/* <label>{"_"} </label> */}
              <select
                className="my-select "
                defaultValue="product"
                {...register("type")}
                onChange={onChangeHandler}
              >
                <option value="product">Product</option>
                <option value="disease">Disease</option>
              </select>
            </div>

            <div className="col s8 m9">
              <div className="input-field  ">
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
          </div>
        </form>
      </CSSTransition>
    </div>
  );
}

export default Search;
