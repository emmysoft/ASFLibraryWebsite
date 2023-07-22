import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import AsfLogo from "../../assets/AsfLogo.png";
import { Wrapper } from "./NavStyle";

const Nav = () => {
  // const [closeNav, setCloseNav] = useState(false);
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <Wrapper>
        <div className="logo">
          <img src={AsfLogo} alt="logo" className="logoImg"/>
        </div>

        <div className="nav-links" ref={navRef}>
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/library" className="link">
            Library
          </NavLink>
          <button className="nav-btn close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </Wrapper>
    </>
  );
};

export default Nav;
