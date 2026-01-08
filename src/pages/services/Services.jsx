// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { ArrowRight } from "lucide-react"; // icon for button
// import img1 from "../../assets/gif/customdashboard.gif";
// import img2 from "../../assets/gif/customchart.gif";
// import ContactModal from "../../component/ContactModal";

// export default function Services() {
//   const { id } = useParams();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const cardData = [
//     {
//       id: 1,
//       image: img1,
//       title: "Custom Dashboard Development",
//       description: "Full details about Custom Dashboard Development service...",
//     },
//     {
//       id: 2,
//       image: img2,
//       title: "Custom Chart & Visualization Creation",
//       description: "Full details about Custom Chart & Visualization service...",
//     },
//   ];

//   const handleSeeMore = (card) => {
//     setSelectedCard(card);
//     setModalOpen(true);
//   };

//   const handleClose = () => {
//     setModalOpen(false);
//     setSelectedCard(null);
//   };

//   return (
//     <div className="px-4 md:px-10 py-16">
//       <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//         Service Details
//       </h1>

//       <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
//         {cardData.map((card) => (
//           <div
//             key={card.id}
//             className="relative bg-white rounded-2xl overflow-hidden transform transition hover:scale-105 duration-300 shadow-lg"
//           >
//             {/* Image with gradient overlay */}
//             <div className="relative h-50 w-full">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-3 flex flex-col justify-between h-25">
//               <h2 className="text-lg md:text-xl font-bold text-gray-800">
//                 {card.title}
//               </h2>

//               <button
//                 onClick={() => handleSeeMore(card)}
//                 className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-1 rounded-full font-medium hover:bg-blue-700 transition cursor-pointer"
//               >
//                 See More
//                 <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <ContactModal open={modalOpen} onClose={handleClose}>
//           <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
//             <p className="text-gray-700">{selectedCard.description}</p>
//           </div>
//         </ContactModal>
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import img1 from "../../assets/gif/customdashboard.gif";
import img2 from "../../assets/gif/customchart.gif";
import ContactModal from "../../component/ContactModal";

export default function Services() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      image: img1,
      title: "Custom Dashboard Development",
      description: "Full details about Custom Dashboard Development service...",
    },
    {
      id: 2,
      image: img2,
      title: "Custom Chart & Visualization Creation",
      description: "Full details about Custom Chart & Visualization service...",
    },
  ];

  const handleSeeMore = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="relative px-4 md:px-10 py-16">

      {/* 🔙 Back to Home Icon */}
    <button
      onClick={() => navigate("/")}
      className="
        fixed top-14 left-6 z-50
        flex items-center gap-2
        text-gray-800 font-semibold
        px-2 py-1
        border-b-2 border-transparent
        hover:border-blue-600
        hover:text-blue-600
        transition-all duration-300
        group
      "
      title="Back to Home"
    >
      <ArrowLeft
        size={20}
        className="
          transition-transform duration-300
          group-hover:-translate-x-1
        "
      />
      <span className="text-base tracking-wide">
        Back to Home
      </span>
    </button>

      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Service Details
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative bg-white rounded-2xl overflow-hidden transform transition hover:scale-105 duration-300 shadow-lg"
          >
            {/* Image */}
            <div className="relative h-50 w-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col justify-between h-25">
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                {card.title}
              </h2>

              <button
                onClick={() => handleSeeMore(card)}
                className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-1 rounded-full font-medium hover:bg-blue-700 transition"
              >
                See More
                <ArrowRight size={18} />
              </button>
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
            <p className="text-gray-700">
              {selectedCard.description}
            </p>
          </div>
        </ContactModal>
      )}
    </div>
  );
}
