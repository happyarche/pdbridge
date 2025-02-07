// components/Header.tsx
"use client";

import React from "react";
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow py-4">
      <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center">
        {/* 왼쪽 영역: 로고와 내비게이션 */}
        <div className="flex items-center space-x-6">
          {/* 로고 영역 */}
          <div className="font-bold text-xl"> <Link href="/">PD bridge</Link></div>
          {/* 내비게이션 메뉴 */}
          <nav>
            <ul className="flex space-x-4">
              <li className="cursor-pointer hover:text-blue-500"> <Link href="/bcomponents">기획자를 위한 개발용어</Link></li>
              <li className="cursor-pointer hover:text-blue-500">상단메뉴 2</li>
              <li className="cursor-pointer hover:text-blue-500">상단메뉴 3</li>
            </ul>
          </nav>
        </div>

        {/* 오른쪽 영역: 로그인, 마이페이지 */}
        <div>
          <ul className="flex space-x-4 items-center">
            <li className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
              <span>Login</span>
            </li>
            <li className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
              <span>SignUp</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
