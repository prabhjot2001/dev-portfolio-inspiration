import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type PropsType = {
  portfolio: {
    name: string;
    url: string;
    tags: string[];
    imageUrl: string;
  };
  isGridLayout: boolean;
};

const PortfolioCard = ({ portfolio, isGridLayout }: PropsType) => {
  return (
    <div>
      <div
        key={portfolio.url}
        className={`border rounded-lg overflow-hidden  bg-background ${
          isGridLayout ? "" : "flex"
        }`}
      >
        <div className="relative h-48 p-1">
          {portfolio.imageUrl ? (
            <img
              src={portfolio.imageUrl}
              alt={`${portfolio.name}'s portfolio`}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="flex w-full h-full p-4 items-center justify-center rounded-lg border">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image strokeWidth={"1.50"} size={40} />
                <small className="text-sm text-muted-foreground leading-none text-center">
                  Oops! The image for this portfolio is unavailable at the
                  moment. We apologize for the inconvenience.
                </small>
              </div>
            </div>
          )}
        </div>
        <div
          className={`p-4  ${
            isGridLayout ? "" : "flex flex-col justify-between w-full"
          }`}
        >
          <p className={`text-lg font-medium mb-2 ${isGridLayout ? "" : ""}`}>
            {portfolio.name}
          </p>
          <div>
            {portfolio.tags ? (
              <div className="mb-4 flex flex-wrap gap-2">
                {portfolio.tags.map((tag, idx) => (
                  <Badge className="text-xs" key={idx}>
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : (
              ""
            )}
            <Button
              asChild
              variant={"secondary"}
              icon={ArrowRight}
              iconPlacement="right"
              effect={"expandIcon"}
              className="w-full dark:border dark:border-slate-300"
            >
              <Link
                to={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Visit Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
