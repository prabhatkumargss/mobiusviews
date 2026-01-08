import React from "react";
import { Search } from "lucide-react";
import img1 from "../../assets/images/CustSol.png";
import img2 from "../../assets/images/indExp.png";
import img3 from "../../assets/images/proResult.png";
import img4 from "../../assets/images/timDev.png";

const CardImages = () => {
  const cardData = [
    {
      image: img1,
      title: "Customized Solutions",
    },
    {
      image: img2,
      title: "Industry Experts",
    },
    {
      image: img3,
      title: "Proven Results",
    },
    {
      image: img4,
      title: "Timely Deliveries",
    },
  ];

  return (
    <div className="w-full">
      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[var(--button_Primary)] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col sm:flex-row items-center text-center sm:text-left p-3 xl:p-6 w-full max-w-md"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-16 h-16 sm:w-16 sm:h-16 md:w-14 md:h-14 xl:w-16 xl:h-16 object-contain mb-4 sm:mb-0 sm:mr-4"
            />

            <p className="text-base sm:text-lg md:text-sm lg:text-xl xl:text-xl font-semibold text-[var(--body_Header)]">
              {data.title}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => {
          const section = document.getElementById("services");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
          className="flex items-center gap-2 mt-10 px-6 py-3 mb-[15px] text-[var(--body_Header)] rounded-[30px] text-sm sm:text-base transition duration-300 hover:-translate-y-1 cursor-pointer"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Search size={22} className="sm:size-6" />
          <p>Explore Our Services</p>
        </button>
      </div>
    </div>
  );
};

export default CardImages;
