import Github from "@/components/icons/Github.astro";
import LinkedIn from "@/components/icons/LinkedIn.astro";
import Twitter from "@/components/icons/Twitter.astro";
import Instagram from "@/components/icons/Instagram.astro";
import Mail from "@/components/icons/Mail.astro";

// Tech icons
import ReactIcon from "@/components/icons/React.astro";
import Tailwind from "@/components/icons/Tailwind.astro";

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
    name: "Programador Freelance",
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

const TECH_TAGS = {
  REACT: {
    name: "ReactJS",
    icon: ReactIcon,
    class: "",
  },
  VUE: {
    name: "VueJS",
    icon: ReactIcon,
    class: "",
  },
  PYTHON: {
    name: "Python",
    icon: ReactIcon,
    class: "",
  },
  PHP: {
    name: "PHP",
    icon: ReactIcon,
    class: "",
  },
};

export const PROJECTS = [
  {
    name: "elilunaart.com",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Galería y tienda de arte de una artista muy talentosa. Se pueden ver los dibujos, pinturas y también realizar compras por internet. Sitio en construcción",
    link: "https://elilunaart.com",
    img: "/img/portfolio/elilunaart.jpg",
    tags: [TECH_TAGS.REACT],
    date: "2022-12 | En curso",
  },
  {
    name: "Softseguros",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Es una plataforma en la nube para la administración de agencias de seguros. Facilita la ejecución y seguimiento de todos los procesos que realiza un agente de seguros para controlar las pólizas y otras tareas.",
    link: "https://softseguros.com/",
    img: "/img/portfolio/softseguros.png",
    tags: [TECH_TAGS.REACT],
    date: "2017-03 | 2019-01",
  },
  {
    name: "Adha",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Es un software de administración de activos, que permite tener control de todos los equipos de ventas y cuenta con un chat para conversar con un equipo de soporte, siendo esta la parte fundamental del sistema.",
    link: "https://app.adhagroup.com/",
    img: "/img/portfolio/adha.jpg",
    tags: [TECH_TAGS.REACT],
    date: "2019-06 | En curso",
  },
  {
    name: "Quini",
    isOpenSource: true,
    githubRepoUrl: "https://github.com/criscandv/",
    description:
      "Aplicación móvil de uso privado permitiendo al usuario emitir notificaciones al pulsar un botón.",
    link: "",
    img: "/img/portfolio/quini.jpg",
    tags: [TECH_TAGS.REACT],
    date: "2020-04 | 2020-07",
  },
  {
    name: "W-Donate",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Software de uso privado que permite realizar donaciones, crear proyectos de crowdfunding y colaboración entre personas. Permite pagos por la web.",
    link: "",
    img: "/img/portfolio/wdonate.jpg",
    tags: [TECH_TAGS.REACT],
    date: "2021-06 | 2021-11",
  },
  {
    name: "AgaluxSL",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Página web que describe las actividades empresariales de esta.",
    img: "/img/portfolio/agaluxsl.jpg",
    tags: [TECH_TAGS.REACT],
    date: "2019-04 | 2019-06",
  },
  {
    name: "La Ferreria",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Página web para restaurante que describe al mismo, su carta y también permite realizar reservas.",
    link: "https://laferreria.criscandv.com/",
    img: "/img/portfolio/laferreria.svg",
    tags: [TECH_TAGS.REACT],
    date: "2021-09 | 2022-04",
  },
  {
    name: "Solpres",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Software que permite generar presupuestos de trabajo con la información que se le indique y permitiendo exportar el documento a diferentes formatos (word, pdf).",
    link: "",
    img: "/img/portfolio/solpres.jpg",
    tags: [TECH_TAGS.REACT],
    date: "2019-04 | 2019-06",
  },
];
