import React, { useState } from "react";
import { swimmingPackages } from "../constants";
import BookingModal from "./SwimBookingModal";

const PricingList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openBooking = (title) => {
    setSelectedPackage(title);
    setModalOpen(true);
  };

  return (
    <div className="w-full" id="pricing">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Swimming Packages
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {swimmingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-[#0a182e] rounded-2xl p-8 shadow-xl border border-blue-900 flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{pkg.title}</h3>
              <p className="text-blue-400 text-xl font-bold mb-4">{pkg.price}</p>
              <ul className="mb-6 text-gray-300 list-disc list-inside space-y-2">
                {pkg.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition"
                onClick={() => openBooking(pkg.title)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <BookingModal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
      />

    <section className="mt-10 lg:mt-20 px-6 md:px-10 xl:px-32">
  <div className="bg-[#0a182e] border border-white/10 rounded-3xl shadow-lg p-8 md:p-12 text-white relative overflow-hidden">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">
      Opening Hours
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
      <div>
        <p><span className="text-blue-300 font-medium">Mondays – Saturdays:</span> 10AM – 10PM</p>
        <p><span className="text-blue-300 font-medium">Sundays:</span> 1PM – 10PM</p>
        <p><span className="text-blue-300 font-medium">Public Holidays:</span> 10AM – 12AM</p>
      </div>

      <div className="mt-2 md:mt-0">
        <p className="text-yellow-300 font-semibold">Please Note:</p>
        <ul className="list-disc list-inside mt-2 text-sm md:text-base">
          <li>Pool is closed on Mondays for cleaning (except public holidays).</li>
          <li>Food and drinks are <span className="text-red-400 font-semibold">not allowed inside</span>.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default PricingList;
