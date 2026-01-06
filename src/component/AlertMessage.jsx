import React, { useEffect } from "react";

const AlertMessage = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseStyle =
    "fixed top-5 right-5 px-6 py-3 z-55 rounded-lg shadow-lg text-white font-semibold transition-all duration-500 mt-10";
  const typeStyle =
    type === "success" ? "bg-green-600" : "bg-red-600";

  return <div className={`${baseStyle} ${typeStyle}`}>{message}</div>;
};

export default AlertMessage;
