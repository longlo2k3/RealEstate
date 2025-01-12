import { GiPositionMarker } from "react-icons/gi";
import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { SvContext } from "./ServiceContext/ServiceContext";

function AppBanner() {
  const [preProduct, setPreProduct] = useState(8888);
  const [preCustomer, setPreCustomer] = useState(1888);

  const { height, setHeight } = useContext(SvContext);

  useEffect(() => {
    setHeight(document.documentElement.clientHeight);
  }, [height, setHeight]);

  useEffect(() => {
    if (preProduct < 8995) {
      const interval = setInterval(() => {
        setPreProduct((p) => p + 1);
      }, 10);
      return () => clearInterval(interval);
    }
    if (preProduct < 8999 && preProduct >= 8995) {
      const interval = setInterval(() => {
        setPreProduct((p) => p + 1);
      }, 200);
      return () => clearInterval(interval);
    }
    if (preProduct < 9000 && preProduct >= 8999) {
      const interval = setInterval(() => {
        setPreProduct((p) => p + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [preProduct]);

  useEffect(() => {
    if (preCustomer < 1995) {
      const interval = setInterval(() => {
        setPreCustomer((p) => p + 1);
      }, 10);
      return () => clearInterval(interval);
    }
    if (preCustomer < 1999 && preCustomer >= 1995) {
      const interval = setInterval(() => {
        setPreCustomer((p) => p + 1);
      }, 200);
      return () => clearInterval(interval);
    }
    if (preCustomer < 2000 && preCustomer >= 1999) {
      const interval = setInterval(() => {
        setPreCustomer((p) => p + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [preCustomer]);

  return (
    <div className="2xl:container  grid grid-cols-1 lg:grid-cols-2 h-fit">
      <div className="text-white sm:p-20 p-10">
        <motion.div
          className=" sm:text-[4rem] text-[3rem]  font-bold flex flex-col leading-[4rem]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, damping: 80, type: "spring" }}
        >
          <p className="relative">
            <p className="relative z-10">Discover</p>
            <span className="orange-circle w-20 h-20 rounded-full sm:left-[15rem] left-[10rem] top-[-2rem] absolute z-0"></span>
          </p>
          <p>Most Suitable</p>
          <p>Property</p>
        </motion.div>
        <div className="text-md my-10 text-gray-500 ">
          Find a variety of properties that suit you very easilty Forget all
          difficulties in finding a residence for you
        </div>
        <div className="flex flex-row justify-center items-center border-4 border-gray-300 gap-5 bg-white w-fit px-5 py-2 rounded-md">
          <GiPositionMarker color="blue" size={30} />
          <input
            className="border-none outline-none text-black w-full max-w-sm sm:max-w-md md:max-w-lg"
            type="text"
          />
          <button className="px-5 py-2 w-fit">Search</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl flex flex-row">
              {preProduct.toLocaleString("en-US")} <IoIosAdd color="orange" />
            </p>
            <p className="text-gray-400">Premium Product</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl flex flex-row">
              {preCustomer.toLocaleString("en-US")} <IoIosAdd color="orange" />
            </p>
            <p className="text-gray-400">Happy Customer</p>
          </div>
          <div className="flex flex-col justify-center items-center md:col-span-1 sm:col-span-2 col-span-1 ">
            <p className="text-4xl flex flex-row ">
              28 <IoIosAdd color="orange" />
            </p>
            <p className="text-gray-400">Awards Winning</p>
          </div>
        </div>
      </div>
      <motion.div
        className=" mt-10 ml-12 mb-10 flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          damping: 80,
          type: "spring",
        }}
      >
        <img
          className="lg:w-[500px] w-[80%] h-[600px] border-8 rounded-t-full object-fill"
          src="/hero-image.png"
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default AppBanner;
