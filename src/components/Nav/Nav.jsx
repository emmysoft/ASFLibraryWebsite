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
          <img src={AsfLogo} alt="logo" />
        </div>

        <div className="nav-links" ref={navRef}>
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/library" className="link">
            Library
          </NavLink>
          {/* <NavLink to="/about" className="link">
            About Us
          </NavLink> */}
          <button className="btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
        <button className="btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </Wrapper>
    </>
  );
};

export default Nav;
