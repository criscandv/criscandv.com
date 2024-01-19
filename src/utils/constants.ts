import Github from "@/components/icons/Github.astro";
import LinkedIn from "@/components/icons/LinkedIn.astro";
import Twitter from "@/components/icons/Twitter.astro";
import Instagram from "@/components/icons/Instagram.astro";
import Mail from "@/components/icons/Mail.astro";

export const YEAR_START_PROGRAMMING = 2017;

export const SOCIAL_NETWORKS = {
  GITHUB: {
    name: "Github",
    url: "https://github.com/criscandv/",
    icon: Github,
  },
  LINKEDIN: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/criscandv/",
    icon: LinkedIn,
  },
  TWITTER: {
    name: "Twitter",
    url: "https://twitter.com/criscandv/",
    icon: Twitter,
  },
  INSTAGRAM: {
    name: "Instagram",
    url: "https://instagram.com/criscandv/",
    icon: Instagram,
  },
  MAIL: {
    name: "Mail",
    url: "criscandv@gmail.com",
    icon: Mail,
  },
};

export const LABORAL_EXPERIENCE = [
  {
    name: "Developer & DevOps",
    isCurrent: true,
    company: "DXC Technology",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum officia numquam iste quia, eius fuga iusto maiores inventore ut ab ipsa, earum autem delectus sequi nam id repellendus vitae.",
    startDate: "2022",
    endDate: "",
    location: "Barcelona, España",
  },
  {
    name: "Programador <i>Freelance</i>",
    isCurrent: true,
    company: "",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum officia numquam iste quia, eius fuga iusto maiores inventore ut ab ipsa, earum autem delectus sequi nam id repellendus vitae.",
    startDate: "2022",
    endDate: "",
    location: "",
  },
  {
    name: "Consultor Fullstack",
    isCurrent: false,
    company: "Capitole Consulting",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum officia numquam iste quia, eius fuga iusto maiores inventore ut ab ipsa, earum autem delectus sequi nam id repellendus vitae.",
    startDate: "2021",
    endDate: "2022",
    location: "Barcelona, España",
  },
  {
    name: "Programador Fullstack & Devops",
    isCurrent: false,
    company: "Eco-Clic Grup, SL",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum officia numquam iste quia, eius fuga iusto maiores inventore ut ab ipsa, earum autem delectus sequi nam id repellendus vitae.",
    startDate: "2019",
    endDate: "2021",
    location: "Barcelona, España",
  },
  {
    name: "Programador Fullstack",
    isCurrent: false,
    company: "Softseguros",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum officia numquam iste quia, eius fuga iusto maiores inventore ut ab ipsa, earum autem delectus sequi nam id repellendus vitae.",
    startDate: "2017",
    endDate: "2019",
    location: "Colombia",
  },
];
