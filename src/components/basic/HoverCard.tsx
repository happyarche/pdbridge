import React from "react";

function HoverCard() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="group relative w-64 h-40 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-xl">
        <div className="absolute inset-0 flex justify-center items-center text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:text-white">
          마우스를 올려보세요!
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
