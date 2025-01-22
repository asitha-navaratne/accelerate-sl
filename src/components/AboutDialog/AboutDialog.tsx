import { FC } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Home, Instagram, Linkedin, Presentation, Youtube } from "lucide-react";

import { AboutDialogProps } from "./AboutDialog.types";

import AboutData from "@/constants/AboutData";

const AboutDialog: FC<AboutDialogProps> = (props) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.handleOpenChange}>
      <DialogContent className="h-3/4 md:h-2/3 w-80 md:w-1/2 bg-slate-800 border-slate-500 rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-mono text-yellow-300">
            {AboutData[props.selection].name}
          </DialogTitle>
          <DialogDescription>
            {AboutData[props.selection].description}
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto pr-5 pb-5">
          <p className="text-justify">
            {AboutData[props.selection].content.p1}
          </p>
          <p className="mt-5 text-justify">
            {AboutData[props.selection].content.p2}
          </p>
          <p className="mt-5 text-justify">
            {AboutData[props.selection].content.p3}
          </p>
          <p className="mt-5 text-justify">
            {AboutData[props.selection].content.p4}
          </p>
          <div className="flex gap-x-4 gap-y-3 flex-wrap">
            {AboutData[props.selection].links?.home && (
              <Button
                onClick={() =>
                  window.open(
                    AboutData[props.selection].links?.home?.url,
                    "_blank"
                  )
                }
                aria-label="link to Home page"
              >
                <Home className="text-white" aria-hidden="true" />
                {AboutData[props.selection].links?.home?.name}
              </Button>
            )}
            {AboutData[props.selection].links?.instagram && (
              <Button
                onClick={() =>
                  window.open(
                    AboutData[props.selection].links?.instagram?.url,
                    "_blank"
                  )
                }
                aria-label="link to Instagram page"
              >
                <Instagram className="text-white" aria-hidden="true" />
                {AboutData[props.selection].links?.instagram?.name}
              </Button>
            )}
            {AboutData[props.selection].links?.youtube && (
              <Button
                onClick={() =>
                  window.open(
                    AboutData[props.selection].links?.youtube?.url,
                    "_blank"
                  )
                }
                aria-label="link to YouTube page"
              >
                <Youtube className="text-white" aria-hidden="true" />
                {AboutData[props.selection].links?.youtube?.name}
              </Button>
            )}
            {AboutData[props.selection].links?.linkedin && (
              <Button
                onClick={() =>
                  window.open(
                    AboutData[props.selection].links?.linkedin?.url,
                    "_blank"
                  )
                }
                aria-label="link to LinkedIn page"
              >
                <Linkedin className="text-white" aria-hidden="true" />
                {AboutData[props.selection].links?.linkedin?.name}
              </Button>
            )}
            {AboutData[props.selection].links?.meetup && (
              <Button
                onClick={() =>
                  window.open(
                    AboutData[props.selection].links?.meetup?.url,
                    "_blank"
                  )
                }
                aria-label="link to Meetup page"
              >
                <Presentation className="text-white" aria-hidden="true" />
                {AboutData[props.selection].links?.meetup?.name}
              </Button>
            )}
          </div>
        </div>
        <DialogFooter className="mt-5">
          <DialogClose asChild>
            <Button type="button" variant="secondary" aria-label="close modal">
              Okay
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
