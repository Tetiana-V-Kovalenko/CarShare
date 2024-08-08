"use client";

import Button from "@/components/Button";
import { TCar } from "@/types/car";
import { calculateCarRent } from "@/utils/calculateCarRent";
import Image from "next/image";
import { useState } from "react";
import CarDetails from "../CarDetails";
import { generateCarImageUrl } from "@/utils/generateCarImage";

export const CarCard = ({ car }: { car: TCar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(car.city_mpg, car.year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold ">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className=" relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image
              src={"/steering-wheel.svg"}
              alt={"steering wheel"}
              width={20}
              height={20}
            />
            <p className="text-[14px] ">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src={"/tire.svg"} alt={"tire"} width={20} height={20} />
            <p className="text-[14px] ">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src={"/gas.svg"} alt={"gas"} width={20} height={20} />
            <p className="text-[14px] ">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            title="View More"
            onClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
            className=" w-full py-[16px] flex justify-between rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
          ></Button>
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
