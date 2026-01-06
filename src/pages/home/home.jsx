import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../../assets/styles/homeStyle.css";
import bgImage from "../../assets/images/homeBg.png";
import Explore from "./explore";
import waveTop from "../../../public/wave2.png";
import leftimg from "../../assets/images/homeLeftside.png";
import dots from "../../assets/images/dots.png";
import Homeflames from "../../../public/Homeflames.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="" id="home" >
      <section
        className="relative w-full overflow-hidden bg-[var(--body_Color)] lg:h-[650px] md:h-[550px] sm:h-[500px] px-4 md:px-10 py-16"
        style={{
          backgroundImage: `url(${Homeflames})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90px",
          backgroundSize: "contain",
          backgroundSize: "90% 120%",
          zIndex: 30,
        }}
      >
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Background"
          className=" absolute top-0 left-0 z-0 object-cover
    w-[100%] h-[90%] sm:w-[80%] sm:h-[85%]  md:w-[90%] md:h-[90%] lg:w-[65%] lg:h-full"
        />

        {/* Wave SVG instead of Image */}
        <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto -mb-1"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,218.7C672,245,768,267,864,266.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Grid Content */}
        <div className="relative z-20 grid grid-cols-2 md:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div
            className="text-[var(--backGround_primary)] space-y-6"
            data-aos="fade-up"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-wide">
              Transforming Data <br /> into Strategic Growth
            </h1>

            <button
              onClick={() => {
                const section = document.getElementById("services");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[var(--button_Primary)] hover:bg-[var(--button_Primary_hover)] transition text-[var(--backGround_primary)] font-semibold px-3 sm:px-3 lg:px-6 py-1 lg:py-3 rounded-full text-sm sm:text-base lg:text-lg shadow-lg tracking-wider"
            >
              LEARN MORE
            </button>

            <img
              src={dots}
              alt="dots"
              className="w-[180px] sm:w-[160px] lg:w-[190px] h-auto"
            />
          </div>

          {/* Right Image Section (with Flames behind) */}
          <div
            className="relative flex justify-center items-center"
            data-aos="fade-up"
          >
            <img
              src={leftimg}
              alt="Left Hand"
              className="relative z-20 w-[300px] sm:w-[400px] lg:w-[500px] object-contain"
            />

            
          </div>
        </div>
      </section>

      <section className="relative w-full px-10 overflow-hidden">
        <Explore />
      </section>
    </div>
  );
};

export default Home;
