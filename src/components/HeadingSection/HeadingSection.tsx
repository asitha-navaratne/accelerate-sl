import { useEffect, useState } from "react";

import accelerateLogo from "../../assets/logo-accelerate.png";
import accelerateLogoLow from "../../assets/logo-accelerate-low.png";

import LogoRoulette from "../LogoRoulette";

const HeadingSection = () => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLogoLoaded(true);
    };
    img.src = accelerateLogo;
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-16 mb-10">
      <h1 className="sr-only">Mastering Data Science</h1>
      <h1 className="hero-text text-white" aria-hidden="true">
        mastering
      </h1>
      <h1 className="hero-text text-yellow-400" aria-hidden="true">
        data science
      </h1>
      <LogoRoulette />
      {isLogoLoaded && (
        <img
          src={accelerateLogo}
          className="mt-4 w-64 md:w-1/5 hover:scale-125 hover:-rotate-6 transition-all duration-500"
          alt="Accelerate Logo"
        />
      )}
      {!isLogoLoaded && (
        <img
          src={accelerateLogoLow}
          className="w-64 md:w-1/5 hover:scale-125 hover:-rotate-6 transition-all duration-500"
          alt="Accelerate Logo"
        />
      )}
    </div>
  );
};

export default HeadingSection;
