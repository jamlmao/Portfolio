import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'



const ProjectContent = () => {
  return (
   <BlurFade direction="left" delay={0.25}>
           <div className='flex flex-col md:flex-row items-start gap-6 md:gap-8 px-6 py-12 z-10 relative bg-zinc-700/90 rounded-lg shadow-lg w-full mx-auto dark:bg-zinc-200 transition-all duration-300 ease-in-out dark:shadow-zinc-50/30'>
           </div>
    </BlurFade>
  )
}

export default ProjectContent