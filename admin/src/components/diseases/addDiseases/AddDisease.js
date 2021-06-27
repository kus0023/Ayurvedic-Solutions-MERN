import React, { useState } from "react";
import { useForm } from "react-hook-form";
function AddDisease() {
  const [isVisible, setIsVisible] = useState(true);
  const { register, handleSubmit } = useForm();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(data);
    toggleVisibility();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Name: </span>
        <input {...register("name")} placeholder="Name of the Disease" />
        <button className="white blue-text btn-flat">Check</button>

        {isVisible && (
          <div>
            <div className="input-field">
              <textarea
                id="description"
                className="materialize-textarea"
                {...register("description")}
              ></textarea>
              <label htmlFor="description">Description of the disease</label>
            </div>

            <button type="submit" className="btn red">
              Add Disease{" "}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddDisease;
