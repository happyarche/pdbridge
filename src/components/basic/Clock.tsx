"use client";

import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 시, 분, 초 각도 계산
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;

  const secondAngle = seconds * 6; // 1초마다 6도
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  // 1부터 12까지 숫자 배열
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="relative w-[300px] h-[300px] border-4 border-gray-800 rounded-full bg-white shadow-lg mx-auto">
      {/* 시계 숫자들 */}
      {numbers.map((num) => {
        // 12시가 위쪽에 오도록 -90도 보정 후 라디안으로 변환
        const angle = ((num * 30) - 90) * (Math.PI / 180);
        const radius = 120; // 숫자들이 위치할 원의 반지름 (px)
        // 시계 중심이 (150, 150)인 경우
        const x = 150 + radius * Math.cos(angle);
        const y = 150 + radius * Math.sin(angle);
        return (
          <div
            key={num}
            className="absolute w-8 h-8 flex items-center justify-center text-lg font-bold transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            {num}
          </div>
        );
      })}

      {/* 시침 */}
      <div
        className="absolute bottom-[50%] left-[50%] origin-bottom bg-gray-800"
        style={{
          width: "8px",
          height: "70px",
          transform: `rotate(${hourAngle}deg)`,
          marginLeft: "-4px",
        }}
      ></div>
      {/* 분침 */}
      <div
        className="absolute bottom-[50%] left-[50%] origin-bottom bg-gray-800"
        style={{
          width: "6px",
          height: "100px",
          transform: `rotate(${minuteAngle}deg)`,
          marginLeft: "-3px",
        }}
      ></div>
      {/* 초침 */}
      <div
        className="absolute bottom-[50%] left-[50%] origin-bottom bg-red-500"
        style={{
          width: "2px",
          height: "120px",
          transform: `rotate(${secondAngle}deg)`,
          marginLeft: "-1px",
        }}
      ></div>
    </div>
  );
};

export default Clock;
