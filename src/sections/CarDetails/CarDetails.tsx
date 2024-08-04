import { TCar } from "@/types/car";
import { Fragment } from "react";
import Image from "next/image";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";

const CarDetails = ({
  isOpen,
  closeModal,
  car,
}: {
  isOpen: boolean;
  closeModal: () => void;
  car: TCar;
}) => {
  return (
    <>
      <Dialog
        as={"div"}
        open={isOpen}
        className={"relative z-10"}
        transition
        onClose={closeModal}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-lg max-h-[90hx] p-6 overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5ß">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full "
            >
              <Image
                src={"/close.svg"}
                alt="close"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image
                  src={"/hero.png"}
                  alt="car"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={"/hero.png"}
                    alt="car"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={"/hero.png"}
                    alt="car"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={"/hero.png"}
                    alt="car"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="mt-3 flex flex-wrap gap-4">
                {car.make} {car.model}
              </h2>
              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}
                  >
                    <h4 className="text-grey capitalize">
                      {key.split("_").join(" ")}
                    </h4>
                    <p className="text-black-100 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      {/* </Transition> */}
    </>
  );
};
export default CarDetails;
