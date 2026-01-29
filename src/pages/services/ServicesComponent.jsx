import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServicesComponent({ data, title }) {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(data?.[0] || null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      item.tags?.some((tag) =>
        tag?.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [data, searchQuery]);

  useEffect(() => {
    if (
      filteredData.length > 0 &&
      !filteredData.find((i) => i.id === activeImage?.id)
    ) {
      setActiveImage(filteredData[0]);
    }
  }, [filteredData, activeImage]);

  useEffect(() => {
    setActiveIndex(0);
    setShowVideo(false);
  }, [activeImage]);

  // Handle Next/Prev Navigation
  const handleNext = (e) => {
    e.stopPropagation();
    if (activeIndex < activeImage.allThumbnails.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowVideo(false);
        setIsZoomed(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-slate-50 px-6 md:px-12 font-sans mt-16">
      <div className="mx-auto">
        {/* ROW 1: HEADER & SEARCH BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 mt-6">
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors text-slate-700 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
              <span className="text-button_Primary">{title}</span>
            </h1>
          </div>

          <div className="relative w-full md:max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-8 pr-4 py-2 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-button_Primary/20 focus:border-button_Primary transition-all shadow-sm"
            />
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT – THUMBNAIL FEED (Converted to 2 columns) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 max-h-[430px] 2xl:max-h-[850px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 content-start p-6">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className={`group relative flex flex-col gap-2 p-1 rounded-xl border-2 transition-all duration-300 cursor-pointer h-fit
        ${
          activeImage?.id === item.id
            ? "border-button_Primary bg-white shadow-lg scale-[1.02]"
            : "border-transparent bg-gray-100 hover:bg-white hover:shadow-md"
        }
      `}
                >
                  {/* Title - made text smaller (text-xs) to fit 2-column layout */}
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-bold text-[10px] sm:text-xs truncate transition-colors ${
                        activeImage?.id === item.id
                          ? "text-button_Primary"
                          : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Image - adjusted height to h-16 or h-20 for better proportions */}
                  <div className="relative h-16 sm:h-20 overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={`/${item.thumbnailUrl}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT – SHOWCASE DISPLAY */}
            <div className="lg:col-span-7">
              {/* Decreased outer padding from p-6 to p-3 */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-2 md:p-4 flex flex-col">
                {activeImage && (
                  <div className="flex flex-col">
                    {/* VIEWPORT: Decreased min-h from 400px to 300px and max-h from 500px to 400px */}
                    <div className="relative bg-slate-50 rounded-2xl overflow-hidden group md:min-h-[300px] md:max-h-[400px] 2xl:max-h-[600px]">
                      <AnimatePresence mode="wait">
                        {showVideo && activeImage.videoUrl ? (
                          <motion.div
                            key="video-player"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full bg-black relative"
                          >
                            <video
                              controlsList="nodownload noplaybackrate"
                              disablePictureInPicture
                              src={`/${activeImage.videoUrl}`}
                              controls
                              autoPlay
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="image-carousel"
                            className="w-full h-full relative overflow-hidden flex items-center justify-center"
                          >
                            {/* NAVIGATION BUTTONS (Slightly smaller p-2) */}
                            {activeIndex > 0 && (
                              <button
                                onClick={handlePrev}
                                className="absolute left-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg text-slate-800 transition-all cursor-pointer"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M15 19l-7-7 7-7"
                                  />
                                </svg>
                              </button>
                            )}

                            {activeIndex <
                              activeImage.allThumbnails.length - 1 && (
                              <button
                                onClick={handleNext}
                                className="absolute right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg text-slate-800 transition-all cursor-pointer"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                            )}

                            <motion.img
                              key={`${activeImage.id}-${activeIndex}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              src={`/${activeImage.allThumbnails[activeIndex]}`}
                              onClick={() => setIsZoomed(true)}
                              className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                            />

                            {/* {activeImage.videoUrl && !showVideo && (
                              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={(e) => { e.stopPropagation(); setShowVideo(true); }}
                                  className="bg-button_Primary text-white px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 hover:brightness-110 cursor-pointer text-sm"
                                >
                                  <PlayIconSmall /> <span>Watch Demo</span>
                                </button>
                              </div>
                            )} */}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* BOTTOM INFO: Decreased mt-6 to mt-3 and text size to text-xl */}
                    <div className="mt-3 flex items-center justify-between px-1 gap-3">
                      <div className="flex items-center flex-col-reverse md:flex-row gap-0.5 justify-between w-full">
                        <h2 className="mt-5 md:mt-0 text-xl font-bold text-gray-800 tracking-tight ">
                          {activeImage.title}
                        </h2>
                        {activeImage.videoUrl && !showVideo && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideo(true);
                            }}
                            className="bg-button_Primary text-white px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 hover:brightness-110 cursor-pointer text-sm max-w-[150px]"
                          >
                            <PlayIconSmall /> <span>Watch Demo</span>
                          </button>
                        )}

                        {activeImage.videoUrl && showVideo && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideo(false);
                            }}
                            className="bg-button_Primary text-white px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 hover:brightness-110 cursor-pointer text-sm"
                          >
                            <StopIconSmall /> <span>Stop Demo</span>
                          </button>
                        )}

                        {/* <div className="flex gap-1.5 mt-1">
                          {activeImage.allThumbnails.map((_, index) => (
                            <div
                              key={index}
                              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index ? "w-8 bg-button_Primary" : "w-1.5 bg-gray-200"}`}
                            />
                          ))}
                        </div> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-3xl border border-dashed border-slate-300">
            <h3 className="text-xl font-bold text-slate-800">
              No matching results
            </h3>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-6 px-6 py-2 bg-button_Primary text-white rounded-full cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <img
              src={`/${activeImage.allThumbnails[activeIndex]}`}
              className="max-w-full max-h-full object-contain"
              alt="Zoomed View"
            />
            <button className="fixed top-8 right-8 p-3 bg-gray-100 rounded-full cursor-pointer shadow-md">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const PlayIconSmall = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const StopIconSmall = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <rect x="6" y="6" width="12" height="12" />
  </svg>
);
