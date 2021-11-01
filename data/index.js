export const info = [
  {
    title: "ENSEIRB MATMECA student",
    place: "ENSEIRB MATMECA, Bordeaux, France.",
    date: "2019-2021",
    image: "/enseirb.jpg",
    imgbg: "bg-white",
    color: "text-red-500",
    description: `After being valedictorian in my first 3 years at ESI, I was chosen for a scholarship by the France government, As part of a double programe between my school ESI and ENSEIRB MATMECA, I continued my studies at ENSEIRB MATMECA in software engineering field and I recently graduated as an engineer.`,
  },
  {
    title: "National competition to access the superior stage of ESI.",
    place: "National school of computer engineering - ESI, Alger, Algeria",
    date: "2018",
    image: "/esi.png",
    imgbg: "",
    color: "text-blue-500",
    description: `We have to succeed our national competition in order to access next stage of this school ESI, I ranked first in this competition.`,
    link:
      "https://www.esi.dz/2018/07/18/resultats-du-concours-d-acces-aux-classes-superieures-de-l-esi-d-alger-et-de-l-esi-de-sidi-belabbes/",
  },
  {
    title: "Preparatory stage at ESI.",
    place: "National school of computer engineering - ESI, Alger, Algeria",
    date: "2016-2019",
    color: "text-green-300",
    image: "/esi.png",
    imgbg: "",
    color: "text-green-500",
    description: `I did my first three years at ESI, I ranked first most of the semesters, I was valedictorian for these three years.`,
  },
  {
    title: "Mathematics Bachelor degree.",
    place: "High school Taib El Okbi, Blida, Algeria.",
    date: "2015-2016",
    image: "/math.png",
    imgbg: "bg-white",
    color: "text-purple-300",
    description: `I had my baccalaureate diploma in mathematics, mention EXCELLENCE with
          an average of 18/20.`,
  },
];

  export const projects = [
  {
    image: "/sopra_steria.jpg",
    projectLink: "https://www.soprasteria.com",
    title: "Maintaining apps with SopraSteria",
    paragraphe1: `I worked with a maintenance team on a groupe of 4 applications, for a client called EDF (Electricite de France), My contributions were mainly fixing bugs and adding new features to the applications.`,
    paragraphe2: `Each application works independently and has an n-tier architecture. They were developped using java/spring/struts, the front end part was made with jsp. along with a huge oracle db, and thousands of PL/SQL scripts to manipulate the database and provide JMS queuing.`,
    tags: [
      {content:"Java", color: "text-blue-700"},
      {content:"Spring", color: "text-yellow-700"},
      {content:"Struts", color: "text-red-700"},
      {content:"JSP", color: "text-green-700"},
      {content:"OracleDB / PlSql", color: "text-red-700"},
      {content:"Gitlab/Git", color: "text-gray-700"},
      {content:"Scrum", color: "text-blue-100", bg:"bg-gray-800"},
      {content:"Jira", color: "text-red-300", bg:"bg-gray-800"},
      {content:"Confluence", color: "text-green-200", bg:"bg-gray-800"},
      {content:"Semi-Remote", color: "text-yellow-200", bg:"bg-gray-800"},
    ],
  },
  {
    image: "/avanade.png",
    projectLink: "https://www.avanade.com/",
    title: "Teams plugin to facilitate candidates management for HR at Avanade (Ex Azeo).",
    paragraphe1: `I worked on a plugin for Teams that facilitates the HR job to manage candidates and appointements.`,
    paragraphe2: `I worked mainly on the frontend side, I added I18n support and migrated the app to FluentUI, I also boosted the UI/UX after hearing feedback from the users.`,
    tags: [
      {content:"TypeScript", color: "text-yellow-700"},
      {content:"React", color: "text-blue-600"},
      {content:"Azure", color: "text-blue-800"},
      {content:"FluentUI", color: "text-green-700"},
      {content:"Redux", color: "text-yellow-500"},
      {content:"Gitlab/Git", color: "text-gray-700"},
      {content:"Scrum", color: "text-blue-100", bg:"bg-gray-800"},
    ],
  },
  {
    image: "/scanrenovation.svg",
    projectLink: "https://www.scanrenovation.com",
    title: "ScanRenovation website",
    bgImage: "bg-white",
    paragraphe1: `An inovative website that offers the ability to find interesting
    houses, apartements... And find professionals who offers maintaining,
    repaire and design services. This website implements virtual visite,
    video chat, screensharing through webRTC...`,
    paragraphe2: `I worked on the re-implementation of a part of the website using
    reactjs/nextjs with (SSR, ISG), and on the screensharing functionality
    with webRTC, I used lots of libraries like tailwindcss,
    styledcomponents...`,
    tags: [
      {content:"Nextjs", color: "text-gray-900"},
      {content:"React", color: "text-blue-600"},
      {content:"Redux", color: "text-yellow-800"},
      {content:"Tailwind/css", color: "text-blue-900"},
      {content:"StyledComponents", color: "text-gray-900"},
      {content:"Laravel", color: "text-red-500"},
      {content:"PHPUnit/Dusk", color: "text-red-700"},
      {content:"MySql", color: "text-gray-700"},
      {content:"WebSockets", color: "text-yellow-900"},

    ],
  },

  {
    image: "/fullstack.png",
    projectLink: "https://github.com/touatiosema/catalog-fullstack-app",
    title: "Catalog fullstack app",
    paragraphe1: `This web application provides a list of items, each is a member of a specific category, it allows authentificated users to add/edit/delete items.`,
    paragraphe2: `I used django, postgresql, sqlalchemy, oauth... to create this website.`,
    tags: [
      {content:"Drango", color: "text-green-700"},
      {content:"PostgresQL", color: "text-gray-600"},
      {content:"SQLAlchemy", color: "text-blue-800"},
      {content:"OAuth", color: "text-gray-900"},
      {content:"Html/Css/Js", color: "text-red-700"},
      {content:"Gitlab/Git", color: "text-gray-700"},
    ],

  },
  {
    image: "/pthread.jpg",
    projectLink: "https://github.com/touatiosema/pthread-library-api",
    title: "Pthread library api re-creation.",
    paragraphe1: `In this project, I tried to recreate the same API of pthread C library, with some multi-thread functionalities like preemption and pirority`,
    tags: [
      {content:"C++", color: "text-red-700"},
      {content:"Python", color: "text-green-700"},
      {content:"Makefile", color: "text-gray-700"},
    ],
  },
  {
    image: "/clinica.ico",
    projectLink: "https://github.com/touatiosema/2CPI-Project-Clinica",
    title: "Clinica, a java/javafx app.",
    paragraphe1: `This is a desktop application, it aims to help doctors in their medical cabinets to manage patients, their Rendez-vous, their documents, their medecins...
      It comes with a notification system, and uses the sqlite database.`,
      tags: [
        {content:"Java", color: "text-red-700"},
        {content:"JavaFx", color: "text-green-700"},
        {content:"SQLite", color: "text-gray-700"},
      ],
    },
];
