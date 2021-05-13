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

  //   let totalRow = Math.floor(data.length / column);
  //   let remainingElemets = data.length % column;

  //   //styling
  //   let colWidth = Math.round(12 / column);
  //   let colClass = "center col s12 m" + colWidth;

  //   let grid = [];
  //   let indexCount = 0;
  //   for (let row = 0; row < totalRow; row += 1) {
  //     let rowItem = [];
  //     for (let col = 0; col < column; col += 1) {
  //       let colItem = (
  //         <div className={colClass}>
  //           {React.cloneElement(children, {
  //             data: data[indexCount],
  //             key: indexCount,
  //           })}
  //         </div>
  //       );

  //       rowItem.push(colItem);
  //       indexCount += 1;
  //     }

  //     grid.push(<div className="row">{rowItem.map((e) => e)}</div>);
  //   }

  //   if (remainingElemets !== 0) {
  //     colWidth = Math.round(12 / remainingElemets);
  //     colClass = "center col s12 m" + colWidth;
  //     let rowItem = [];
  //     for (let col = 0; col < remainingElemets; col += 1) {
  //       let colItem = (
  //         <div className={colClass}>
  //           <component key={indexCount} data={data[indexCount]} />
  //         </div>
  //       );

  //       rowItem.push([colItem]);
  //       indexCount += 1;
  //     }

  //     grid.push([<div className="row">{rowItem.map((e) => e)}</div>]);
  //   }

  //   console.log(grid);

  //   return <>{grid.map((e) => e)}</>;
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
