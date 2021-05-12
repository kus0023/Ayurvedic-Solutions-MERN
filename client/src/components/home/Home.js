import React from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import "./css/Home.css";

function Home() {
  return (
    <div className=" ">
      <div className="row amber darken-2" style={{ padding: 10 }}>
        <Search />
      </div>
      <div className="row">
        <SearchResult />
      </div>
    </div>
  );
}

export default Home;
