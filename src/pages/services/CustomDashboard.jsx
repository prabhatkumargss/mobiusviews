import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Assuming you use react-router
import { customDashboardData } from "../../data/customDashboardData";

export default function CustomDashboard() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(customDashboardData?.[0] || null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic based on tags array
  const filteredData = useMemo(() => {
    return customDashboardData.filter((item) =>
      item.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  // Update active image if the current one is filtered out
  useEffect(() => {
    if (filteredData.length > 0 && !filteredData.find(i => i.id === activeImage?.id)) {
      setActiveImage(filteredData[0]);
    }
  }, [filteredData, activeImage]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeImage]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowVideo(false);
    };
    if (showVideo) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showVideo]);

  return (
    <div className=" bg-slate-50 px-6 md:px-12 font-sans mt-16">
      <div className="mx-auto">
        
{/* ROW 1: HEADER & SEARCH BAR ALIGNED */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 mt-6">
  
  {/* Left Side: Back + Title */}
  <div className="flex items-center gap-4 shrink-0">
    <button 
      onClick={() => navigate(-1)}
      className="p-2 hover:bg-gray-200 rounded-full transition-colors text-slate-700 cursor-pointer"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>
    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
      Custom <span className="text-button_Primary">Dashboards</span>
    </h1>
  </div>

  {/* Right Side: Search Bar (Width increased) */}
  <div className="relative w-full md:max-w-lg"> 
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="text"
      placeholder="Search by tags (e.g. Sales, Finance...)"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-button_Primary/20 focus:border-button_Primary sm:text-sm transition-all shadow-sm"
    />
  </div>
</div>
       

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT – THUMBNAIL FEED */}
          <div className="lg:col-span-4 space-y-4 max-h-[430px] 2xl:max-h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300">
            {filteredData.length > 0 ? ( 
              filteredData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className={`group relative flex items-center gap-4 p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer
                    ${activeImage?.id === item.id
                      ? "border-button_Primary bg-white shadow-lg translate-x-2"
                      : "border-transparent bg-gray-100 hover:bg-white hover:shadow-md"}
                  `}
                >
                  <div className="relative w-24 h-16 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={`/${item.thumbnailUrl}`}
                      alt={item.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className={`font-bold text-sm truncate transition-colors ${activeImage?.id === item.id ? "text-button_Primary" : "text-gray-700"}`}>
                      {item.title}
                    </h3>
                    <div className="flex gap-1 mt-1 overflow-x-hidden">
                      {item.tags?.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">No dashboards found for "{searchQuery}"</p>
            )}
          </div>

          {/* RIGHT – SHOWCASE DISPLAY */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-2 md:p-6 min-h-[300px] flex flex-col">
              {activeImage && (
                <div className="flex flex-col h-full">

                  {/* MAIN IMAGE VIEWPORT (Height adjusted to be more compact) */}
                  <div className="relative flex-grow bg-slate-50 rounded-2xl overflow-hidden group md:max-h-[300px] 2xl:max-h-[800px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activeImage.id}-${activeIndex}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={`/${activeImage.allThumbnails[activeIndex]}`}
                        className="w-full h-full object-contain p-4"
                      />
                    </AnimatePresence>

                    {/* HOVER PLAY BUTTON */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => setShowVideo(true)}
                        className="bg-button_Primary text-white p-5 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-300 hover:brightness-110 cursor-pointer"
                      >
                        <PlayIcon />
                      </button>
                    </div>
                  </div>

                  {/* BOTTOM INFO & CONTROLS */}
                  <div className="mt-6 flex items-center justify-between px-2">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{activeImage.title}</h2>
                      <div className="flex gap-2 mt-2">
                        {activeImage.allThumbnails.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index ? "w-10 bg-button_Primary" : "w-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                              }`}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowVideo(true)}
                      className="group flex items-center gap-2 bg-button_Primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-button_Primary/20 hover:brightness-110 transition-all active:scale-95"
                    >
                      <span className="text-sm">Show Demo</span>
                      <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO OVERLAY */}
     <AnimatePresence>
  {showVideo && activeImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 lg:p-12"
    >
      {/* 1. TOP CENTER CLOSE BUTTON */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 flex justify-center w-full"
      >
        <button
          onClick={() => setShowVideo(false)}
          className="flex flex-col items-center gap-2 group transition-transform hover:scale-110"
        >
          <div className="bg-white/10 p-3 xl:p-2 rounded-full group-hover:bg-red-500/80 text-white transition-all shadow-xl border border-white/20 cursor-pointer">
            <svg className="w-6 h-6 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <span className="text-white/70 group-hover:text-white text-xs xl:text-md font-bold tracking-widest uppercase transition-colors">
            Close (Esc)
          </span>
        </button>
      </motion.div>

      {/* 2. VIDEO CONTAINER - SET TO 70% HEIGHT */}
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-7xl h-[60vh] lg:h-[70vh] flex items-center justify-center"
      >
        <div className="w-full h-full bg-black rounded-2xl xl:rounded-[3rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
          <video 
            src={`/${activeImage.videoUrl}`} 
            controls 
            autoPlay 
            className="w-full h-full object-contain bg-black" 
          />
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

const PlayIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);