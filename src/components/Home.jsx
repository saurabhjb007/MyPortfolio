import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/img1.png"

const Home = () => {
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: "0%",
              opacity: 1,
            }}
          >
            Hi, I Am <br />
            Saurabh Sharma
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "A Front-End Developer",
                "A Web Developer",
                "A Designer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:saurabhsharma132000@gmail.com">Hire Me</a>
            <a href="#work">Projects &nbsp; <BsArrowUpRight/></a>
          </div>

          <aside>
            <article>
                <p>Contact</p>
                <span>saurabhsharma132000@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="saurabh" />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
