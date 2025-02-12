
const Layout: React.FC<{ children: React.ReactNode; adSlot?: React.ReactNode }> = ({ children, adSlot }) => {
    return (
      <div className="flex flex-col ">
        <main className="flex-grow w-full flex justify-center">
          <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-6">
            <div className="bg-gray-50 w-full md:w-[880px]">{children}</div>
            <aside className="bg-gray-50 w-full md:w-[296px] px-5 py-10">{adSlot}</aside>
          </div>
        </main>
      </div>
    );
  };
  
  export default Layout;

  
  

  