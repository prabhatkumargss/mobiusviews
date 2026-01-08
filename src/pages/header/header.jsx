
import React, { useState, useEffect } from "react";
import { Menu, X, MoveUp } from "lucide-react";
import "../../assets/styles/headerStyle.css";
import img from "../../assets/images/mobiousLogo.png";
import img2 from "../../assets/images/service.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactModal from "../../component/ContactModal";
import RequestAQuote from "../requestAQuote/RequestAQuote";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Get Started", id: "contactus" },
  ];

  const onClose = () => setOpen(false);

  // 👉 Handle nav click
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    if (id === "contactus") {
      setOpen(true);
    } else {
      setActiveSection(id);
    }

    setIsOpen(false);
  };

  // 👉 Scroll spy
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      let current = "";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 80;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            current = id;
          }
        }
      });

      setActiveSection(current);
      setShowScrollToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-[var(--backGround_primary)] shadow-md z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={img} alt="Logo" className="h-9 w-9 object-contain" />
            <span className="text-[var(--body_Header)] font-bold text-lg">
              MobiusViews
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`font-bold border-b-2 cursor-pointer transition ${
                  activeSection === id
                    ? "text-[var(--button_Primary)] border-[var(--button_Primary)]"
                    : "text-[var(--body_Header)] border-transparent hover:border-[var(--body_Header_hover)]"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[var(--button_Primary)] rounded-full w-9 h-9 flex items-center justify-center"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-[var(--body_Color)] px-4 py-3 space-y-2">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`block w-full text-left py-2 border-b ${
                  activeSection === id
                    ? "text-[var(--button_Primary)] border-[var(--button_Primary)]"
                    : "text-[var(--backGround_primary)] border-[var(--lightgrey)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Floating Service CTA (Mobile) */}
      {showScrollToTop && (
        <div
          onClick={() => setOpen(true)}
          className="fixed bottom-2 right-2 z-50 sm:hidden p-2"
        >
          <img
            src={img2}
            alt="Service"
            className="w-[140px] h-[55px] rounded-lg cursor-pointer mobile-pulse"
          />
        </div>
      )}

      {/* Back To Top */}
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 bg-[var(--button_Primary)] text-white p-3 rounded-full shadow-md"
        >
          <MoveUp />
        </button>
      )}

      {/* Modal */}
      <ContactModal open={open} onClose={onClose}>
        <RequestAQuote />
      </ContactModal>
    </>
  );
}

export default Header;
