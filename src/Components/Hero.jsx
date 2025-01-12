import AppBanner from "./AppBanner";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="bg-black">
      <div className="nav-shadow w-[300px] sm:h-[300px] h-[30%] bg-white rounded-full absolute"></div>
      <Navbar />
      <AppBanner />
    </div>
  );
}

export default Hero;
