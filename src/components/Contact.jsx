import React, { useState } from "react";
import vg from "../assets/vg.png";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [disableBtn, setdisableBtn] = useState(false);

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  const submiHandler = async (e) => {
    e.preventDefault();
    setdisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setname("");
      setemail("");
      setmessage("");
      toast.success("Message Sent");
      setdisableBtn(false);
    } catch (error) {
      toast.error("Error");
      setdisableBtn(false);
    }
  };
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submiHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Your Message"
            required
          />
          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            type="submit"
            {...animations.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="graphics" />
      </aside>
    </div>
  );
};

export default Contact;
