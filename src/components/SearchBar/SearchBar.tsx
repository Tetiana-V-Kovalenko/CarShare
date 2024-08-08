"use client";

import React, { FormEvent, FormEventHandler, useState } from "react";
import SearchManufacturer from "../SearchManufacturer";
import { SearchButton } from "./SearchButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [manufacturer, setManufaturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      //maybe add error style
      return;
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufaturer}
        />
        <SearchButton additionalClasses="shrink-0 sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] left-[16px]"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model "
          className="searchbar__input"
        />
        <SearchButton additionalClasses=" shrink-0 sm:hidden" />
      </div>
      <SearchButton additionalClasses="shrink-0 max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
