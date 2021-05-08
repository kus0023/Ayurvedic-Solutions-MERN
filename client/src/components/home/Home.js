import React from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

function Home() {
  return (
    <div>
      <div className="row">
        <Search />
      </div>
      <div className="row">
        <SearchResult />
      </div>
    </div>
  );
}

export default Home;
