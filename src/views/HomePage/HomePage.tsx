import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ClipboardType,
  Download,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import accelerateLogo from "../../assets/logo-accelerate.png";
import gskLogo from "../../assets/logo-gsk.png";
import pyDataLogo from "../../assets/logo-pydata.png";
import repoIcon from "../../assets/icon-repo.svg";

import Starfield from "@/components/Starfield";

import repos from "@/constants/repos";
import faqs from "@/constants/faqs";

const HomePage = () => {
  const handleFooterLinkClick = function (url: string) {
    window.location.href = url;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center mt-16 mb-10">
        <h1 className="hero-text text-blue-100">mastering</h1>
        <h1 className="hero-text text-yellow-400">data science</h1>
        <img src={accelerateLogo} className="mt-4 w-1/2 md:w-1/5" />
      </div>
      <div>
        <h2 className="sub-heading">🫱🏽‍🫲🏼 In partnership with:</h2>
        <div className="flex items-center mb-10">
          <img src={gskLogo} className="hero-logos mr-5" />
          <img src={pyDataLogo} className="hero-logos ml-5" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-10 mb-10">
        <h2 className="sub-heading">
          Have a look at the form below to register! 👀
        </h2>
        <Button
          variant="outline"
          className="bg-purple-500 border-purple-900 text-purple-50 hover:bg-purple-600 hover:text-purple-50 transition-colors duration-300"
        >
          <ClipboardType />
          Visit Form
          <ChevronRight />
        </Button>
      </div>
      <div className="w-[70%] sm:w-1/2">
        <h2 className="sub-heading">
          Browse our FAQs to answer your burning questions! 🙋‍♂️
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-10 w-full">
        <h2 className="sub-heading">Or go through our repositories below 🧑‍💻</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-xl p-2 md:justify-self-center"
        >
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselContent>
            {repos.map((repo) => (
              <CarouselItem key={repo.name} className="basis-1/2 md:basis-1/3">
                <Card className="w-auto h-full bg-slate-800 border-slate-500">
                  <CardContent className="p-2 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex h-1/3 items-center">
                        <img src={repoIcon} className="w-1/6 mr-3" />
                        <h2 className="font-semibold text-blue-400">
                          {repo.name}
                        </h2>
                      </div>
                      <div className="mt-2 h-1/3">
                        <p className="text-sm text-white">{repo.description}</p>
                        <div className="flex items-center mt-3">
                          <div
                            className={`rounded-full ${repo.color} w-3 h-3`}
                          ></div>
                          <p className="ml-2 text-white">{repo.language}</p>
                        </div>
                      </div>
                      <div className="flex items-center h-1/3 mt-14 justify-self-end">
                        <Download className="w-1/6 mr-2 text-white" />
                        <a href={repo.link} className="text-sm text-white">
                          Download .zip file
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      <div className="mt-10 bg-slate-500 w-full h-20">
        <div className="flex flex-col items-center">
          <div className="mt-2">
            <Button
              variant="link"
              size="icon"
              onClick={() =>
                handleFooterLinkClick(
                  "https://www.instagram.com/globalshapers.kandy/"
                )
              }
            >
              <Instagram />
            </Button>
            <Button
              variant="link"
              size="icon"
              onClick={() =>
                handleFooterLinkClick(
                  "https://www.facebook.com/GlobalshaperskandyHub"
                )
              }
            >
              <Facebook />
            </Button>
            <Button
              variant="link"
              size="icon"
              onClick={() =>
                handleFooterLinkClick(
                  "https://www.linkedin.com/company/global-shapers-kandy/"
                )
              }
            >
              <Linkedin />
            </Button>
          </div>
          <p className="text-sm">&#169; Global Shapers Kandy Hub 2024</p>
        </div>
      </div>
      <Starfield />
    </div>
  );
};

export default HomePage;
