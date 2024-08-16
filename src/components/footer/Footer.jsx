import React from "react";
import "./footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <button className="btn btn-primary footer-btn">
          <a href="https://www.linkedin.com/in/sujal-mistry/" target="#">
            <BsLinkedin />
            <h4>LinkedIn</h4>
          </a>
        </button>

        <button className="btn btn-primary footer-btn">
          <a href="https://github.com/sujal-mistry" target="#">
            <BsGithub />
            <h4>GitHub</h4>
          </a>
        </button>
      </div>

      <div className="footer_copyright">
        <small>&copy; Sujal Mistry All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
