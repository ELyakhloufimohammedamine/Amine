import "./portfolio.scss"
import {motion, useScroll ,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items =[
    {
        id:1,
        title:"E-Commerce  Django",
        img:"/ecom.png",
        desc:" Projet E-Commerce avec Django, offrant une plateforme conviviale pour la vente de produits traditionnels marocains",

    },
    {
        id:2,
        title:"Harvard CS50 Certificate",
        img:"/CS50x (1).png",
        desc:" I have successfully completed the CS50x course offered by Harvard University through edX and have earned my certificate. ",

    },
    {
        id:3,
        title:" web app  to buy and sell stocks",
        img:"/WhatsApp Image 2024-02-27 at 13.42.43.jpeg",
        desc:" web application that allows users to buy and sell stocks, and view their transaction history and current portfolio value I used Flask, SQL, HTML, CSS, Bootstrap",

    },
    {
        id:4,
        title:" App pour gérer les informations personnelles",
        img:"/WhatsApp Image 2024-02-27 at 13.25.13.jpeg",
        desc:"  utilisant python Tkinter Cette application stocke ces informations dans une base de données en utilisant SQLite3.",

    },
    {
        id:5,
        title:"Aws cloud Practitioner Essentials",
        img:"/1666016829132.jpg",
        desc:" La certification vise à valider la compréhension générale du cloud AWS, y compris les concepts de base, les services AWS principaux, l'architecture cloud et les meilleures pratiques de sécurité.",

    },
    {
        id:6,
        title:"Data Analytics Professional Certificate",
        img:"/google-data-analytics-professional-certificate.2.png",
        desc:" La certification Google Data Analytics Professional Certificate est une formation complète conçue pour permettre aux apprenants de développer des compétences essentielles en analyse de données",

    },
    {
        id:7,
        title:"Meta React Basics certificat",
        img:"/Capture d’écran 2024-02-27 135003.jpg",
        desc:"  Le cours React Basics couvre les bases de React, y compris la mise en place d'un environnement de développement, la création de composants React, la gestion de l'état, la gestion des événements, et la navigation entre les composants.",

    },
    {
      id:8,
      title:"Gase center website",
      img:"/Capture d’écran 2024-02-27 160131.jpg",
      desc:" un site de présentation pour une entreprise de livraison de gaz à Kiel et ses environs. avec Wordpress",

  },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href="https://www.linkedin.com/in/mohammed-amine-el-yakhlofi-0182a1233/recent-activity/all/" target="_blank" rel="noopener noreferrer">
  <button>See Demo</button>
</a>

            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1> </h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };

export default Portfolio;
