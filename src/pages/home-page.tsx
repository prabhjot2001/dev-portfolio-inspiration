import Hero from "@/components/hero";
import Portfolios from "@/components/Portfolios";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/porfolioData";

const HomePage = () => {
  return (
    <div id="home">
      <Hero />
      <Separator />
      <Portfolios portfolioData={portfolioData} />
    </div>
  );
};

export default HomePage;
