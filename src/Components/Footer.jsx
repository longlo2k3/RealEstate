function Footer() {
  return (
    <div className="2xl:container px-auto mx-5 pb-5">
      <div className="sm:flex flex-row justify-between items-center grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-5 sm:items-start items-center">
          <img className="w-[120px]" src="./logo2.png" alt="" />
          <p className="max-w-[230px] text-[#8c8b8b]">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="text-center sm:text-start sm:mt-0 mt-10">
          <p className="text-primary font-bold text-3xl ">Information</p>
          <p className="text-[#8c8b8b] text-sm mt-2">
            145 New York, FL 5467, USA
          </p>
          <div className="font-medium text-center grid grid-cols-1 sm:grid-cols-4 gap-5 mt-5">
            <p>Property</p>
            <p>Services</p>
            <p>Product</p>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
