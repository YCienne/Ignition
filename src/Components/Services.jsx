import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { service } from "../constants";

const ServicesPage = () => {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => setOpenModal(null);

  return (
    <div className="bg-[#020c1b] text-white min-h-screen py-20 px-4 relative" id="services">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-300">
          Discover immersive experiences curated just for you.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {service.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer bg-[#0a182e] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            onClick={() => setOpenModal(item.id)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {service.map((item) =>
        item.id === openModal ? (
          <div
            key={item.id}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          >
            <div className="bg-[#0a182e] rounded-xl max-w-3xl w-full shadow-2xl overflow-hidden relative">
              <div className="flex justify-between items-center p-5 border-b border-gray-700">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  &times;
                </button>
              </div>

              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-[400px]"
              >
                {item.gallery.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-6 text-gray-300">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ServicesPage;
