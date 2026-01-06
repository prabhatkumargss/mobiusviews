import React from 'react';
import '../styles/loopStyle.css'; // Import custom CSS for animation

const LoopSteps = () => {
  return (
    <div className="flex items-center justify-around gap-1 max-w-4xl mx-1 mt-1">
      {/* Step 1 */}
        <div className="px-4 py-2  flex items-center gap-1">
        <span className="text-[54px] font-bold text-[#1f315d]">3</span>
        <span className="text-[24px] font-bold" style={{ color: '#1f315d' }}>Step</span>
        </div>

         <div className="flex items-center justify-center bg-gray-100">
      <div className="infinity-wrapper relative">
        {/* White circular center with "3" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md z-10">
          <span className="text-[54px] font-bold" style={{ color: "#1b2c57" }}>3</span>
        </div>
      </div>
    </div>

      {/* Step 3 */}
       <div className="px-4 py-2 items-center  gap-1">
         <p className="text-[18px] font-medium text-[#1f315d]">Positive Client</p>
         <p className="text-[12px] font-medium" style={{ color: '#1f315d' }}>Positive Client</p>
        </div>
    </div>
  );
};

export default LoopSteps;
