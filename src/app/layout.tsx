// app/layout.tsx
import "./globals.css"; // Tailwind CSS가 globals.css에 적용되었다고 가정합니다.
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 flex flex-col min-h-screen">
        {/* 상단 메뉴 영역 */}
        <header className="bg-white shadow py-4">
          <div className="max-w-[1280px] mx-auto px-4">
            {/* 메뉴 내용은 추후 수정 가능 */}
            <nav>
              <ul className="flex space-x-4">
                <li>상단 메뉴1</li>
                <li>상단 메뉴2</li>
                <li>상단 메뉴3</li>
              </ul>
            </nav>
          </div>
        </header>

        {/* 컨텐츠 영역 */}
        <main className="flex-grow">
          <div className="max-w-[1280px] mx-auto px-4 py-8">
            {children}
          </div>
        </main>

        {/* 하단 메뉴 영역 */}
        <footer className="bg-white shadow py-4">
          <div className="max-w-[1280px] mx-auto px-4">
            {/* 하단 메뉴 내용 */}
            <div>하단 메뉴</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
