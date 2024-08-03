import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black border-t border-blue-100 mt-5">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 p-10">
        <div className="flex flex-col justify-start items-start gap-4">
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
          <p className=" text-base text-gray-700">
            CarShare 2024
            <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((page) => {
            return (
              <div key={page.title} className="footer__link">
                <h3 className="font-bold">{page.title}</h3>

                {page.links.map((link) => {
                  return (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-gray-500"
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer__copyrights ">
        <p className=" text-xs">@2024 CarShare. All Rights Reserved</p>
        <div className="footer__copyrights-link text-gray-500 ">
          <Link href={"/"}> Privacy Policy </Link>
          <Link href={"/"}> Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
