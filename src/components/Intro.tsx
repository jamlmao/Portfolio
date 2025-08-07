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
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 py-12 z-10 relative bg-zinc-700/90  rounded-lg shadow-lg max-w-4xl mx-auto dark:bg-zinc-200 transition-all dark:shadow-zinc-50/30'>
            <div className='flex-shrink-0'>
                <Image
                    src='/images/me.jpg'
                    alt="picture of me"
                    width={120}
                    height={120}
                    className='rounded-full shadow-lg w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 '
                />
            </div>
            <div className='flex flex-col gap-4 text-center md:text-left'>
                {isMounted ? (
                    <HyperText 
                        delay={1}
                        as={"h1"}
                        animateOnHover={false}
                        duration={800}
                        className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-zinc-200/90 dark:text-gray-600"
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
                        as={"h2"}
                        animateOnHover={false}
                        duration={900}
                        className="text-base sm:text-lg md:text-base text-zinc-200/90 leading-relaxed text-center dark:text-gray-600/90"
                    >
                          {`${Data.description}`}
                    </HyperText>
                ) : (
                    <h2>
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Intro;