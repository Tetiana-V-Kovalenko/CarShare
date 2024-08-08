"use client";
import { useState } from "react";
import { SelectProps, TOption } from "./Select";
import { useRouter } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import { updateSearchParams } from "@/utils/updateSearchParams";

export const SelectDefault = ({
  title = "",
  options = [{ title: "", value: "" }],
}: SelectProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const updateParams = (e: TOption) => {
    const newPathname = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathname);
  };
  return (
    <div className=" w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          updateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className={"custom-filter__btn "}>
            <span className={"block truncate"}>{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              alt="chevron uo down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </ListboxButton>
          <ListboxOptions
            transition
            className={
              "custom-filter__options transition duration-200 ease-out"
            }
          >
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? "bg-primary-blue text-white" : " text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <span
                    className={` block truncate ${
                      selected ? "font-medium" : " font-normal"
                    } `}
                  >
                    {option.title}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};
