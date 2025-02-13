"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from "react";
import X from "@/components/icons/x";
import Hamburger from "@/components/icons/hamburger";

const links = [
  { name: '강좌', href: '/lecture' },
  { name: '퀴즈', href: '/quiz' },
  { name: '피디브릿지', href: '/aboutus' },
  { name: '로그인', href: '/auth/login' },
  { name: '회원가입', href: '/auth/signup' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  {/* <--- 콘솔엔 정상으로 찍히는데 적용이 안됨*/}
  useEffect(() => {
    console.log(`Menu is ${isMenuOpen ? "open" : "closed"}`);
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    console.log(`Body overflow is set to ${document.body.style.overflow}`);
  }, [isMenuOpen]);
  {/* 콘솔엔 정상으로 찍히는데 적용이 안됨 --->*/}
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4">
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <h1 className="text-xl font-bold"><Link href="/">PDbridge</Link></h1>
        <nav className="relative">
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center px-3 py-2 text-gray-500 border-gray-600 hover:text-black hover:border-black"
          >
            {/*햄버거 버튼*/}
            <Hamburger />
          </button>
          {/*메뉴 레이어 시작*/}
          <div
            className={`fixed top-0 right-0 h-full w-[100%] bg-black bg-opacity-80 shadow-md z-50 transform transition-transform duration-300 overflow-y:scroll ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              {/* 레이어 속 x 버튼 */}
              <X />
            </button>
            <ul className="flex flex-col space-y-4 p-4 mt-12">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex h-[32px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ${
                      isActive ? 'bg-sky-100 text-blue-600' : 'bg-gray-50'
                    }`}
                    onClick={toggleMenu} // 메뉴 클릭 시 레이어 닫기
                  >
                    <p>{link.name}</p>
                  </Link>
                );
              })}
            </ul>
          </div>
          {/*메뉴 레이어 종료*/}
          <ul className="hidden md:flex space-x-4">
            {links.map((link) => {
              const isActive = pathname === link.href; // 현재 페이지 확인
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    flex h-[32px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
                    hover:bg-sky-100 hover:text-blue-600
                    ${isActive ? 'bg-sky-100 text-blue-600' : 'bg-gray-50'}
                  `}
                >
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}