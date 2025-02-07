// app/page.tsx
"use client";

import Clock from "@/components/Clock";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#f5f5f5] p-5">
            <h3 className="text-2xl font-bold mb-5 self-start">여기는 메인페이지</h3>
            <div className="grid gap-5 w-full max-w-[1280px] h-auto md:h-[80vh] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* 첫번째 칸: contents와 title */}
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                        <Clock />
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        마우스 롤오버
                    </div>
                </div>
                {/* 두번째 칸: HoverCard 컴포넌트 */}
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                        Cell2
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        포커스 인 아웃
                    </div>
                </div>
                {/* 나머지 칸들 */}
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                    Cell2
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        OnChange 이벤트
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                    Cell2
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        토글
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1 min-h-[200px] flex justify-center items-center">
                    Cell2
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        툴팁
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                    Cell2
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        플로팅 툴팁
                    </div>
                </div>
            </div>
        </div>
    );
}
