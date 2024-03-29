import React from "react"
import "./Search.css";
import SearchUserCard from "./SearchUserCard";

const SearchComponents = () => {
  return (
    <div className="search">
      <div>
        <h1 className="px-3 pb-5">Search</h1>
        <input className="SearchInput" type="text" placeholder="Search" />
      </div>
      <hr/>
      <div className="px-3 pt-5">
        {[1,1,1].map((item)=><SearchUserCard/>)}
      </div>
    </div>
  )
};

export default SearchComponents;
