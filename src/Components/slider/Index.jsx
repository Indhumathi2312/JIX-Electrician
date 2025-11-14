import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Client1 from "../../assets/About1.svg";

const Slider = () => {
  const images = [Client1, Client1, Client1, Client1, Client1, Client1];
  return (
    <>
      <div className="w-full max-w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {images.map(
            (_, index) =>
              index < images.length - 3 && (
                <SwiperSlide key={index}>
                  <div className="flex gap-2 justify-center md:hidden p-10 ">
                    {images.slice(index, index + 1).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`slide ${index + i}`}
                        className="w-40 object-cover rounded-lg shadow-lg"
                      />
                    ))}
                  </div>
                  <div className="hidden md:flex gap-2 justify-center p-20">
                    {images.slice(index, index + 2).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`slide ${index + i}`}
                        className="w-40 lg:w-60 xl:w-80 object-cover rounded-lg shadow-lg"
                      />
                    ))}
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
