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

import repoIcon from "../../assets/icon-repo.svg";
import downloadIcon from "../../assets/icon-download.svg";

import repos from "@/constants/repos";
import faqs from "@/constants/faqs";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[70%] sm:w-1/2">
        <h2 className="font-bold justify-self-center mb-5 hover:text-purple-500 transition-colors duration-300">
          Browse our FAQs to answer your burning questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-10">
        <h2 className="font-bold justify-self-center mb-5 hover:text-purple-500 transition-colors duration-300">
          Or go through our repositories below
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-xl p-2"
        >
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselContent>
            {repos.map((repo) => (
              <CarouselItem key={repo.name} className="basis-1/3">
                <Card className="w-auto h-full">
                  <CardContent className="p-2 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex h-1/3 items-center">
                        <img src={repoIcon} className="w-1/6 mr-3" />
                        <h2 className="font-semibold text-blue-700">
                          {repo.name}
                        </h2>
                      </div>
                      <div className="mt-2 h-1/3">
                        <p className="text-sm">{repo.description}</p>
                        <div className="flex items-center mt-3">
                          <div
                            className={`rounded-full bg-${repo.color} w-3 h-3`}
                          ></div>
                          <p className="ml-2">{repo.language}</p>
                        </div>
                      </div>
                      <div className="flex items-center h-1/3 mt-14 justify-self-end">
                        <img src={downloadIcon} className="w-1/6 mr-2" />
                        <a href={repo.link} className="text-sm">
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
    </div>
  );
};

export default HomePage;
