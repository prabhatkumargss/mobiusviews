import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactModal from "./ContactModal";
import RequestAQuote from "../pages/requestAQuote/RequestAQuote";

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  // Initialize AOS and show the section after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({ duration: 1000, delay: 500 });
      setVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { label: "Custom Dashboard Development", value: "1" },
    { label: "Custom Chart & Visualization Creation", value: "2" },
    { label: "Data Integration from Multiple Sources", value: "3" },
    { label: "AI-powered Predictive Analytics", value: "4" },
    { label: "Real-time Reporting Solutions", value: "5" },
    { label: "Data Storytelling & Insight Presentation", value: "6" },
    { label: "Power BI", value: "7" },
  ];

  const handleClose = () => setVisible(false);
  const handleModalOpen = () => setOpen(true);

  if (!visible) return null;

  return (
    <>
      <div
        data-aos="fade-up"
        className="
          fixed z-50 
          bottom-4 inset-x-4 
          sm:inset-x-auto sm:right-6 sm:bottom-6
          w-auto max-w-sm
          bg-white shadow-2xl border border-gray-200 rounded-xl p-5 
          animate-fadeIn
        "
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black transition"
        >
          <X size={18} />
        </button>

        {/* Heading */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3">
          Are you looking for?
        </h3>

        {/* Services List */}
        <ul className="space-y-2">
          {services.map((data, index) => (
            <li
              key={index}
              className="text-sm sm:text-base md:text-[15px] text-gray-700 cursor-pointer hover:text-blue-600 transition"
              onClick={handleModalOpen}
            >
              {data.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      <ContactModal open={open} onClose={onClose}>
        <RequestAQuote />
      </ContactModal>
    </>
  );
}
