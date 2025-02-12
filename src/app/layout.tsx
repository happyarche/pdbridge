"use client";
import "./globals.css";
import Layout from "@/components/Layout";
import MainLayout from "@/components/MainLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { AdBanner } from "@/components/AdBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <Header />
        </header>

        
        <div className="flex flex-col flex-grow pt-[60px] min-h-screen ">
          <main className="flex-grow">
            {isMainPage ? <MainLayout>{children}</MainLayout> : <Layout adSlot={<AdBanner/>}>{children}</Layout>}
          </main>

          
          <Footer />
        </div>
      </body>
    </html>
  );
}
