import { Button } from "@/components/ui/button";
import { ChevronRight, ClipboardType, Info } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

import gskLogo from "../../assets/images/logo-gsk.png";
import pyDataLogo from "../../assets/images/logo-pydata.png";

import HeadingSection from "@/components/HeadingSection";
import FaqSection from "@/components/FaqSection";
import CourseContentSection from "@/components/CourseContentSection";
import TypewrittenText from "@/components/TypewrittenText";
import Footer from "@/components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnMoreButtonClick = function () {
    navigate("about");
  };

  const handleRegisterButtonClick = function () {
    window.open("https://forms.gle/vgqd7ed65JSuYr2ZA", "_blank");
  };

  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center overflow-x-hidden"
        aria-label="home"
      >
        <HeadingSection />
        <div className="w-full flex flex-col items-center">
          <TypewrittenText
            text="In Partnership with:"
            className="sub-heading font-mono"
          />
          <div className="flex items-center mb-2">
            <img
              src={gskLogo}
              className="hero-logos mr-8 hover:scale-150"
              alt="Global Shapers Kandy Hub logo"
            />
            <img
              src={pyDataLogo}
              className="hero-logos ml-8 hover:scale-[200%]"
              alt="PyData Sri Lanka logo"
            />
          </div>
        </div>
        <div className="my-10 text-center px-5">
          <motion.p
            className="font-semibold text-xl md:text-2xl"
            animate={{ color: ["#facc15", "#ffeea8"] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Course Registration Only LKR 2500!
          </motion.p>
          <p className="mt-4 font-light text-lg md:text-xl">
            Registration deadline extended to 28th of February.
          </p>
          <p className="mt-4 font-light">Second session on 1st March.</p>
        </div>
        <div className="w-full flex justify-center mt-10 mb-10 mx-auto">
          <Button
            variant="outline"
            className="action-button hover:bg-blue-900 hover:text-white mr-2 sm:mr-5"
            onClick={handleLearnMoreButtonClick}
          >
            <Info aria-hidden="true" />
            Learn More
            <ChevronRight className="hidden sm:block" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            className="action-button hover:bg-blue-900 hover:text-white ml-2 sm:ml-5"
            onClick={handleRegisterButtonClick}
          >
            <ClipboardType aria-hidden="true" />
            Register Now
            <ChevronRight className="hidden sm:block" aria-hidden="true" />
          </Button>
        </div>
        <FaqSection />
        <CourseContentSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
