// Tech icons
import Backbone from "@/components/icons/Backbone.astro";
import Astro from "@/components/icons/AstroIcon.astro";
import ChakraUI from "@/components/icons/ChakraUI.astro";
import Codeigniter from "@/components/icons/Codeigniter.astro";
import Django from "@/components/icons/Django.astro";
import Github from "@/components/icons/Github.astro";
import Instagram from "@/components/icons/Instagram.astro";
import Javascript from "@/components/icons/Javascript.astro";
import LinkedIn from "@/components/icons/LinkedIn.astro";
import Mail from "@/components/icons/Mail.astro";
import NextJS from "@/components/icons/NextJS.astro";
import NodeJS from "@/components/icons/NodeJS.astro";
import Php from "@/components/icons/Php.astro";
import Python from "@/components/icons/Python.astro";
import React from "@/components/icons/React.astro";
import SocketIO from "@/components/icons/SocketIO.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import Twitter from "@/components/icons/Twitter.astro";
import Vue from "@/components/icons/Vue.astro";
import Wordpress from "@/components/icons/Wordpress.astro";
import AstroIcon from "@/components/icons/AstroIcon.astro";

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
    name: "Proyectos 'Freelance'",
    isCurrent: true,
    company: "",
    summary:
      "Como programador, he podido participar y crear varias páginas webs o proyectos que atienden necesidades generales y/o específicas de empresas y/o personas.",
    startDate: "2022",
    endDate: "",
    location: "",
  },
  {
    name: "Programador/Consultor Fullstack & DevOps",
    isCurrent: true,
    company: "DXC Technology",
    summary:
      "Responsable de multiples proyectos y desarrollos. Administración de bases de datos y servidores. Trabajos de implementación y mantenimiento en procesos de integración y despliegue continuo.",
    startDate: "2021",
    endDate: "",
    location: "Barcelona, España",
  },
  /* {
    name: "Consultor Fullstack",
    isCurrent: false,
    company: "Capitole Consulting",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum officia numquam iste quia, eius fuga iusto maiores inventore ut ab ipsa, earum autem delectus sequi nam id repellendus vitae.",
    startDate: "2021",
    endDate: "2022",
    location: "Barcelona, España",
  }, */
  {
    name: "Programador Fullstack & Devops",
    isCurrent: false,
    company: "Eco-Clic Grup, SL",
    summary:
      "Lider y responsable del equipo de Backend. Creación de APIs para un aplicativo web. Lider de la implementación de un control de versiones (Git).",
    startDate: "2019",
    endDate: "2021",
    location: "Barcelona, España",
  },
  {
    name: "Programador Fullstack",
    isCurrent: false,
    company: "Softseguros",
    summary:
      "Parte del equipo de OnGoing de plataforma para agencias de seguros. Mantenimiento de la plataforma. Nuevas funcionalidades y la implementación del proceso de integración continua.",
    startDate: "2017",
    endDate: "2019",
    location: "Colombia",
  },
];

const TECH_TAGS = {
  JAVASCRIPT: {
    name: "Javascript",
    icon: Javascript,
    class: "",
  },
  REACT: {
    name: "ReactJS",
    icon: React,
    class: "",
  },
  REACTNATIVE: {
    name: "React Native",
    icon: React,
    class: "",
  },
  NEXTJS: {
    name: "NextJS",
    icon: NextJS,
  },
  VUE: {
    name: "VueJS",
    icon: Vue,
    class: "",
  },
  TAILWIND: {
    name: "TailwindCSS",
    icon: Tailwind,
    class: "",
  },
  CHAKRAUI: {
    name: "ChakraUI",
    icon: ChakraUI,
    class: "",
  },
  PYTHON: {
    name: "Python",
    icon: Python,
    class: "",
  },
  DJANGO: {
    name: "Django",
    icon: Django,
    class: "",
  },
  PHP: {
    name: "PHP",
    icon: Php,
    class: "",
  },
  WORDPRESS: {
    name: "Wordpress",
    icon: Wordpress,
    class: "",
  },
  CODEIGNITER: {
    name: "Codeigniter",
    icon: Codeigniter,
    class: "",
  },
  BACKBONEJS: {
    name: "BackboneJS",
    icon: Backbone,
    class: "",
  },
  SOCKETIO: {
    name: "SocketIO",
    icon: SocketIO,
    class: "",
  },
  NODEJS: {
    name: "NodeJS",
    icon: NodeJS,
    class: "",
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
    class: ""
  }
};

export const PROJECTS = [
  {
    name: "fisioterapiagranollers.com",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Centro de fisioterapia. Se enseñan sus servicios, terapias y contacto.",
    link: "https://fisioterapiagranollers.com",
    img: "/img/portfolio/elilunaart.jpg",
    tags: [
      TECH_TAGS.ASTRO,
      TECH_TAGS.DJANGO,
      /* TECH_TAGS.PYTHON, */
      TECH_TAGS.CHAKRAUI,
    ],
    date: "2022-12 | En curso",
  },
  {
    name: "elilunaart.com",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Galería y tienda de arte. Se pueden ver todas las obras. Pasarela de pago incluida.",
    link: "https://elilunaart.com",
    img: "/img/portfolio/elilunaart.jpg",
    tags: [
      TECH_TAGS.ASTRO,
      TECH_TAGS.DJANGO,
      /* TECH_TAGS.PYTHON, */
      TECH_TAGS.CHAKRAUI,
    ],
    date: "2022-12 | En curso",
  },
  {
    name: "CDV Control Panel",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Software de control de activos. Generación de Código QR. Chat integrado",
    link: "https://cp.criscandv.com/",
    img: "/img/portfolio/adha.jpg",
    tags: [
      TECH_TAGS.REACT,
      TECH_TAGS.DJANGO,
      TECH_TAGS.TAILWIND,
    ],
    date: "2019-06 | En curso",
  },
  {
    name: "Adha",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Software de control de activos. Generación de Código QR. Chat integrado",
    link: "https://app.adhagroup.com/",
    img: "/img/portfolio/adha.jpg",
    tags: [
      TECH_TAGS.REACT,
      TECH_TAGS.DJANGO,
      TECH_TAGS.PHP,
      TECH_TAGS.SOCKETIO,
      TECH_TAGS.CHAKRAUI,
      TECH_TAGS.TAILWIND,
    ],
    date: "2019-06 | En curso",
  },
  {
    name: "Softseguros",
    isOpenSource: false,
    githubRepoUrl: "",
    description: "Software de administración para agencias de seguros.",
    link: "https://softseguros.com/",
    img: "/img/portfolio/softseguros.png",
    tags: [
      TECH_TAGS.VUE,
      TECH_TAGS.BACKBONEJS,
      TECH_TAGS.DJANGO,
      /* TECH_TAGS.PYTHON, */
    ],
    date: "2017-03 | 2019-01",
  },
  {
    name: "Quini",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Aplicación móvil de uso privado permitiendo al usuario emitir notificaciones al pulsar un botón.",
    link: "",
    img: "/img/portfolio/quini.jpg",
    tags: [/* TECH_TAGS.PYTHON, */ TECH_TAGS.DJANGO, TECH_TAGS.REACTNATIVE],
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
    tags: [
      TECH_TAGS.REACT,
      TECH_TAGS.DJANGO,
      /* TECH_TAGS.PYTHON, */
      TECH_TAGS.TAILWIND,
    ],
    date: "2021-06 | 2021-11",
  },
  {
    name: "AgaluxSL",
    isOpenSource: false,
    githubRepoUrl: "",
    description:
      "Página web que describe las actividades empresariales de esta.",
    img: "/img/portfolio/agaluxsl.jpg",
    tags: [TECH_TAGS.WORDPRESS],
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
    tags: [TECH_TAGS.REACT, TECH_TAGS.NODEJS],
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
    tags: [TECH_TAGS.PHP, TECH_TAGS.CODEIGNITER, TECH_TAGS.BACKBONEJS],
    date: "2019-04 | 2019-06",
  },
];

export const TECHNOLOGIES = [
  {
    name: "",
    icon: "",
  },
];
