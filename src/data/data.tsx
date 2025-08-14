import { Icons } from "@/components/Icons";
import { BriefcaseIcon, Folder, HomeIcon, Mail, User } from "lucide-react";


export type PageType = 'home' | 'about' | 'projects' | 'contact';
export interface NavbarProps {
  orientation: "vertical" | "horizontal";
  onPageChange: (page: PageType) => void;
  currentPage: PageType;
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
        { href: "/", icon: HomeIcon, page:"home", label: "Home" },
        { href: "/about", icon: User, page:"about", label: "About" },
        { href: "/projects", icon: Folder, page:"projects", label: "Projects Experience" },
        { href: "/work", icon: BriefcaseIcon, page:"work", label: "Work Experience" },
        { href: "/contact", icon: Mail, page:"contact", label: "Contact" },
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
     work:[
        {
            company:"Accenture",
            position:"Accenture Academy Trainee - Software Engineering",
            start:"March 2025",
            end:"July 2025",
            description:"Completed an intensive 4-month intership program focused on core Java development and software engineering principles, successfully passing the post-assessment evaluation, demonstrating proficiency in Java programming concepts",
            logoUrl: "/ACN.png",
            href: "https://www.accenture.com/ro-en/careers/local/accenture-academy",
        
        }
     ],
     projects:[
        {
            title:"Constrack",
            href:"https://github.com/jamlmao/ConsTrack-FrontEnd",
            description:"A construction management web application that helps users track and manage construction projects, including tasks, resources, and timelines.",
            date:"August 2024 - October 2024",
            imageUrl:"/images/constrack.png",
            technologies: [
                {
                    "Angular": Icons.angular,
                    "Laravel": Icons.laravel,
                    "MySQL": Icons.mysql,
                }
            ]
        },
        {
            title:"Rent N' Go",
            href:"https://github.com/jamlmao/RentNGo",
            description:"A car rental web application that allows users to browse, book, and manage car rentals online. (REBUILDING)",
            date:"July 2025 -  ",
            imageUrl:"/images/rentngo.png",
            technologies: [
                {
                    "React": Icons.react,
                    "Next.js": Icons.nextjs,
                    "Tailwind CSS": Icons.tailwind,
                    "TypeScript": Icons.typescript,
                    "Shadcn": Icons.shadcn,
                    "Supabase": Icons.supabase,
                }
            ]
        }
     ],
    
}
    



