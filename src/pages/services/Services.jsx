
import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import img1 from "../../assets/gif/customdashboard.gif";
import img2 from "../../assets/gif/customchart.gif";
import ContactModal from "../../component/ContactModal";

export default function Services() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

   // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      id: 1,
      image: img1,
      title: "Custom Dashboard Development",
      description:
        "We build powerful, responsive, and data-driven dashboards tailored to your business needs.",
    },
    {
      id: 2,
      image: img2,
      title: "Custom Chart & Visualization Creation",
      description:
        "Interactive charts and visualizations that convert raw data into meaningful insights.",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div id="services" className="relative px-4 sm:px-6 md:px-10 py-16">
   <div className="relative flex items-center w-full px-4 sm:px-6 md:px-10 py-4">
  {/* Back Button on Left */}
  <div className="flex-shrink-0">
          <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600 transition group text-sm sm:text-base cursor-pointer"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        {/* Text hidden on mobile, visible on sm+ */}
        <span className="hidden sm:inline">Back to Home</span>
      </button>
  </div>

  {/* Centered Title */}
  <div className="flex-1 text-center">
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
      Service Details
    </p>
  </div>
</div>

    

      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="
              cursor-pointer
              bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-xl
              transition-all duration-300
              active:scale-[0.98]
              flex flex-col
            "
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {card.description}
              </p>

              {/* Button (visual only – whole card clickable) */}
              <div className="mt-auto">
                <div
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-blue-600 text-white
                    px-4 py-2 rounded-full
                    text-sm font-medium
                    w-full
                  "
                >
                  See More
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <ContactModal open={modalOpen} onClose={handleClose}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {selectedCard.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {selectedCard.description}
            </p>
          </div>
        </ContactModal>
      )}
    </div>
  );
}
