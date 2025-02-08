import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Braces, Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import AddTooltip from "./add-tooltip";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      url: "/",
      tooltipContent: "Home",
    },
    {
      label: "About",
      url: "/about",
      tooltipContent: "About",
    },
    {
      label: "",
      url: "https://github.com/prabhjot2001/dev-portfolio-inspiration",
      icon: <Github className="w-4" />,
      tooltipContent: "Github",
    },
  ];
  return (
    <nav
      className={`z-50 w-full sticky top-0 sm:top-4 flex items-center justify-between sm:rounded-lg border-b  sm:border  p-3   backdrop-blur-md  mb-6 sm:mb-12 bg-background/80`}
    >
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <Braces size={30} strokeWidth={"1.5"} className="text-blue-500" />
        </Link>
      </div>
      <div className={`flex items-center justify-between gap-2`}>
        {navLinks.map((link, idx) => (
          <AddTooltip tooltipContent={link.tooltipContent}>
            <Button
              variant={"link"}
              size={"sm"}
              effect={"hoverUnderline"}
              className={``}
            >
              <Link key={idx} to={link.url}>
                {link.icon}
                {link.label}
              </Link>
            </Button>
          </AddTooltip>
        ))}

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
