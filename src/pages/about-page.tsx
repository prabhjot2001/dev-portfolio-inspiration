import { Button } from "@/components/ui/button";
import { Github, Heart, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
          About this project
        </h1>
      </div>
      {/* Credit Section */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart
            strokeWidth={"0"}
            className="w-5 h-5 fill-red-500 animate-pulse"
          />
          <h2 className="text-xl font-semibold">
            The Story Behind This Project
          </h2>
          <Heart
            strokeWidth={"0"}
            className="w-5 h-5 fill-red-500 animate-pulse"
          />
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p className="text-center">
            This project is built upon the amazing work of{" "}
            <Link
              to="https://github.com/emmabostian/developer-portfolios"
              className="text-blue-500 dark:text-blue-400 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Portfolios Repository
            </Link>
            , which maintains a fantastic collection of portfolio links in their
            README.
          </p>

          <p className="text-center">
            While browsing through the repository, I realized we could make
            these incredible portfolios even more accessible. So, I created this
            website to transform those README links into an interactive
            directory with search, filtering, and sorting capabilities - making
            it easier for everyone to explore and find inspiration!
          </p>

          <p className="text-center font-medium">
            A massive thank you to the original repository maintainers and all
            the developers who shared their portfolios. You're making the dev
            community a better place! 🙌
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <Button asChild>
            <Link
              to="https://github.com/emmabostian/developer-portfolios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Original Repository
            </Link>
          </Button>
          <Button asChild>
            <Link
              to="https://github.com/prabhjot2001/dev-portfolio-inspiration"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              Visit my github
            </Link>
          </Button>
          <Button asChild>
            <Link
              to="https://github.com/prabhjot2001/dev-portfolio-inspiration"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star
                strokeWidth={"0"}
                className="w-4 h-4 animate-bounce fill-yellow-400"
              />
              Star this repo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
