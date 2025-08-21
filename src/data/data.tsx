import { Icons } from "@/components/Icons";
import { BriefcaseIcon, Folder, HomeIcon, Mail, User } from "lucide-react";


export type PageType = 'home' | 'about' | 'projects' | 'contact'|'work';

export interface WorkProps {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  logoUrl: string;
  href: string;
}


export interface NavbarProps {
  orientation: "horizontal" | "vertical";
  onPageChange: (page: PageType) => void;
  currentPage?: PageType;
}

export const Data = {
     name: "Jam",
     description: "Full Stack Web Developer | Eager to Learn, Ready to Deliver",
     summary:"I'm a web developer who enjoys turning ideas into functional, user-friendly websites through hands-on practice and real-world projects. While I don't have formal work experience yet, I bring curiosity, dedication, and a passion for creating solutions that work seamlessly and look great. I believe the best way to grow is by building, experimenting, and learning and that's exactly what I'm doing",
     avatarUrl: "/images/me.jpg",
     skills:[
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "Laravel",
        "PHP",
        "JAVA",
     ],
      navbar: [
        { href: "/", icon: HomeIcon, page:"home" as PageType, label: "Home" },
        { href: "/about", icon: User, page:"about" as PageType , label: "About" },
        { href: "/projects", icon: Folder, page:"projects" as PageType, label: "Projects Experience" },
        { href: "/work", icon: BriefcaseIcon, page:"work" as PageType, label: "Work Experience" },
        { href: "/contact", icon: Mail, page:"contact" as PageType, label: "Contact" },
     ],
      contact:{
        email:"agustinjohnrome@gmail.com",
        social: { 
            GitHub: {
                name: "GitHub",
                url: "https://github.com/jamlmao",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://ph.linkedin.com/in/john-rome-agustin-05505b2a3",
                icon: Icons.linkedin,
                navbar: true,
            },
        }
    },
     projects:[
        {
            title:"Constrack",
            href:"https://github.com/jamlmao/ConsTrack-FrontEnd",
            url:"https://consxtrack.vercel.app",
            description:"A construction management web application that helps users track and manage construction projects, including tasks, resources, and timelines.",
            date:"August 2024 - October 2024",
            logoUrl: "/images/constrack.png",
            imageUrl:[
                "/images/c1.jpg",
                "/images/c2.jpg",
                "/images/c3.jpg",
                "/images/c4.jpg",
                "/images/c5.jpg",
            ],
            technologies: [
                    "Angular",
                    "Laravel",
                    "MySQL"
            ]
        },
        {
            title:"Rent N' Go",
            href:"https://github.com/jamlmao/RentNGo",
            url:"https://car-rental-landing-page-mu.vercel.app",
            description:"A car rental web application that allows users to browse, book, and manage car rentals online. (REBUILDING)",
            date:"July 2025 -  ",
            logoUrl: "/images/rentngo.png",
            imageUrl:[
                "/images/R1.png",
            ],
            technologies: [
                    "Next.js",
                    "Tailwind CSS",
                    "TypeScript",
                    "Shadcn",
                    "Supabase",
            ]
        }
     ],
    
}
    



