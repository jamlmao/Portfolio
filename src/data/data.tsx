import { Icons } from "@/components/Icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const Data = {
     name: "John Agustin",
     description: "Beginner web developer on a mission to learn by building. I enjoy turning ideas into real projects and sharing what I learn along the way. Always exploring, always improving.",
     summary:"I'm a web developer in progress, currently building up my skills one project at a time. I enjoy turning ideas into functional and user-friendly websites, learning as I go through hands-on practice and real-world challenges.I don't have years of experience (yet), but what I do have is curiosity, dedication, and a passion for creating things that work and look good. I believe the best way to grow is by doing — and that's exactly what I'm here for.",
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
        { href: "/", icon: HomeIcon, label: "Home" },
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
    



