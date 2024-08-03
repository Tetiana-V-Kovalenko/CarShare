import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className={`  font-mono w-full absolute z-10`}>
      <nav className=" max-w-[1440px] mx-auto sm:flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link
          href="/"
          className="flex justify-center items-center gap-4 pb-3 sm:pb-0"
        >
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={44}
            height={44}
            className=" object-contain"
          />
          <div className="font-extrabold font-[monospace] text-[20px]">
            CarShare
          </div>
        </Link>
        <div className="flex justify-end items-center gap-4">
          <Button
            title={"Sign In"}
            type="button"
            className="text-primary-blue rounded-full bg-blue-100 min-w-[130px] hover:bg-blue-300"
          ></Button>
          <Button
            title={"Sign Up"}
            type="button"
            className="bg-primary-blue rounded-full text-white min-w-[130px] hover:bg-blue-300"
          ></Button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
