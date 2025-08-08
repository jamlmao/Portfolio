"use client";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import { PageType } from "@/data/data";
import { useState } from "react";
import AboutPage from "./(about)/about/page";
import { BlurFade } from "@/components/magicui/blur-fade";



export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');


   const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Intro />;
      case 'about':
        return <AboutPage />;
      // case 'projects':
      //   return <Projects />;
      // case 'contact':
      //   return <Contact />;
      default:
        return <Intro />;
    }
  };




  return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background px-4 py-8 sm:px-8 min-h-screen">
        {renderContent()}

        <BlurFade direction="right" delay={0.25}> 
          <Navbar orientation="horizontal" onPageChange={setCurrentPage} currentPage={currentPage} />
        </BlurFade>
    </div>
  );
}
