import React from "react";
import "./Stepper.css";

const Stepper = () => {
  return (
    <div className="flex items-center justify-center mt-10 mb-8 relative gap-16">
      {/* Step 1 */}
      <div className="relative flex flex-col items-center z-10 step-item step-1">
        <div className="circle bg-teal-400">1</div>
      </div>

      {/* Step 2 */}
      <div className="relative flex flex-col items-center z-10 step-item step-2">
        <div className="circle bg-blue-900">2</div>
      </div>

      {/* Step 3 */}
      <div className="relative flex flex-col items-center z-10 step-item step-3">
        <div className="circle bg-blue-700">3</div>
      </div>
    </div>
  );
};

export default Stepper;
