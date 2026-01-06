import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardImages from "./CardImages";
import Work from "./work";
import ContactModal from "../../component/ContactModal";
import RequestAQuote from "../requestAQuote/RequestAQuote";


const Explore = () => {

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

     const [open, setOpen] = useState(false);
    
     const onClose = () =>{
       setOpen(false)
     }
     

  return (
    <>
    <div className="bg-[var(--backGround_primary)]">
      {/* Hero Section */}
      <section className="relative w-full bg-cover bg-center">
        <div className="relative grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text Content */}
          <div className="items-center"  data-aos="fade-right">
            <p className="text-[var(--body_Header)] font-bold text-2xl sm:text-3xl lg:text-4xl  mb-5">
              Why Choose MobiusViews?
            </p>
            <CardImages />
          </div>

          {/* Right Side - Optional Image or Illustration */}
          <div className="items-center"  data-aos="fade-left">
            <Work open={open} onClose={onClose}  setOpen = {setOpen}/>
          </div>
        </div>
      </section>
    </div>

       {/* Modal */}
      <ContactModal open={open} onClose={onClose}>
        <RequestAQuote  />
      </ContactModal>
    </>
  );
};

export default Explore;
