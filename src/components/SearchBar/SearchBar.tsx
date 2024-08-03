"use client";

import { useState } from "react";
import SearchManufacturer from "../SearchManufacturer";

const SearchBar = () => {
  const onSubmit = () => {};
  const [manufacturer, setManufaturer] = useState("");
  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufaturer}
        />
      </div>
    </form>
  );
};
export default SearchBar;
