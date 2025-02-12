const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full max-w-[1200px] mx-auto p-10">
          {children}
        </main>
      </div>
    );
  };
  
  export default MainLayout;
  