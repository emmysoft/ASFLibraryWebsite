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
          <NavLink to="https://www.facebook.com/Asffutang?mibextid=9R9pXO">
            <FaFacebook className="social1" />
          </NavLink>
          <NavLink to="https://www.instagram.com/asffutang/">
            <FaInstagram className="social3" />
          </NavLink>
        </div>
        <p className="text_p">
          All Rights Reserved &copy; Anglican Student's Fellowship
        </p>
      </FooterWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
          gap: 8
        }}
      >
        <NavLink
          to="https://wa.me/+2348149998467"
          style={{
            textDecoration: "underline",
            color: "#000",
            textAlign: "center",
          }}
          target="_blank"
        >
          Developed by Emmysoft
        </NavLink>
        <p style={{ textAlign: "center", fontWeight: 400, fontSize: 15 }}>
          The glory tabernacle of Anglican student fellowship. Block J, Plot
          2&3, samuel atibioke family layout iloyin, Futa southgate
        </p>
      </div>
    </>
  );
};

export default Footer;
