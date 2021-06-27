import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

function DynamicInput(props) {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: props.name,
  });

  return (
    <div className="card  ">
      <div className="container">
        <div className="card-title section">
          <span>{props.title}</span>
          <button
            type="button"
            className="btn green right"
            onClick={() => {
              append({ value: "" });
            }}
          >
            Add
          </button>
        </div>
        <div className="divider" />

        {fields.map((field, index) => (
          <div className="row" key={field.id}>
            <div className="col s12 m10">
              <input
                name={`${props.name}[${index}].value`}
                defaultValue={`${field.value}`}
                {...register(`${props.name}.${index}.value`)}
              />
            </div>
            <div className="col s12 m2">
              <button
                className="btn red"
                onClick={() => {
                  remove(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicInput;
