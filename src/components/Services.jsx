import React from "react";
import { motion } from "framer-motion";
import { AiFillAndroid, AiFillIeCircle, AiFillWindows } from "react-icons/ai";

const Services = () => {
    const animations ={
        whileInView : {
            x : 0,
            y : 0,
            opacity : 1
        },
        one : {
            opacity :0,
            x : "-100%"
        },
        two :{
            opacity : 0,
            y : "-100%"
        },
        three:{
            opacity : 0,
            y : "+100%"
        }
    }
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div whileInView={animations.whileInView} initial={animations.one}>
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div whileInView={animations.whileInView} initial={animations.two}>
          <AiFillAndroid />
          <span>App Development</span>
        </motion.div>
        <motion.div whileInView={animations.whileInView} initial={animations.three}>
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
