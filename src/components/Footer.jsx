import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/128302506?v=4"
          alt="Founder"
        />
        <h2>Saurabh Sharma</h2>
        <p>Keep Pushing, Until you Succeed</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://instagram.com/saurabhjb007?igshid=OGQ5ZDc2ODk2ZA=="
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://www.github.com/saurabhjb007" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/saurabh132000" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
