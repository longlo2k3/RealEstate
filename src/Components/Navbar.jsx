import { useContext, useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { SvContext } from "./ServiceContext/ServiceContext";
import { s } from "motion/react-client";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const { height } = useContext(SvContext);

  const handleShowNav = () => {
    setShowNav((p) => !p);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < height && window.scrollY > 0) {
        // Adjust the value as needed
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <div
      className={`2xl:container  px-5 w-full py-5 flex flex-row justify-between items-center ${
        isScrolled ? "" : "fixed bg-[#393735] z-50 "
      }`}
    >
      <div className="flex">
        <img className="w-[100px]" src="/logo.png" alt="logo.img" />
      </div>
      <div className="text-gray-300 text-base sm:flex flex-row hidden items-center gap-10 ">
        <a href="#Residencies">
          <h1 className="hover:cursor-pointer hover:text-white">Residencies</h1>
        </a>
        <a href="#OurValue">
          <h1 className="hover:cursor-pointer hover:text-white">Our Value</h1>
        </a>
        <a href="#ContactUs">
          <h1 className="hover:cursor-pointer hover:text-white">Contact Us</h1>
        </a>
        <a href="#GetStarted">
          <h1 className="hover:cursor-pointer hover:text-white">Get Started</h1>
        </a>

        <button className="btn-show bg-blue-600 text-sm text-white px-5 py-2 hover:scale-110 transition-all duration-300">
          Contact
        </button>
      </div>
      <div onClick={handleShowNav} className="sm:hidden block">
        <FiAlignJustify color="white" />
        <div
          className={`absolute flex flex-col gap-3 bg-white text-black p-5 mt-2 right-5 rounded-lg z-20 ${
            showNav ? "block" : "hidden"
          }`}
        >
          <h1 className="hover:cursor-pointer hover:text-white">Residencies</h1>
          <h1 className="hover:cursor-pointer hover:text-white">Our Value</h1>
          <h1 className="hover:cursor-pointer hover:text-white">Contact Us</h1>
          <h1 className="hover:cursor-pointer hover:text-white">Get Started</h1>
          <button className="btn-show bg-blue-600 text-sm text-white px-5 py-2 hover:scale-110 transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
