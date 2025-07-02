import React from "react";
import { about2, curve } from "../assets";
import { gal1, gal2, gal3, gal4, gal5, gal7, gal8, gal9, gal10 } from "../assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Section from "./Section";
import { Gradient } from "./design/Services";

const About = () => {
  const images = [gal1, gal2, gal3, gal4, gal5, gal7, gal8, gal9, gal10];

  return (
    <Section id="about-us" className=" mt-0 lg:mt-[0rem] xl:mt-[0rem]">
      {/* Hero Swiper */}
      <div className="relative h-[80vh] lg:h-screen w-full overflow-hidden rounded-3xl mb-10 shadow-lg">
  <Swiper
    className="h-full w-full"
    modules={[Autoplay, A11y]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 4000 }}
    loop
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative h-full w-full">
          <img
            src={img}
            alt={`slide-${index + 1}`}
            className="object-cover h-full w-full"
          />
          
          {/* 🔥 No blur here, just clean gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000d1f]/40 to-[#000d1f]/80" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Ignition</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              A sanctuary for joy, connection, and serene memories.
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Video Block */}
        {/* <div className="relative overflow-hidden rounded-3xl border border-blue-900 bg-[#040d1a] shadow-inner min-h-[28rem] lg:min-h-[36rem]">
          <video
            src={about2}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000d1f]/30 to-[#000d1f]/90 backdrop-blur-md" />
        </div> */}

        {/* Narrative Block */}
        <div className="relative bg-gradient-to-b from-[#020b18] to-[#04142c] p-10 rounded-3xl shadow-xl text-white">
          <h4 className="text-pink-800 text-2xl font-semibold italic text-center mb-6 relative">
            Ignition Event Center
            <img
              src={curve}
              className="absolute top-full left-1/2 -translate-x-1/2 w-3/4 mt-1"
              width={624}
              height={28}
              alt="curve"
            />
          </h4>
          <p className="leading-relaxed text-lg opacity-90">
            Imagine a place where the hustle of life melts away, replaced by the soothing sounds of laughter and the gentle hum of nature. <br /><br />
            At <span className="text-pink-500 font-medium">Ignition</span>, families and friends come together to create memories that last a lifetime—whether it's lounging by the pool, sharing a meal in our cozy restaurant, or simply enjoying the peaceful atmosphere that surrounds them. <br /><br />
            It's more than just a venue; it's a haven of comfort, joy, and togetherness,a place where every visit feels like coming home.
          </p>
        </div>
      </div>

      <Gradient />
    </Section>
  );
};

export default About;
