import React from "react";
import "./header.css";
import CTA from "./CTA";
import Avatar from "../../assets/cartoon.jpg";
import ME from "../../assets/profile.jpeg";
import HeaderSocials from "./HeaderSocial";
import { FaArrowDownLong } from "react-icons/fa6";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mistry Sujal</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="box">
          <div className="about__me-image">
            <img className="img_avatar" src={Avatar} alt="About-img" />
            <img className="img_kg" src={ME}></img>
          </div>
        </div>

        {/* <div className="me">
                <img src={ME} alt="me" />
            </div> */}

        <a href="#contact" className="scroll__down">
          <FaArrowDownLong />
        </a>
      </div>
    </header>
  );
};

export default Header;
