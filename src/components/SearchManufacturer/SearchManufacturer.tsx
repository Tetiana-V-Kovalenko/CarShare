"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { ChangeEvent, useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: {
  setManufacturer: (manufaturer: string) => void;
  manufacturer: string;
}) => {
  const [query, setQuery] = useState("");

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className={"absolute top-[14px]"}>
            <Image
              src={"./car-logo.svg"}
              alt={"car logo"}
              className="ml-4"
              width={20}
              height={20}
            />
          </ComboboxButton>
          <ComboboxInput
            className={"search-manufacturer__input"}
            placeholder="Volkswagen"
            displayValue={(value: string) => value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
          <Transition
            as={Fragment}
            leave="'transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filteredManufactures.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className={"search-manufacturer__option"}
                >
                  Create {query}
                </ComboboxOption>
              ) : (
                filteredManufactures.map((item) => (
                  <ComboboxOption key={item} as={Fragment} value={item}>
                    {({ focus, selected }) => (
                      <div
                        className={`relative search-manufacturer__option ${
                          (focus && selected) || selected
                            ? " bg-primary-blue text-white"
                            : focus
                            ? "bg-blue-500 text-white"
                            : " text-gray-900"
                        }`}
                      >
                        {item}
                      </div>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
export default SearchManufacturer;
