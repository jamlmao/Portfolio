import { BriefcaseBusinessIcon, CodeXmlIcon, DraftingCompassIcon, GraduationCapIcon,} from "lucide-react";

export const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;


export type IconType = keyof typeof iconMap;

export type PositionType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: IconType;
  skills?: string[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};


export type ExperienceType = {

  id: string;
  companyName: string;
  companyLogo?: string;
  positions: PositionType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};


export const workExperience: ExperienceType[] = [
    {
        id:'1',
        companyName: "Accenture",
        companyLogo:"/images/ACN.png",
        isCurrentEmployer: false,
        positions:[
            {
                id:"1.1",
                title: "Front End Development and Back End Development",
                employmentPeriod:"March 2025 - June 2025",
                employmentType:"Internship",
                description:"Completed a 4-month bootcamp focused on Java principles for back-end development and Angular/React for front-end development, gaining hands-on experience in building web applications.",
                icon: "code",
                skills:["Java", "JavaScript", "React", "Angular"],
                isExpanded: false,
            }
        ]

    }
]