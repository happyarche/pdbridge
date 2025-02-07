import React from "react";

export default function FloatingTooltip() {
  return (
    <div className="relative inline-block">
      {/* 트리거 텍스트 */}
      <div className="cursor-pointer text-black">signUp</div>
      {/* 항상 보이는 툴팁 */}
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <div className="flex flex-col items-center">
          {/* 삼각형 포인터 - 툴팁 박스와 붙어 있음 */}
          <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-black" />
          {/* 툴팁 박스 */}
          <div className="px-6 py-2 bg-black text-white text-sm rounded shadow-lg whitespace-nowrap">
            Tooltip text here.
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -5px);
          }
          100% {
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  );
}
