import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section  className="">
      {/* Intro */}
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-3">
          Developer Portfolio Directory
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-2">
          Browse through developer portfolios
        </p>
        <p className="text-center text-xl mb-4 text-muted-foreground">
          Because we all know the best way to procrastinate is to look at other
          devs' portfolios
          <span className="ml-2">👨‍💻</span>
        </p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <Button asChild size={"sm"} effect={"shine"}>
          <Link
            to="https://github.com/prabhjot2001/dev-portfolio-inspiration"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star
              strokeWidth={"0"}
              className="w-4 h-4 animate-bounce fill-yellow-400"
            />
            Show Your Support & Star This Repo!
          </Link>
        </Button>
      </div>

      {/* Description */}
      <div className="text-center text-lg mb-8 space-y-1 text-muted-foreground">
        <p>
          Explore{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">
            800+
          </span>{" "}
          handcrafted developer portfolios. From minimalist designs to 3D
          experiences, find inspiration for your next portfolio update!
        </p>
        <p className="text-base text-muted-foreground">
          (Or realize your portfolio is perfectly fine and everyone else is just
          overachieving 😅)
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
        <div className="p-4 bg-background rounded-lg border ">
          <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
            800+
          </div>
          <p className="text-sm text-muted-foreground">Portfolios</p>
        </div>

        <div className="p-4 bg-background rounded-lg border ">
          <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
            ∞
          </div>
          <p className="text-sm text-muted-foreground">Hours of Inspiration</p>
        </div>
        <div className="p-4 bg-background rounded-lg border ">
          <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
            3
          </div>
          <p className="text-sm text-muted-foreground">
            Clicks to Find Inspiration
          </p>
        </div>
        <div className="p-4 bg-background rounded-lg border ">
          <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
            1
          </div>
          <p className="text-sm text-muted-foreground">Awesome Community</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
