"use client";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import { PageType } from "@/data/data";
import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import {workExperience} from '../data/work';


import WorkContent from "@/components/work-content";
import AboutContent from "@/components/about-content";
import ProjectContent from "@/components/project-content";
import ContactMe from "@/components/contact-me";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');


   const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Intro />;
      case 'about':
        return <AboutContent />;
      case 'work':
        return <WorkContent experiences={workExperience} />;
      case 'projects':
        return <ProjectContent />;
      case 'contact':
        return <ContactMe />;
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
