import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyGridView from "../../helpers/view/MyGridView";
import { getDisease } from "../../redux/disease/diseaseAction";
import Disease from "./Disease";

function DiseaseList() {
  const diseaseState = useSelector((state) => state.disease);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisease());
    return () => {};
  }, [dispatch]);
  console.log(diseaseState);

  return (
    <div className="container">
      <MyGridView data={diseaseState.diseaseList} column={5}>
        <Disease />
      </MyGridView>

      {/* Floating add button to add new disease */}
      <div class="fixed-action-btn">
        <Link
          to="/disease/add"
          class="btn-floating btn-large red modal-trigger"
        >
          <i class="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default DiseaseList;
