import React from "react";
import { FooterWrapper } from "./FooterStyle";
import AsfLogo from "../../assets/AsfLogo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="logo">
        <img src={AsfLogo} alt="logo" className="logo_style" />
      </div>
      <div className="socials">
        <NavLink to="https://www.facebook.com/">
          <FaFacebook className="social1" />
        </NavLink>
        <NavLink to="https://www.youtube.com/">
          <FaYoutube className="social2" />
        </NavLink>
        <NavLink to="https://www.instagram.com/">
          <FaInstagram className="social3" />
        </NavLink>
      </div>
      <p className="text_p">
        All Rights Reserved &copy; Anglican Student's Fellowship
      </p>
    </FooterWrapper>
  );
};

export default Footer;
