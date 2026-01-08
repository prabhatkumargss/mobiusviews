import React, { useState, useEffect } from "react";
import { Menu, X  , MoveUp } from "lucide-react";
import "../../assets/styles/headerStyle.css";
import img from "../../assets/images/mobiousLogo.png";
import { Link } from "react-router-dom";
import ContactModal from "../../component/ContactModal";
import RequestAQuote from "../requestAQuote/RequestAQuote";
import img2 from "../../assets/images/service.png";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollToTop, setShowScrollToTop] = useState(false);
   const [open, setOpen] = useState(false);
        
  const onClose = () =>{
       setOpen(false)
  }

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Get Started", id: "contactus" },
  ];
 
   const handNavClick = (id) =>{
    if(id === "contactus"){
      setOpen(true)
    }else{
      document.getElementById(id)?.scrollIntoView({behavior : "smooth"});
    }
    setIsOpen(false);
   }

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            window.scrollY >= offsetTop - 60 &&
            window.scrollY < offsetTop + offsetHeight - 60
          ) {
            current = id;
          }
        }
      });

      setActiveSection(current);
      setShowScrollToTop(window.scrollY > 100); // Show button after scrolling down 100px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[var(--backGround_primary)] shadow-md w-full z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-13">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img
              src={img}
              alt="Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-[var(--body_Header)] sm:text-lg md:text-xl font-bold">
              MobiusViews
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handNavClick(id)}
                className={`relative font-bold transition border-b-2 ${
                  activeSection === id
                    ? "text-[var(--button_Primary)] border-[var(--button_Primary)]"
                    : "text-[var(--body_Header)] border-transparent hover:border-[var(--body_Header_hover)]"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[var(--button_Primary)] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center"
            >
              {isOpen ? (
                <X size={18} className="text-[var(--backGround_primary)]" />
              ) : (
                <Menu size={18} className="text-[var(--backGround_primary)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden bg-[var(--body_Color)] px-4 pt-2 pb-4 space-y-2">
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                  onClick={() => handNavClick(id)}
                className={`block font-medium py-1 border-b ${
                  activeSection === id
                    ? "text-[var(--button_Primary)] border-[var(--button_Primary)]"
                    : "text-[var(--backGround_primary)] hover:text-[var(--button_Primary)] border-[var(--lightgrey)]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

        {/* Floating Mobile Service Image */}
          {showScrollToTop && (
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-2 right-1 
          z-50 sm:hidden p-2 ">
        <img
          src={img2}
          alt="Service Floating"
          className="w-[140px] h-[55px] object-cover rounded-lg mobile-pulse cursor-pointer"
        />
      </div>)}

      {/* Back to Top Button */}
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 bg-[var(--button_Primary)] text-white p-3 rounded-full shadow-md hover:bg-[var(--button_Primary_hover)] transition cursor-pointer"
          aria-label="Back to top"
        >
           <MoveUp />
        </button>
      )}

        {/* Modal */}
      <ContactModal open={open} onClose={onClose}>
        <RequestAQuote  />
      </ContactModal>

    </>
  );
}

export default Header; 

