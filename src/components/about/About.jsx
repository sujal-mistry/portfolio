import React from "react";
import "./about.css";
import { RiPencilRuler2Line } from "react-icons/ri";
import { IoIosTennisball } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { FaCoffee } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__cards">
          <p>
            Hi, I'm Sujal Mistry. A motivated software developer with superior
            skills working in both team-based and independent capacities,
            problem solving, written and verbal communications, and
            organizational skills in any setting. Seeking to work in an
            environment where these skills can be expanded and mutually benefit
            a future employer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="about__me">
          {/* <div className="box">
                            <div className="about__me-image">
                                <img className="img_kg" src={ME} alt="About-img" />
                            </div>
                    </div> */}

          <ul className="lego_ul">
            <li style={{ "--clr": "#1877f2", "--i": 6 }} className="lego_li">
              <span>
                <RiPencilRuler2Line />
              </span>
              Architecture / Landscape Architeture / Design
            </li>
            {/* <li style={{ "--clr": "#25d366", "--i": 5 }} className="lego_li">
              <span>
                <MdConstruction />
              </span>
              Construction / Commercial / Infrastructure
            </li> */}
            <li style={{ "--clr": "#1da1f2", "--i": 4 }} className="lego_li">
              <span>
                <IoIosTennisball />
              </span>
              Football / Running / Gym
            </li>
            <li style={{ "--clr": "#c32aa3", "--i": 3 }} className="lego_li">
              <span>
                <BiMoviePlay />
              </span>
              Interstellar / Fight Club / Parasite
            </li>
            <li style={{ "--clr": "#ff0000", "--i": 2 }} className="lego_li">
              <span>
                <FaCoffee />
              </span>
              Tea / Green Tea / Coffee
            </li>
            {/* #0affc2 */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
