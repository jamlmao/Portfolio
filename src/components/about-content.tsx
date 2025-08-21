"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TypingAnimation, AnimatedSpan, Terminal } from '@/components/magicui/terminal';
import {Data} from '../data/data';
import { BlurFade } from '@/components/magicui/blur-fade';

const AboutContent = () => {
    const [showSummary, setShowSummary] = useState(false);

    useEffect(() => {
        // Set a timer to transition to summary-only view
        const timer = setTimeout(() => {
            setShowSummary(true);
        }, 6000); 
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
      <BlurFade direction="left" delay={0.25}>
        <div className='flex flex-col md:flex-row items-start gap-6 md:gap-8 px-6 py-12 z-10 relative bg-zinc-700/90 rounded-lg shadow-lg w-full mx-auto dark:bg-zinc-200 transition-all duration-300 ease-in-out dark:shadow-zinc-50/30'>
          
          {/* Avatar Image - Centered on mobile */}
          <div className='absolute -top-16 sm:-top-18 md:-top-20 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 sm:-left-10 md:-left-16 z-20'>
            <Image
              src='/images/me.jpg'
              alt="picture of me"
              width={120}
              height={120}
              className='rounded-full shadow-lg w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40'
            />
          </div>
        
          <div className='flex flex-col gap-4 text-center md:text-left w-full'>
            <Terminal className='text-sm md:text-base font-mono w-full h-auto md:max-h-none p-4 space-y-1 transition-all duration-500 ease-in-out overflow-y-auto md:overflow-visible overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              {!showSummary ? (
                <>
                  <TypingAnimation className="block">&gt; npm install@about-me </TypingAnimation>
                  <AnimatedSpan delay={1500} className="text-green-500 block">
                    <span>✔ Verifying framework. Found about.js.</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan delay={2000} className="text-green-500 block">
                    <span>✔ Updating aboutme.json.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={2500} className="text-blue-500 block">
                    <span>ℹ Updated 1 file:</span>
                    <span className="block pl-4">-  Success! Project initialization completed.</span>
                  </AnimatedSpan>
                  
                  <AnimatedSpan delay={4000} className="text-muted-foreground block">
                    <span>Loading profile data...</span>
                  </AnimatedSpan>
                </>
              ) : (
                <BlurFade direction="up" delay={0.2}>
                  <div className="text-muted-foreground whitespace-pre-wrap break-words max-w-full leading-relaxed">
                    {Data.summary}
                  </div>
                </BlurFade>
              )}
            </Terminal>
          </div>
        </div>
      </BlurFade>
    );
};

export default AboutContent