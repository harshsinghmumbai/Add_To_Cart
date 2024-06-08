import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="bg-[#cccccc]">
        <div className="flex justify-between p-3 md:px-6">
          <p className="text-xl font-semibold lg:text-2xl">Ecommerce</p>
          <div className="flex justify-center items-center relative px-2">
            <FaCartArrowDown className="text-2xl lg:text-3xl" />
            <p className="w-[1.3em] h-[1.3rem] bg-red-600 rounded-full flex justify-center items-center absolute top-[-10px] left-[27px] lg:left-[33px]">
              <span className="text-white font-bold text-sm w-fit">0</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
