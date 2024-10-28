import React from "react";
import "./portfolio.css";
import dp_900 from "../../assets/Certificates/dp_900.jpg";
import sql from "../../assets/Certificates/sql.png";
import react from "../../assets/Certificates/react.png";
import se from "../../assets/Certificates/software_engineer.png";
import udemy from "../../assets/Certificates/udemy.jpg";

const data = [
  {
    id: 1,
    image: dp_900,
    title: "Microsoft Certified: Azure Data Fundamentals",
    Credential:
      "https://learn.microsoft.com/api/credentials/share/en-us/MistrySujal-2943/87BA7640DADA73B6?sharingId",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 2,
    image: udemy,
    title: "Web Development",
    Credential:
      "https://www.udemy.com/certificate/UC-272458b8-5789-40b7-ab6a-e946d3fb46ef/",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 3,
    image: sql,
    title: "SQL(Intermediate)",
    Credential: "https://www.hackerrank.com/certificates/769dfd29b77c",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 3,
    image: se,
    title: "Software Engineer Intern",
    Credential: "https://www.hackerrank.com/certificates/2c9857401803",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 4,
    image: react,
    title: "React",
    Credential: "https://www.hackerrank.com/certificates/d7095f866ab1",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>
        A collection of industry-recognized certifications reflecting my
        expertise
      </h5>
      <h2>Certificates</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, Credential, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {Credential !== null ? (
                  <a href={Credential} className="btn" target="#">
                    Credentials
                  </a>
                ) : null}
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
