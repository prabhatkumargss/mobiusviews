import React, { useEffect, useState } from "react";
import img1 from "../../assets/gif/customdashboard.gif";
import img2 from "../../assets/gif/customchart.gif";
import img3 from "../../assets/gif/dataInte.gif";
import img4 from "../../assets/gif/aipower.gif";
import img5 from "../../assets/gif/realtime.gif";
import img6 from "../../assets/gif/datastory.gif";
import img7 from "../../assets/images/powerbi.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import ContactModal from "../../component/ContactModal";
import RequestAQuote from "../requestAQuote/RequestAQuote";

// data-aos="flip-right"

const DashboardCard = () => {

   const navigate = useNavigate();
     const [open, setOpen] = useState(false);
      
    const onClose = () =>{
         setOpen(false)
    }
  

  const cardData = [
    {
      id : 1,
      image: img1,
      title: "Custom Dashboard Development",
    },
    {
      id : 2,
      image: img2,
      title: "Custom Chart & Visualization Creation",
    },
    {
      id : 3,
      image: img3,
      title: "Data Integration from Multiple Sources",
    },
    {id : 4,
      image: img4,
      title: "AI-powered Predictive Analytics",
    },
    {
      id : 5,
      image: img5,
      title: "Real-time Reporting Solutions",
    },
    {
      id : 6,
      image: img6,
      title: "Data Storytelling & Insight Presentation",
    },
    {
      id : 7,
      image: img7,
      title:
        "Power BI, Tableau, Google Looker Studio, Excel, Python, R, SQL, SPSS, Alteryx, Google BigQuery, Azure ML, and DataRobot",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mt-2 mb-4">
        {cardData.map((data, index) => (
          <div
            key={index}
            data-aos="flip-right"
            className="bg-[var(--backGround_primary)] border-2 border-[var(--button_Primary)] rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-center gap-4 px-4 py-4 h-[200px] cursor-pointer"
            style={{
              boxShadow: `
                var(--button_Primary_hover) 3px 4px,
                var(--button_Primary_hover) 3px 4px
              `,
            }}
            onClick={() => navigate(`/services/${data.id}`)}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[var(--body_Header)] leading-snug">
              {data.title}
            </p>
          </div>
        ))}

         <div className="content-center">
      {/* Button */}
      <button className="mt-10 px-8 py-3 text-[var(--backGround_primary)] bg-[var(--button_Primary)] rounded-[30px] text-sm sm:text-base transition duration-300 hover:-translate-y-1 mb-10 border-2 border-[var(--button_Primary)] cursor-pointer"
        
          onClick={() => setOpen(true)}
      >
        Get a quote
      </button>
      </div>
      </div>
    
     
        {/* Modal */}
      <ContactModal open={open} onClose={onClose}>
        <RequestAQuote  />
      </ContactModal>

    </div>
  );
};

export default DashboardCard;
