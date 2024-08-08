import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import { fuels, yearsOfProduction } from "@/constants";

import Catalogue from "@/sections/Catalogue";
import Hero from "@/sections/Hero";
import { FilterProps, getCars } from "@/service";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12  padding-x padding-y max-width " id="discover">
        <div className="home__text-container ">
          <h1 className="text-4xl font-extrabold "> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="flex gap-4">
            <Select variant="default" title="fuel" options={fuels}></Select>
            <Select
              variant="default"
              title="year"
              options={yearsOfProduction}
            ></Select>
          </div>
        </div>
        {!isDataEmpty ? (
          <Catalogue cars={allCars} limit={searchParams.limit}></Catalogue>
        ) : (
          <div className="home__error-container ">
            <h2 className="text-black text-xl font-bold">
              Sorry, there is no results
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
