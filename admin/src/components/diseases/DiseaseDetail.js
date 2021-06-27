import React from "react";
import { useParams } from "react-router";

function DiseaseDetail() {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
}

export default DiseaseDetail;
