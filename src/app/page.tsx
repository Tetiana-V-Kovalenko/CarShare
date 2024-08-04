import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import { cars } from "@/mocks";
import Catalogue from "@/sections/Catalogue";
import Hero from "@/sections/Hero";
// import { getCars } from "@/service";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const response = await getCars();
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
          <div className="">
            <Select variant="default"></Select>
          </div>
        </div>
        <Catalogue cars={cars}></Catalogue>
      </div>
    </main>
  );
}
