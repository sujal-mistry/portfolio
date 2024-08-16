import React from "react";
import "./portfolio.css";
import liveLong from "../../assets/doc.png";

const data = [
  {
    id: 1,
    image: liveLong,
    title: "Live Long",
    github: "https://github.com/sujal-mistry/Live-Long",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="#">
                  Github
                </a>
                {/* <a href={demo} className="btn btn-primary" target="#">
                  View Page
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
