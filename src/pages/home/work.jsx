import React, { useState } from "react";
import img1 from "../../assets/images/steps.png";
import img2 from "../../assets/images/service.png";
// import img3 from "../../assets/images/girlpic.png";
import { Star } from "lucide-react";
import ContactModal from "../../component/ContactModal";
import RequestAQuote from "../requestAQuote/RequestAQuote";

const Work = ({ open, onClose, setOpen }) => {
  //  const [open, setOpen] = useState(false);

  const cardData = [
    {
      id: 1,
      text: `Understand the Client's Requirements`,
    },
    {
      id: 2,
      text: `Prepare and Design the Output`,
    },
    {
      id: 3,
      text: `Review, Customize, and Deliver`,
    },
  ];

  return (
    <>
      <div className="mb-10">
        {/* Section 1: How It Works */}
        <section>
          <p className="text-[var(--body_Header)] font-bold text-2xl sm:text-3xl lg:text-4xl  mb-6">
            How it works
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left Side - Image + Cards */}
            <div className="space-y-6 lg:col-span-2">
              <img
                src={img1}
                alt="Work Step"
                className="w-auto h-auto rounded-xl"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
                {cardData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[var(--backGround_primary)] shadow-md rounded-xl p-2 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg w-auto"
                  >
                    <p
                      className="text-gray-700 text-base leading-relaxed font-medium break-all"
                      style={{ wordBreak: "break-word" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden sm:flex justify-center items-center"
              onClick={() => setOpen(true)}
            >
              <img
                src={img2}
                alt="Service (desktop)"
                className="w-full max-w-[300px] md:max-w-[80%] h-auto rounded-xl cursor-pointer"
              />
            </div>

           
          </div>
        </section>

        {/* Section 2: Testimonials */}
        <section>
          <p className="text-[var(--body_Header)] font-bold text-2xl sm:text-3xl lg:text-4xl mt-12 mb-15">
            Positive testimonials
          </p>

          <div className="flex justify-center flex-col md:flex-row items-center gap-5">
            {/* Testimonial Image */}

            {/* <div className="flex-shrink-0">
            <img
              src={img3}
              alt="Testimonial Person"
              className="rounded-xl shadow-lg max-w-50 h-auto"
            />
          </div> */}

            {/* Testimonial Card */}
            <div className="relative bg-[var(--body_Color)] text-[var(--backGround_primary)] rounded-3xl p-6 pt-16 w-full max-w-md shadow-lg mt-10">
              {/* Circle avatar */}
              <div className="absolute -top-12 left-6 flex gap-5">
                <div className="w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 bg-[var(--button_Primary_hover)] rounded-full border-8 border-[var(--backGround_primary)]" />

                <div className="flex justify-center  bg-[var(--backGround_primary)] h-5 w-30 relative top-5 -left-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="">
                      <Star
                        size={28}
                        className="fill-amber-500 w-[60%] text-amber-500"
                      />
                    </div>
                  ))}

                  {[...Array(1)].map((_, i) => (
                    <div key={i} className="">
                      <Star
                        size={28}
                        className="text-[var(--lightgrey)] fill-[var(--lightgrey)] w-[60%] "
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Text with border radius 30px */}
              <p
                className="text-sm md:text-base leading-relaxed break-all p-4 bg-[var(--body_Color)]"
                style={{ borderRadius: "30px" }}
              >
                Working with this team has been a great experience. They truly
                understand our requirements and always deliver exactly what we
                need—on time and with attention to detail. It's rare to find
                such reliability and professionalism." — US Research, Project
                Manager
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
