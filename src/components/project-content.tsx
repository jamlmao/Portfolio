"use client"

import React, { useState, useEffect} from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
 } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { Data } from '../data/data';
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

const getTechIcon = (techName: string) => {
  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    'Angular': Icons.angular,
    'Laravel': Icons.laravel,
    'MySQL': Icons.mysql,
    'Next.js': Icons.nextjs,
    'Tailwind CSS': Icons.tailwind,
    'TypeScript': Icons.typescript,
    'React': Icons.react,
    'Shadcn': Icons.shadcn,
    'Supabase': Icons.supabase
  };

  return iconMap[techName];
};


const ProjectContent = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
   <BlurFade direction="left" delay={0.25}>
      <div className='flex flex-col items-start gap-4 md:gap-8 px-6 py-12 z-10 relative bg-zinc-700/90 rounded-lg shadow-lg w-full mx-auto dark:bg-zinc-200 transition-all duration-300 ease-in-out dark:shadow-zinc-50/30'>
        <h2 className="text-2xl font-bold text-white dark:text-gray-800 mb-4">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {Data.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-md dark:border-gray-700 shadow-xl overflow-hidden bg-white dark:bg-gray-800 max-w-md w-full"
            >
              {mounted ? (
                <Carousel
                  opts={{ loop: true }}
                  plugins={[
                    Autoplay({
                      delay: 2500,
                      stopOnInteraction: true
                    })
                  ]}
                  className="w-full max-w-md"
                >
                  <CarouselContent>
                    {project.imageUrl.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex} className="flex justify-center items-center w-full h-64">
                        <Image
                          src={image}
                          alt={`Project ${project.title} - Image ${imgIndex + 1}`}
                          width={800} 
                          height={450} 
                          className="rounded-t-lg shadow-md object-cover w-full h-full"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <div className="animate-pulse">Loading...</div>
                </div>
              )}

              <div className="flex flex-col gap-3 p-4 grow">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 w-full break-words">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-[4px]">
                  {project.technologies.map((tech, techIndex) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <span key={techIndex}>
                        <Badge className="flex items-center gap-1.5 bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                          {TechIcon && <TechIcon className="h-3.5 w-3.5" />}
                          {tech}
                        </Badge>
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-2 mt-auto">
                <Link href={project.href}>
                  <Tooltip>
                     <TooltipTrigger asChild>
                      <Button variant="default">
                        <Icons.github className='h-4 w-4' />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href={project.url} target='_blank'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="default">
                        <Icons.globe className='h-4 w-4' />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Demo (Landing Page)</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>

                
              </div>
            </div>
          ))}
        </div>
        

        
      </div>
    </BlurFade>
  )
}

export default ProjectContent