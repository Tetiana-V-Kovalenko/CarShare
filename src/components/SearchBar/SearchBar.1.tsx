"use client";
import { useState } from "react";
import SearchManufacturer from "../SearchManufacturer";
import { SearchButton } from "./SearchButton";

export const SearchBar = () => {
  const [manufacturer, setManufaturer] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufaturer}
        />
        <SearchButton additionalClasses=" sm:hidden md:block " />
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png" alt="model icon" width={25} height />
      </div>
    </form>
  );
};
