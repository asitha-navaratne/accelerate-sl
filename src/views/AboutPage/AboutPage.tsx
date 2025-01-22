import { useState } from "react";

import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useAnimation } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
// import Starfield from "react-starfield";

import accelerateLogo from "../../assets/logo-accelerate.png";
import gskLogo from "../../assets/logo-gsk.png";
import pyDataLogo from "../../assets/logo-pydata.png";
import features1 from "../../assets/features-1.svg";
import features2 from "../../assets/features-2.svg";
import features3 from "../../assets/features-3.svg";
import features4 from "../../assets/features-4.svg";

import AboutDialog from "@/components/AboutDialog";
import TypewrittenText from "@/components/TypewrittenText";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<
    "accelerate" | "gsk" | "pydata"
  >("accelerate");

  const accelerateHeadingControls = useAnimation();
  const accelerateLogoControls = useAnimation();

  const gskHeadingControls = useAnimation();
  const gskLogoControls = useAnimation();

  const pyDataHeadingControls = useAnimation();
  const pyDataLogoControls = useAnimation();

  const navigate = useNavigate();

  const handleBackButtonClick = function () {
    navigate("../");
  };

  const handleCardClick = function (
    selectedData: "accelerate" | "gsk" | "pydata"
  ) {
    setSelectedData(selectedData);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex justify-between mt-3 items-center px-5">
          <Button onClick={handleBackButtonClick} aria-label="back button">
            <ChevronLeft />
            Back
          </Button>
          <img
            src={accelerateLogo}
            className="md:mr-2 w-20 md:w-24"
            alt="Accelerate Logo"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 md:mt-24 px-5">
          <motion.div
            onHoverStart={() => {
              accelerateLogoControls.start({ scale: 1.2, rotate: -10 });
              accelerateHeadingControls.start({ color: "#D8B4FE" });
            }}
            onHoverEnd={() => {
              accelerateLogoControls.start({ scale: 1, rotate: 0 });
              accelerateHeadingControls.start({ color: "#fff" });
            }}
            aria-label="what is accelerate sl?"
            aria-description="click the card to learn about the accelerate initiative"
          >
            <Card
              className="w-64 h-80 cursor-pointer bg-slate-800 border-slate-500 box-shadow"
              onClick={() => handleCardClick("accelerate")}
            >
              <CardHeader className="items-center">
                <CardTitle className="font-mono text-lg text-center text-white tracking-tighter">
                  <motion.h2
                    animate={accelerateHeadingControls}
                    initial={{ color: "#fff" }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    What is Accelerate SL
                  </motion.h2>
                </CardTitle>
                <CardDescription className="text-slate-400 text-center">
                  Learn about the Accelerate initiative.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <motion.img
                  src={accelerateLogo}
                  className="w-44 mt-5"
                  animate={accelerateLogoControls}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            onHoverStart={() => {
              gskLogoControls.start({ scale: 1.2 });
              gskHeadingControls.start({ color: "#D8B4FE" });
            }}
            onHoverEnd={() => {
              gskLogoControls.start({ scale: 1 });
              gskHeadingControls.start({ color: "#fff" });
            }}
            aria-label="what is global shapers?"
            aria-description="click the card to learn about the worldwide network of young changemakers"
          >
            <Card
              className="w-64 h-80 cursor-pointer bg-slate-800 border-slate-500 box-shadow"
              onClick={() => handleCardClick("gsk")}
            >
              <CardHeader className="items-center">
                <CardTitle className="font-mono text-lg text-center text-white tracking-tighter">
                  <motion.h2
                    animate={gskHeadingControls}
                    initial={{ color: "#fff" }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    What is Global Shapers
                  </motion.h2>
                </CardTitle>
                <CardDescription className="text-slate-400 text-center">
                  Learn about the worldwide network of young changemakers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <motion.img
                  src={gskLogo}
                  className="w-36 mt-5"
                  animate={gskLogoControls}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            onHoverStart={() => {
              pyDataLogoControls.start({ scale: 1.1, translateY: "-5%" });
              pyDataHeadingControls.start({ color: "#D8B4FE" });
            }}
            onHoverEnd={() => {
              pyDataLogoControls.start({ scale: 1, translateY: 0 });
              pyDataHeadingControls.start({ color: "#fff" });
            }}
            aria-label="what is pydata sl?"
            aria-description="click to learn about the pydata program in sri lanka."
          >
            <Card
              className="w-64 h-80 cursor-pointer bg-slate-800 border-slate-500 box-shadow"
              onClick={() => handleCardClick("pydata")}
            >
              <CardHeader className="items-center">
                <CardTitle className="font-mono text-lg text-center text-white tracking-tighter">
                  <motion.h2
                    animate={pyDataHeadingControls}
                    initial={{ color: "#fff" }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    What is PyData
                  </motion.h2>
                </CardTitle>
                <CardDescription className="text-slate-400 text-center">
                  Learn about the PyData program in Sri Lanka.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <motion.img
                  src={pyDataLogo}
                  className="w-52"
                  animate={pyDataLogoControls}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="mt-14 md:mt-20 flex flex-col justify-center pb-8 px-5">
          <TypewrittenText
            text="Program Features"
            className="text-2xl sub-heading font-mono"
          />
          <div className="flex flex-col items-center">
            <div className="md:mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5">
              <img src={features1} className="w-20 mr-8" />
              <div className="self-start">
                <h3 className="text-lg font-thin mb-2 text-yellow-300">
                  Flexible Online Format
                </h3>
                <p>
                  Participate from anywhere with sessions designed to fit your
                  schedule, particularly on weekends.
                </p>
              </div>
            </div>
            <div className="mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5">
              <img src={features2} className="w-20 mr-8" />
              <div className="self-start">
                <h3 className="text-lg font-thin mb-2 text-yellow-300">
                  Affordable Access
                </h3>
                <p>
                  Affordably priced to ensure inclusivity while maintaining
                  exceptional quality.
                </p>
              </div>
            </div>
            <div className="mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5">
              <img src={features3} className="w-20 mr-8" />
              <div className="self-start">
                <h3 className="text-lg font-thin mb-2 text-yellow-300">
                  Comprehensive Curriculum:
                </h3>
                <p>
                  Covering high-demand topics such as programming, data
                  analytics, and tools for digital optimization.
                </p>
              </div>
            </div>
            <div className="mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5">
              <img src={features4} className="w-20 mr-8" />
              <div className="self-start">
                <h3 className="text-lg font-thin mb-2 text-yellow-300">
                  Expert Panel:
                </h3>
                <p>
                  Sessions conducted by industry professionals and experts from
                  the Global Shapers community & beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <AboutDialog
        isOpen={isDialogOpen}
        handleOpenChange={setIsDialogOpen}
        selection={selectedData}
      />
      {/* <Starfield /> */}
    </>
  );
};

export default AboutPage;
