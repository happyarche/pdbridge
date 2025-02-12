"use client";

import HoverCard from "@/components/basic/HoverCard";
import FocusInOut from "@/components/basic/FocusInOut";
import OnChange from "@/components/basic/OnChange";
import ToggleComponent from "@/components/basic/ToggleComponent";
import TooltipComponent from "@/components/basic/TooltipComponent";
import FloatingTooltip from "@/components/basic/FloatingTooltip";

export default function Home() {
    return (
        <div className="text-center text-xl py-20">
             <h3 className="text-2xl font-bold mb-5 self-start">기획서 작성시 기술해야 하는 기능명</h3>
            <div className="grid gap-5 w-full max-w-[1280px] h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* 첫번째 칸: contents와 title */}
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                        <HoverCard />
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
                        <FocusInOut />
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
                        <OnChange />
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        OnChange 이벤트
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                        <ToggleComponent />
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        토글
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1 min-h-[200px] flex justify-center items-center">
                    <TooltipComponent/>
                    </div>
                    {/* Title 영역: 높이를 50px로 고정 */}
                    <div className="h-[50px] flex justify-center items-center border-t border-gray-300">
                        툴팁
                    </div>
                </div>
                <div className="border border-gray-300 flex flex-col bg-white">
                    {/* Content 영역: 남은 공간 모두 차지 */}
                    <div className="flex-1  min-h-[200px] flex justify-center items-center">
                        <FloatingTooltip/>
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
