"use client "

import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious, } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { Data } from '../../../../data/data';
import Image from 'next/image'





const ProjectContent = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
   <BlurFade direction="left" delay={0.25}>
      <div className='flex flex-col items-start gap-6 md:gap-8 px-6 py-12 z-10 relative bg-zinc-700/90 rounded-lg shadow-lg w-full mx-auto dark:bg-zinc-200 transition-all duration-300 ease-in-out dark:shadow-zinc-50/30'>
        <h2 className="text-2xl font-bold text-white dark:text-gray-800 mb-4">My Projects</h2>
        
        {Data.projects.map((project, projectIndex) => (
          <div key={projectIndex} className="w-full mb-10">
            <h3 className="text-xl font-semibold text-white dark:text-gray-700 mb-3">{project.title}</h3>
            <p className="text-white/80 dark:text-gray-600 mb-4">{project.description}</p>
            
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-3xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {project.imageUrl.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-1 bg-black/20 dark:bg-white/20">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${imageIndex + 1}`}
                            width={800}
                            height={450}
                            className="rounded-md object-cover w-full h-full"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            
            <div className="flex gap-2 mt-4 flex-wrap">
              {Object.entries(project.technologies[0]).map(([tech, Icon]) => (
                <div key={tech} className="flex items-center gap-1 bg-black/20 dark:bg-white/20 px-3 py-1 rounded-full">
                  <Icon className="h-4 w-4 text-white dark:text-gray-800" />
                  <span className="text-sm text-white dark:text-gray-800">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BlurFade>
  )
}

export default ProjectContent