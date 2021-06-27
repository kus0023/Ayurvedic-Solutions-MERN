import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicInput from "./DynamicInput";

function AddDisease() {
  const [isVisible, setIsVisible] = useState(true);
  const methods = useForm({
    defaultValues: {},
  });

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = (data) => {
    console.log(data);
    toggleVisibility();
  };

  return (
    <div className="container">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <span>Name: </span>
          <input
            {...methods.register("name")}
            placeholder="Name of the Disease"
          />
          <button className="white blue-text btn-flat">Check</button>

          {isVisible && (
            <div>
              <div className="input-field">
                <textarea
                  id="description"
                  className="materialize-textarea"
                  {...methods.register("description")}
                ></textarea>
                <label htmlFor="description">Description of the disease</label>
              </div>

              <DynamicInput name="commonName" title="Common Name" />
              <DynamicInput name="causes" title="Causes" />
              <DynamicInput name="symptoms" title="Symptoms" />

              <button type="submit" className="btn red">
                Add Disease
              </button>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

export default AddDisease;
