

/*레이아웃 필요할 시 사용. 메인을 통합하고, 세부페이지를 나누는 방식으로 사용 한다*/

const FullLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col">
        <main className="flex-grow w-full flex justify-center">
          <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-6 ">
            <div className="bg-gray-20 w-full md:w-[880px]">{children}</div>
            <div className="bg-gray-80 w-full md:w-[296px] px-5 py-10">사이드메뉴</div>
          </div>
        </main>
      </div>
    );
  };
  
  export default FullLayout;
  