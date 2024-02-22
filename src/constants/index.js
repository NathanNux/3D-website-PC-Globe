import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "O Nás",
    },
    {
      id: "work",
      title: "Projekty",
    },
    {
      id: "contact",
      title: "Kontakt",
    },
  ];
  
  const services = [
    {
      title: "Web & App Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SEO Expert",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
        "Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
        "Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
        "Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
        "Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
        "Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
        "Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
        "Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
        "Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
        "Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
        "Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
        "Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
        "Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Myslela jsem si, že není možné udělat web tak krásný jako náš produkt, ale tým Centrum mi dokázal, že se mýlím.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "Nikdy jsem se nesetkal s webovým vývojářem, který by se skutečně staral o úspěch svých klientů jako tým Centrum.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Poté, co tým Centrum optimalizoval náš web, vzrostla naše návštěvnost o 50 %. Nemůžeme jim dostatečně poděkovat!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for their needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };