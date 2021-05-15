import React from "react";
import PropTypes from "prop-types";

function MyGridView({ data, column, children }) {
  const rows = Math.ceil(data.length / column);
  const newList = [];
  for (let i = 0; i < rows; i++) {
    newList[i] = new Array();
    for (let j = 0; j < column; j++) {
      if (data[column * i + j]) newList[i].push(data[column * i + j]);
    }
  }

  console.log(newList, rows);

  return (
    <>
      {newList.map((row, r) => (
        <div key={r} className="row">
          {row.map((col, c) => (
            <div key={c} className={`col s12 m${Math.round(12 / column)}`}>
              {React.cloneElement(children, { data: col })}
            </div>
          ))}
        </div>
      ))}
    </>
  );

}

MyGridView.defaultProps = {
  column: 3,
};

MyGridView.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default MyGridView;
