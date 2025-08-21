"use client"

import { BlurFade } from '@/components/magicui/blur-fade'
import { Icons } from '@/components/Icons'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const ContactMe = () => {
  return (
    <BlurFade direction="left" delay={0.25}>
      <div className='flex flex-col items-center gap-4 px-6 py-12 z-10 relative bg-zinc-700/90 rounded-lg shadow-lg w-full mx-auto dark:bg-zinc-200 transition-all duration-300 ease-in-out dark:shadow-zinc-50/30'>
        <div className="w-full max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-2">Let&apos;s Connect!</h2>
          
          <p className="text-zinc-300 dark:text-zinc-700 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line! ✨
          </p>
          
      
          <div className="w-48 h-48 mx-auto my-8 relative">
            <Image
                src="/images/ggifby@nubcat.gif"
                alt="gif by nubcat"
                width={250}
                height={250}
                className="rounded-full"
                unoptimized={true}
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-zinc-300 dark:text-zinc-700 mb-2">
              Reach me at: <a 
                href="mailto:agustinjohnrome@gmail.com"
                className="text-white hover:underline dark:text-gray-800"
              >
               agustinjohnrome@gmail.com
              </a>
            </p>
            
            <p className="text-zinc-300 dark:text-zinc-700 mb-6">
              I typically respond within 24-48 hours.
            </p>
            
            <Button 
              asChild
              className="bg-black hover:bg-gray-800 text-white font-medium px-6 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <a href="mailto:agustinjohnrome@gmail.com">
                <Icons.email className="mr-2 h-4 w-4" />
                Send a message
              </a>
            </Button>
          </div>
        
        </div>
      </div>
    </BlurFade>
  )
}

export default ContactMe