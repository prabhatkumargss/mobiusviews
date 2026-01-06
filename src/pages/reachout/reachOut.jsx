import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Import,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/mobiousLogo.png";
import ContactModaL from "../../component/ContactModal";
import RequestAQuote from "../requestAQuote/RequestAQuote";

const Footer = () => { 

   const [open, setOpen] = useState(false);


    const services = [
    "Survey Programming",
    "Data Processing",
    "Project Management",
    "Panel Services",
  ];

  // Array for Contact (using your provided services array)
  const contactServices = [
    { label: "Custom Dashboard Development", value: "1" },
    { label: "Custom Chart & Visualization Creation", value: "2" },
    { label: "Data Integration from Multiple Sources", value: "3" },
    { label: "AI-powered Predictive Analytics", value: "4" },
    { label: "Real-time Reporting Solutions", value: "5" },
    { label: "Data Storytelling & Insight Presentation", value: "6" },
    { label: "Power BI", value: "7" },
  ];




  return (
    <footer className="bg-[var(--body_Color)] text-white px-6 py-6 md:py-8">
      <div className="mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="space-y-2 md:w-2/3 text-xs">
          {/* Logo + Company Name */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-auto bg-white" />
            <span className="text-base font-semibold tracking-wide">
              MobiusViews
            </span>
          </a>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1 cursor-pointer"  onClick={() => setOpen(true)}  >
              <h2 className="text-base font-semibold">
                Let&apos;s work together!
              </h2>
              <p className="text-[11px] text-gray-300">
                Book a free consultation
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-1 text-[15px]">Services</h3>
              <ul className="space-y-1 text-[11px]">
                 {services.map((service, index) => (
            <li key={index} className="hover:text-gray-300 cursor-pointer">
              {service}
            </li>
          ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-1 text-[15px]">Contact</h3>
              <ul className="space-y-1 text-[11px]">
               {contactServices.map((item) => (
            <li key={item.value} className="hover:text-gray-300 cursor-pointer">
              {item.label}
            </li>
          ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 md:w-1/3 text-[11px] border-t md:border-t-0 md:border-l border-gray-600 pt-3 md:pt-0 md:pl-5">
          {/* Phone + Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-1 text-[15px] flex items-center gap-2">
                <Phone size={14} /> Talk to us:
              </h3>
              <p className="ml-6">+91 120-4035800</p>
              <p className="ml-6">+91 9899061991</p>
            </div>

            <div>
              <h3 className=" flex items-center gap-2 font-bold mb-1 text-[15px]">
                <Clock size={14} /> Working Hours:
              </h3>
              <p className="ml-6">
                <b>IST</b>: 09:00 AM – 03:00 AM
              </p>
              <p className="ml-6">
                <b>CET</b>: 05:30 AM – 11:30 PM
              </p>
              <p className="ml-6">
                <b>EST (US)</b>: 9:00 AM – 05:30 PM
              </p>
            </div>
          </div>

          {/* Working Days */}
          <p>
            <span className="font-medium">🗓️ Working Days:</span> Mon – Fri
          </p>

          {/* Email */}
          <p>
            <a
              href="mailto:sales@mobiusviews.com"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Mail size={14} /> sales@mobiusviews.com
            </a>
          </p>

          {/* Address */}
          <p className="flex items-start gap-2">
            <MapPin size={14} className="mt-0.5" />
            3rd Floor, GM IT Park, Sector 142, Noida, 201304, India
          </p>

          {/* Social Icons */}
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/GlobalSurveySolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white text-gray-900 rounded-full hover:bg-gray-300 transition"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://twitter.com/globalsurveysolutions_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white text-gray-900 rounded-full hover:bg-gray-300 transition"
            >
              <FontAwesomeIcon icon={faXTwitter} size="sm" />
            </a>
            <a
              href="https://www.instagram.com/globalsurveysolutions_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white text-gray-900 rounded-full hover:bg-gray-300 transition"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com/company/global-survey-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white text-gray-900 rounded-full hover:bg-gray-300 transition"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-3 border-t border-gray-700 pt-2 text-center text-[10px] text-gray-400">
        © {new Date().getFullYear()} MobiusViews. All rights reserved.
      </div>


       {/* Modal */}
      <ContactModaL open={open} onClose={() => setOpen(false)}>
        <RequestAQuote  />
      </ContactModaL>
      

    </footer>
  );
};

export default Footer;
