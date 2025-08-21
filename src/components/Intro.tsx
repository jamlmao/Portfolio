"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Data } from "@/data/data";
import { BlurFade } from "./magicui/blur-fade";

const Intro = () => {

    return (
        <BlurFade direction="left" delay={0.25}>
            <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 py-12 z-10 relative bg-zinc-700/90  rounded-lg shadow-lg max-w-4xl mx-auto dark:bg-zinc-200 transition-all dark:shadow-zinc-50/30'>
                {/* Avatar Image */}
                <div className="absolute -top-18 -left-10 z-20">
                    <Image
                        src="/images/ggifby@nubcat.gif"
                        alt="gif by nubcat"
                        width={120}
                        height={120}
                        className="rounded-full"
                        unoptimized={true}
                     />
                </div>
                {/* Text Content */}
                <div className='flex flex-col gap-4 text-center md:text-left'>
                    <BlurFade delay={0.25 * 3}>
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-zinc-200/90 dark:text-gray-600 text-center">
                            {`Hi! I'm ${Data.name}`}
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.25 * 4}>
                        <p className="text-base sm:text-lg md:text-base text-zinc-200/90 leading-relaxed dark:text-gray-600/90">
                            {`${Data.description}`}
                        </p>
                    </BlurFade>
                </div>
            </div>
        </BlurFade>
    );
};

export default Intro;