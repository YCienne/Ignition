import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BookingModal = ({ visible, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!visible) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      ...formData,
      package: selectedPackage,
    };

    try {
      // 1. Send to company
  await emailjs.send("service_jowd38u", "template_t8461po", templateParams, "ukhy7nKA7dXtd3Qym");

  // 2. Send confirmation to user
  await emailjs.send("service_jowd38u", "template_y8nv6qh", templateParams, "ukhy7nKA7dXtd3Qym");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
      });
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      alert("Error sending booking. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0a182e] p-8 rounded-xl max-w-lg w-full text-white shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Book: {selectedPackage}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#0f223a] border border-blue-900 text-white placeholder-gray-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email (for receipt)"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#0f223a] border border-blue-900 text-white placeholder-gray-400"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#0f223a] border border-blue-900 text-white placeholder-gray-400"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#0f223a] border border-blue-900 text-white"
          />
          <input
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-[#0f223a] border border-blue-900 text-white"
          />

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
          >
            {sending ? "Sending..." : "Submit Booking"}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-400 font-medium text-center">
            Booking sent! You'll receive a confirmation email shortly.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
