import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAuth } from "../../redux/users/userAction";

function Home(props) {
  let Cmp = props.Cmp;
  const history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    async function fetchData() {
      await dispatch(getAuth());
    }
    fetchData();
  }, [dispatch]);

  if (!auth.isReady) {
    return <h1>Loading...</h1>;
  }

  if (!auth.user) {
    history.push("/login");
  }

  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Home;
