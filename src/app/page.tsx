// app/page.tsx
"use client";

import HoverCard from "@/components/basic/HoverCard";
import Clock from "../components/Clock";

export default function Home() {
  return (
    <div className="container">
     
      
      <div className="grid">
        {/* 첫번째 칸: Clock 컴포넌트 노출 */}
        <div className="grid-item">
          <Clock />
        </div>
        {/* 나머지 5칸: 임시 콘텐츠 또는 필요에 따라 다른 컴포넌트로 대체 */}
        <div className="grid-item"><HoverCard /></div>
        <div className="grid-item"></div>
        <div className="grid-item">Cell 4</div>
        <div className="grid-item">Cell 5</div>
        <div className="grid-item">Cell 6</div>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f5;
          padding: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 20px;
          width: 80vw;
          height: 80vh;
        }
        .grid-item {
          border: 1px solid #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
        }
        /* 화면 너비가 768px 이하인 경우 */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            width: 90vw;
            height: auto;
          }
        }
        /* 화면 너비가 480px 이하인 경우 */
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
}
