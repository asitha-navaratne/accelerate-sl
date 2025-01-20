import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Download } from "lucide-react";

import repoIcon from "../../assets/icon-repo.svg";

import TypewrittenText from "../TypewrittenText";

import repos from "@/constants/repos";

const CarouselSection = () => {
  return (
    <div className="mt-10 w-full">
      <TypewrittenText
        text="Or go through our repositories below:"
        className="sub-heading font-mono"
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xl mx-auto p-2 md:justify-self-center z-50"
      >
        <CarouselPrevious className="hidden sm:flex text-black" />
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
        <CarouselNext className="hidden sm:flex text-black" />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
