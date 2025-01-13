import { motion } from "motion/react";

import styles from "./LogoRoulette.module.css";

import javaScriptLogo from "../../assets/logo-js.svg";
import htmlLogo from "../../assets/logo-html.svg";
import cssLogo from "../../assets/logo-css.svg";
import pythonLogo from "../../assets/logo-python.png";
import powerBiLogo from "../../assets/logo-power-bi.png";
import githubLogo from "../../assets/logo-github.svg";
import gitLogo from "../../assets/logo-git.png";

const LogoRoulette = () => {
  return (
    <div className={styles["logo-roulette"]}>
      <motion.img
        src={pythonLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        className="w-10 mx-2 absolute"
      />
      <motion.img
        src={powerBiLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.25,
          repeat: Infinity,
        }}
        className="h-10 mx-2 absolute"
      />
      <motion.img
        src={javaScriptLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
          repeat: Infinity,
        }}
        className="w-10 mx-2 absolute"
      />
      <motion.img
        src={htmlLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.75,
          repeat: Infinity,
        }}
        className="w-10 mx-5 absolute"
      />
      <motion.img
        src={cssLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
          repeat: Infinity,
        }}
        className="w-10 mx-2 absolute"
      />
      <motion.img
        src={githubLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1.25,
          repeat: Infinity,
        }}
        className="w-10 ml-5 mx-2 absolute"
      />
      <motion.img
        src={gitLogo}
        animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1.5,
          repeat: Infinity,
        }}
        className="w-10 ml-5 mx-2 absolute"
      />
    </div>
  );
};

export default LogoRoulette;
