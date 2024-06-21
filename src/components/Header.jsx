"use client";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  const values = useSelector((state) => state.allcart);
  return (
    <>
      <header className="border-b border-gray-900 dark:border-b dark:border-gray-100 dark:bg-black/20 sticky top-0 backdrop-blur-md z-30">
        <div className="flex justify-between p-3 md:px-6">
          <Link href={"/"}>
            <p className="text-xl font-semibold lg:text-2xl">Ecommerce</p>
          </Link>
          <div className="flex justify-center items-center relative px-2 space-x-3">
            <ModeToggle />
            <Link href={"/cart"} className="cursor-pointer">
              <FaCartArrowDown className="text-2xl lg:text-3xl" />
              <p className="w-[1.3em] h-[1.3rem] bg-red-600 rounded-full flex justify-center items-center absolute top-[-7px] left-[78px] lg:left-[84px]">
                <span className="text-white font-bold text-sm w-fit">
                  {values.length}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
