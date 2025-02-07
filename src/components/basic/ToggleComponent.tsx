import React, { useState } from "react";

export default function ToggleComponent() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center p-4 space-y-4 transition-colors duration-300 ${
        isOn ? "bg-blue-200" : "bg-white"
      }`}
    >
      {/* 토글 스위치 */}
      <div className="relative">
        <input
          type="checkbox"
          id="toggleSwitch"
          className="sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <label
          htmlFor="toggleSwitch"
          className={`flex items-center justify-between w-16 h-8 p-1 rounded-full cursor-pointer transition-colors duration-300 ${
            isOn ? "bg-black" : "bg-gray-300"
          }`}
        >
          <span
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-8" : ""
            }`}
          ></span>
        </label>
      </div>
      {/* 토글 상태 문구 */}
      <p className="text-lg font-medium">
        {isOn ? "토글이 켜졌습니다." : "토글이 꺼졌습니다."}
      </p>
    </div>
  );
}
