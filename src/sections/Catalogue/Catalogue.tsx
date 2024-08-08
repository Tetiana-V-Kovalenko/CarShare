"use client";
import { TCar } from "@/types/car";
import { CarCard } from "./CarCard";
import { useId } from "react";
import Button from "@/components/Button";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { useRouter } from "next/navigation";

const Catalogue = ({
  cars = [],
  limit = 10,
}: {
  cars?: TCar[];
  limit?: number;
}) => {
  const router = useRouter();
  const onShowMoreClick = () => {
    const newLimit = (limit / 10 + 1) * 10;
    const newPathname = updateSearchParams("limit", newLimit.toString());
    router.push(newPathname);
  };
  return (
    <section>
      <div className="home__cars-wrapper ">
        {cars?.map((car) => (
          <CarCard car={car} key={car.model + Math.random()}></CarCard>
        ))}
      </div>
      <div className="w-full flex justify-center ga-5 mt-10 ">
        {!(limit > cars?.length) && (
          <Button
            title="Show more"
            type="button"
            className="bg-primary-blue rounded-full text-white"
            onClick={onShowMoreClick}
          ></Button>
        )}
      </div>
    </section>
  );
};
export default Catalogue;
