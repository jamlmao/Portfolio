'use client';

import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
 
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Data, NavbarProps } from "@/data/data";





const Navbar = ({ orientation, onPageChange, currentPage }: NavbarProps)  => {
      const handleNavClick = (e: React.MouseEvent, page: string) => {
        e.preventDefault(); 
        onPageChange(page as any); 
    };
  return (
     <TooltipProvider>
        <Dock direction="middle" orientation={orientation} className="dark:bg-white/90 bg-zinc-700/90 backdrop-blur-sm rounded-lg shadow-lg dark:shadow-2xl dark:shadow-zinc-50/30">
          {Data.navbar.map((item) => (
            <DockIcon key={item.label} >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    onClick={(e) => handleNavClick(e, item.page)}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-gray-800 dark:hover:bg-white/90 ",
                    )}
                  >
                    <item.icon className="size-4 text-current text-white dark:text-black" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-white/90 dark:bg-zinc-700/90" />
          {Object.entries(Data.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-gray-800 dark:hover:bg-white/90",
                    )}
                  >
                    <social.icon className="size-4 text-white dark:text-black hover:bg-dark" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2 bg-white/90 dark:bg-zinc-700/90" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
  )
}

export default Navbar