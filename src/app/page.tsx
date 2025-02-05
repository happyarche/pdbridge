"use client";
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [date, setDate] = useState(new Date());

  // 1초마다 현재 시간을 업데이트 합니다.
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

  // 각도 계산 (360도 / 60초 = 6도, 360도 / 12시간 = 30도)
  const secondAngle = seconds * 6; // 초침: 1초에 6도
  const minuteAngle = minutes * 6 + seconds * 0.1; // 분침: 1분에 6도, 초에 따른 미세 조정
  const hourAngle = hours * 30 + minutes * 0.5; // 시침: 1시간에 30도, 분에 따른 미세 조정

  return (
    <div className="container">
      <div className="clock">
        {/* 시침 */}
        <div
          className="hand hour"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        />
        {/* 분침 */}
        <div
          className="hand minute"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        />
        {/* 초침 */}
        <div
          className="hand second"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        />
      </div>

      {/* 스타일은 styled-jsx를 사용 */}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f5f5f5;
        }
        .clock {
          position: relative;
          width: 300px;
          height: 300px;
          border: 10px solid #333;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .hand {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform-origin: bottom center;
          background: #333;
        }
        .hour {
          width: 8px;
          height: 70px;
          margin-left: -4px;
          border-radius: 4px;
        }
        .minute {
          width: 6px;
          height: 100px;
          margin-left: -3px;
          border-radius: 3px;
        }
        .second {
          width: 2px;
          height: 120px;
          background: red;
          margin-left: -1px;
          border-radius: 1px;
        }
      `}</style>
    </div>
  );
}
