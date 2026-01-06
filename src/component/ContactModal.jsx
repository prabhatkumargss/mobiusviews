// components/common/Modal.jsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ContactModal({ open, onClose, children }) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) setShow(true);
  }, [open]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 300); // match transition duration
  };

  if (!open && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl transform transition-transform duration-300 ${
          show ? "scale-100" : "scale-95"
        }`}
        style={{ }} // fixed height
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white sm:text-white md:text-gray-600 hover:text-red-500 transition z-30 "
        >
          <X size={22} className="font-extrabold " />
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto p-1">
        {children}
        </div>
      </div>
    </div>
  );
}
