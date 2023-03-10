import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
     {
      name: "LocalShopIndia Bot",
      deployedLink: "https://lsi-bot.netlify.app/",
      image: require("../../assets/bot.png"),
      fadeDuration: "1100",
    },
    {
      name: "Athlete Club",
      deployedLink: "https://athlete-club-mobile.netlify.app/",
      image: require("../../assets/athlete.png"),
      fadeDuration: "1000",
    },
    {
      name: "Metaverse",
      deployedLink: "https://metaverse-shashwat.netlify.app/",
      image: require("../../assets/metaverse.png"),
      fadeDuration: "1100",
    },
    {
      name: "House Cleaners",
      deployedLink: "https://cleaning-expert.netlify.app/",
      image: require("../../assets/cleaning.png"),
      fadeDuration: "1100",
    },
     {
      name: "Instant Pizza",
      deployedLink: "https://instant-pizza.netlify.app/",
      image: require("../../assets/pizza.png"),
      fadeDuration: "1100",
    },
    {
      name: "Client Portfolio",
      deployedLink: "https://diya-biswas.netlify.app/",
      image: require("../../assets/client.png"),
      fadeDuration: "1100",
    },
     {
      name: "Chatify",
      deployedLink: "https://chatify-web.netlify.app/",
      image: require("../../assets/chatify.png"),
      fadeDuration: "1100",
    },
    {
      name: "Text Converter with 11 Themes",
      deployedLink: "https://text-converter-shashwat.netlify.app/",
      image: require("../../assets/textconverter.png"),
      fadeDuration: "1100",
    },
    {
      name: "Job Portal (Vue.js)",
      deployedLink: "https://jobportal-vue.netlify.app",
      image: require("../../assets/job.png"),
      fadeDuration: "1100",
    },
   
    {
      name: "News Monkey",
      deployedLink: "/",
      image: require("../../assets/news.png"),
      fadeDuration: "1100",
    },
     {
      name: "Todo App (Vue.js)",
      deployedLink: "https://todo-list0-vue.netlify.app/",
      image: require("../../assets/todo.png"),
      fadeDuration: "1100",
    },
    {
      name: "Material Calculator",
      deployedLink: "https://calculator-project-badass1901.netlify.app/",
      image: require("../../assets/calc.png"),
      fadeDuration: "1100",
    },
  ];

  return (
    <section id="portfolio">
      <h5
        data-aos="fade-up"
        data-aos-anchor=".portfolio__container"
        data-aos-duration="700"
      >
        My most recent projects
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor=".portfolio__container"
        data-aos-duration="900"
      >
        My Portfolio
      </h2>

      <div className="container portfolio__container">
        {projects.map(({ name, image, deployedLink, fadeDuration }) => (
          <article
            className="portfolio__item"
            key={name}
            data-aos="fade-up"
            data-aos-anchor=".portfolio__container"
            data-aos-duration={fadeDuration}
          >
            <div className="portfolio__item-image">
              <img src={image} alt={`${name} app Screenshot`} />
            </div>
            <h3>{name}</h3>

            <div className="portfolio__item-cta">
              <a
                className="btn"
                href={`https://github.com/FOR-TIMI/${name}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-primary"
                href={deployedLink}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
