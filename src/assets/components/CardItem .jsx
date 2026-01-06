import React from 'react';
import { Lightbulb, Briefcase, CheckCircle, UserRound } from 'lucide-react';

const iconMap = {
  "Customized Solutions": <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#1d2d58]" />,
  "Industry Expertise": <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#1d2d58]" />,
  "Proven Results": <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#1d2d58]" />,
  "Proven Result": <UserRound className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#1d2d58]" />
};

const CardItem = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-lg transition">
      <div>{iconMap[title]}</div>
      <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#1d2d58]">{title}</p>
    </div>
  );
};

export default CardItem;
