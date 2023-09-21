import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen, setmenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setmenuOpen={setmenuOpen}/>
      </nav>
      <button className="navBtn" onClick={() => setmenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({setmenuOpen, menuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setmenuOpen={setmenuOpen}/>
    </div>
  );
};

const NavContent = ({setmenuOpen}) => (
  <>
    <h2>Saurabh</h2>
    <div>
      <a href="#home" onClick={() => setmenuOpen(false)}>Home</a>
      <a href="#work" onClick={() => setmenuOpen(false)}>Projects</a>
      <a href="#services" onClick={() => setmenuOpen(false)}>Services</a>
      <a href="#contact" onClick={() => setmenuOpen(false)}>Contact</a>
    </div>
    <a href="mailto:saurabhsharma132000@gmail.com">
      <button>Email</button>
    </a>
  </>
);
export default Header;
