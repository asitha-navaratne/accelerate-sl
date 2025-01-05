import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import repoLogo from "../../assets/logo-repo.svg";
import downloadLogo from "../../assets/logo-download.svg";

import config from "@/configs/repos.config";

const HomePage = () => {
  return (
    <div className="w-full h-full flex md:justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xl p-2"
      >
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselContent>
          {config.map((repo) => (
            <CarouselItem key={repo.name} className="basis-1/3">
              <Card className="w-auto h-full">
                <CardContent className="p-2 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex h-1/3 items-center">
                      <img src={repoLogo} className="w-1/6 mr-3" />
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
                      <img src={downloadLogo} className="w-1/6 mr-2" />
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
  );
};

export default HomePage;
