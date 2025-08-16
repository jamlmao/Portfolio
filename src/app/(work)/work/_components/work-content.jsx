import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade';
import { Data } from '../../../../data/data';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const WorkContent = () => {
  return (
     <BlurFade direction="left" delay={0.25}>
        <div className='flex flex-col items-start gap-6 px-6 py-12 z-10 relative bg-zinc-700/90 rounded-lg shadow-lg w-full mx-auto dark:bg-zinc-200 transition-all duration-300 ease-in-out dark:shadow-zinc-50/30'>
          <h2 className="text-2xl font-bold text-white dark:text-gray-800 mb-6">Work Experience</h2>
          
          {Data.work.length === 0 ? (
            <p className="text-white/80 dark:text-gray-600 italic">No work experience yet. Check back soon!</p>
          ) : (
            <div className="space-y-8 w-full">
              {Data.work.map((job, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-black/20 dark:bg-white/20 rounded-lg hover:bg-black/30 dark:hover:bg-white/30 transition-all">
                  <div className="flex-shrink-0">
                    <div className="bg-white rounded-md p-2 h-16 w-16 flex items-center justify-center">
                      <Image 
                        src={job.logoUrl} 
                        alt={`${job.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <h3 className="text-xl font-semibold text-white dark:text-gray-800">
                        {job.position}
                      </h3>
                      <span className="text-sm text-white/70 dark:text-gray-600">
                        {job.start} - {job.end}
                      </span>
                    </div>
                    
                    <Link 
                      href={job.href}
                      target="_blank"
                      className="flex items-center text-blue-400 dark:text-blue-600 hover:underline mb-2"
                    >
                      <span>{job.company}</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                    
                    <p className="text-white/80 dark:text-gray-600 mt-2">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </BlurFade>
  )
}

export default WorkContent