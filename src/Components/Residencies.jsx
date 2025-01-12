import ChoiceCopo from "./Popular/ChoiceCopo";
import TittleCp from "./Tittle/TittleCp";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slideImages = [
  {
    img: "./r1.png",
    price: 2000,
    tittle: "Aliva Priva Jardin",
    desc: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
  },
  {
    img: "./r2.png",
    price: 66353,
    tittle: "Asatti Garden City",
    desc: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
  },
  {
    img: "./r3.png",
    price: 35853,
    tittle: "Citralan Puri Serang",
    desc: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
  },
  {
    img: "./r1.png",
    price: 2000,
    tittle: "Aliva Priva Jardin",
    desc: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
  },
  {
    img: "./r2.png",
    price: 66353,
    tittle: "Asatti Garden City",
    desc: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
  },
  {
    img: "./r3.png",
    price: 35853,
    tittle: "Citralan Puri Serang",
    desc: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
  },
];

function Residencies() {
  return (
    <div id="Residencies" className="2xl:container px-auto m-5 pt-5 ">
      <div>
        <TittleCp
          tittleParent="Best Choices"
          tittleChild="Popular Residencies"
        />
      </div>
      <div className="slide-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {slideImages.map((item, index) => (
            <SwiperSlide key={index}>
              <ChoiceCopo
                img={item.img}
                price={item.price.toLocaleString("en-US")}
                tittle={item.tittle}
                desc={item.desc}
              />
            </SwiperSlide>
          ))}
          <SwiperButton />
        </Swiper>
      </div>
    </div>
  );
}

function SwiperButton() {
  const swiper = useSwiper();
  return (
    <div className=" p-5 flex flex-row justify-center items-center gap-2">
      <div
        className="p-2 bg-[#eef] rounded-sm hover:cursor-pointer"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <GoChevronLeft />
      </div>
      <div
        className="r-button p-2 bg-[#fff] rounded-sm shadow-sm hover:cursor-pointer"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <GoChevronRight />
      </div>
    </div>
  );
}

export default Residencies;
