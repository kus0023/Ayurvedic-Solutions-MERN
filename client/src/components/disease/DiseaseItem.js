import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function DiseaseItem({ disease }) {
  const { url } = useRouteMatch();

  return (
    <>
      <Link
        to={`${url}/${disease._id}`}
        className="collection-item avatar black-text"
      >
        <img src={disease.image} alt={disease.name} className="circle" />
        <span className="title">{disease.name}</span>
        <p>{disease.description}</p>
        <p datatype="link" className="secondary-content">
          {/* <i className="material-icons">grade</i> */}createdAt
        </p>
      </Link>
    </>
  );
}

export default DiseaseItem;
