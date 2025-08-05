"use client"
import Image from "next/image";
import { HyperText } from "./magicui/hyper-text";
import { useState, useEffect } from "react";
import { Data } from "@/data/data";


const Intro = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 py-12 z-10 relative border border-gray-200 bg-gray-50/90 rounded-lg shadow-lg max-w-4xl mx-auto'>
            <div className='flex-shrink-0'>
                <Image
                    src='/images/me.jpg'
                    alt="picture of me"
                    width={120}
                    height={120}
                    className='rounded-full border border-gray-300 shadow-lg w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 '
                />
            </div>
            <div className='flex flex-col gap-4 text-center md:text-left'>
                {isMounted ? (
                    <HyperText 
                        delay={.2}
                        as={"h1"}
                        animateOnHover={false}
                        duration={1000}
                        className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight"
                    >
                      {`HELLO👋! I'M ${Data.name}`}
                    </HyperText>
                ) : (
                    <h1>
                    </h1>
                )}
                {isMounted ? (
                    <HyperText 
                        delay={.4}
                        as={"p"}
                        animateOnHover={false}
                        duration={1200}
                        className="text-base sm:text-lg md:text-base text-gray-700 leading-relaxed max-w-2xl"
                    >
                          {`${Data.description}`}
                    </HyperText>
                ) : (
                    <p>  
                    </p>
                )}
            </div>
        </div>
    );
};

export default Intro;