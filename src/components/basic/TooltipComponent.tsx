import React, { useState } from "react";

export default function TooltipComponent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* 툴팁 대상 요소 */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-4 bg-blue-500 text-white rounded cursor-pointer"
      >
        Hover me!
      </div>
      {/* 마우스 오버 시 툴팁 노출 */}
      {isHovered && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
          <div className="flex flex-col items-center">
            {/* 삼각형 포인터 */}
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-black" />
            {/* 툴팁 내용 - 삼각형과 여백 없음, 넓게, 텍스트 한 줄 */}
            <div className="px-6 py-2 bg-black text-white text-sm rounded shadow-lg whitespace-nowrap">
              Tooltip text here.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
