// components/LoaderWithLogo.jsx
import React from "react";
import img from "../../assets/images/mobiousLogo.png";

const LoaderWithLogo = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="relative w-24 h-24">
        {/* Spinning Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={img} alt="Logo" className="w-10 h-10 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LoaderWithLogo;
