import React from "react";
import DashboardCard from "./dashboardCard";
import waveTop from "../../assets/images/analistwave.png";
import waveBottom from "../../assets/images/analistwave.png";
import "../../assets/styles/analysticsStyle.css";

const AnalyticsDashboard = () => {
  return (
    <div className="bg-white">
    <section id="services" className="relative w-full overflow-hidden bg-[var(--body_Color)]">
      {/* Bottom Wave */}
      <img
        src={waveBottom}
        alt="Bottom Wave"
        className="relative bottom-0 left-0 w-full h-auto object-cover z-10 pointer-events-none"
        style={{ transform: "rotate(180deg)" ,  marginTop: "-5px" }}
      />

      {/* Main Content */}
      <div className="relative analytics-wrapper">
        <section className="analytics-section">
          <div className="content text-center  md:text-center px-10">
            <p className="text-[var(--backGround_primary)] font-bold text-2xl sm:text-3xl lg:text-4xl mb-5">
              Our Comprehensive Analytics & Dashboard Solutions
            </p>
            <DashboardCard />
          </div>
        </section>
      </div>
      {/* Top Wave */}
      {/* <img
        src={waveTop}
        alt="Top Wave"
        className="relative top-0 left-0 w-full h-auto object-cover z-10 pointer-events-none"
      /> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#f3f4f5"
              fillOpacity="1"
              d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,218.7C672,245,768,267,864,266.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
    </section>
    </div>
    
  );
};

export default AnalyticsDashboard;
