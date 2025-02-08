import { ArrowLeft, Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { owl } from "@lucide/lab";
import { Button } from "@/components/ui/button";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Icon strokeWidth={"1"} size={80} iconNode={owl} />
      <h1 className="text-2xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Button
        asChild
        icon={ArrowLeft}
        iconPlacement="left"
        effect={"expandIcon"}
      >
        <Link to="/">go back to home</Link>
      </Button>
    </div>
  );
};

export default PageNotFound;
