import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed z-50 
        bottom-4 inset-x-4 
        sm:inset-x-auto sm:right-6 sm:bottom-6 lg:left-6
        w-auto max-w-sm
        bg-white shadow-2xl border border-gray-200 rounded-xl p-5 
        animate-fadeIn
      "
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        <X size={18} />
      </button>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        We use cookies
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        We collect cookies to analyze our website traffic and performance, we
        never collect any personal data.
      </p>

      {/* Action button */}
      <button
        onClick={handleAccept}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition"
      >
        Accept Cookies
      </button>
    </div>
  );
}
