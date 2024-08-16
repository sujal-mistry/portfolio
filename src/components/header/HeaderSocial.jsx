import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sujal-mistry/" target="#">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sujal-mistry" target="#">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
