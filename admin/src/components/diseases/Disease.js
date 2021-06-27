import React from "react";
import { Link } from "react-router-dom";

function Disease({ data }) {
  return (
    <Link to={"/disease_detail/" + data._id}>
      <div class="card">
        <span class="card-title">{data.name}</span>
      </div>
    </Link>
  );
}

export default Disease;
