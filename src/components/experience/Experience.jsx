import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaAws } from "react-icons/fa";
import { BsBootstrapFill, BsFillCaretUpFill } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";

import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BiBadge } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import {
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiHeroku,
  SiVercel,
  SiPython,
  SiPostgresql,
  SiAzuredevops,
  SiMui,
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies that I work with the most</h5>
      <h2>My skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon" />
              <h4>Next.js</h4>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React.js</h4>
            </article>

            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <h4>TypeScript</h4>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>TailwindCSS</h4>
            </article>

            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <h4>Node JS</h4>
            </article>

            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Express JS</h4>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>

            <article className="experience__details">
              <SiMicrosoftsqlserver className="experience__details-icon" />
              <h4>MSSQL</h4>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
        <div>
          <h3>Other Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiGithub className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>
            <article className="experience__details">
              <SiAzuredevops className="experience__details-icon" />
              <h4>Azure</h4>
            </article>
            <article className="experience__details">
              <SiFigma className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <DiFirebase className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <SiMui className="experience__details-icon" />
              <h4>MUI</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
