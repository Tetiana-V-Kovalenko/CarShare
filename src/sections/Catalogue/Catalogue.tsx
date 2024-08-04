"use client";
import { TCar } from "@/types/car";
import { CarCard } from "./CarCard";

const Catalogue = ({ cars }: { cars?: TCar[] }) => {
  return (
    <section>
      <div className="home__cars-wrapper ">
        {cars?.map((car) => (
          <CarCard car={car} key={car.model}></CarCard>
        ))}
      </div>
    </section>
  );
};
export default Catalogue;
