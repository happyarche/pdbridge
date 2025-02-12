import { ReactNode } from "react";

interface RoundedContainerProps {
  children: ReactNode;
}

const RoundedContainer = ({ children }: RoundedContainerProps) => {
  return (
      
     <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-10">
     {/* 컨텐츠 영역 */}
     <div className="border w-full md:w-[880px]">{children}</div>

     {/* 광고 영역 */}
     <aside className="border w-full md:w-[280px]">{/* 광고 삽입 */} 
       <h2></h2>
     </aside>
   </div>
  );
};

export default RoundedContainer;
