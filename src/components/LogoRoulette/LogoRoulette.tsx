import { memo } from "react";

import { domAnimation, LazyMotion, m } from "motion/react";

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
      <LazyMotion features={domAnimation}>
        <m.img
          src={pythonLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="w-10 mx-2 absolute z-50"
          alt="Python logo"
        />
        <m.img
          src={powerBiLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: 0.5,
            repeat: Infinity,
          }}
          className="h-10 mx-2 absolute z-50"
          alt="Power BI logo"
        />
        <m.img
          src={javaScriptLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: 1,
            repeat: Infinity,
          }}
          className="w-10 mx-2 absolute z-50"
          alt="JavaScript logo"
        />
        <m.img
          src={htmlLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: 1.5,
            repeat: Infinity,
          }}
          className="w-10 mx-5 absolute z-50"
          alt="HTML logo"
        />
        <m.img
          src={cssLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: 2,
            repeat: Infinity,
          }}
          className="w-10 mx-2 absolute z-50"
          alt="CSS logo"
        />
        <m.img
          src={githubLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: 2.5,
            repeat: Infinity,
          }}
          className="w-10 ml-5 mx-2 absolute z-50"
          alt="GitHub logo"
        />
        <m.img
          src={gitLogo}
          animate={{ x: [0, 100, 0, -100, 0], scale: [0, 0.5, 1, 0.5, 0] }}
          transition={{
            duration: 4,
            ease: "linear",
            delay: 3,
            repeat: Infinity,
          }}
          className="w-10 ml-5 mx-2 absolute z-50"
          alt="Git logo"
        />
      </LazyMotion>
    </div>
  );
};

export default memo(LogoRoulette);
