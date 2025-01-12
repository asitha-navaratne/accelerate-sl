import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const handleFooterLinkClick = function (url: string) {
    window.location.href = url;
  };

  return (
    <footer className="mt-10 bg-yellow-300 w-full h-20">
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
        <p className="text-sm text-black">
          &#169; Global Shapers Kandy Hub 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
