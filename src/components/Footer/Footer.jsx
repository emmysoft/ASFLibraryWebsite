import React from "react";
import { FooterWrapper } from "./FooterStyle";
import AsfLogo from "../../assets/AsfLogo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import "../../App.css";

const Footer = () => {
  return (
    <>
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
      <div style={{ display: "flex", justifyContent: "center", padding: 15 }}>
        <NavLink
          to="https://wa.me/+2348149998467"
          style={{
            textDecoration: "underline",
            color: "#000",
            textAlign: "center",
          }}
        >
          Developed by Emmysoft
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
