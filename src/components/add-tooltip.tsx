import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type PropsType = {
  children: React.ReactNode;
  tooltipContent: string;
};
const AddTooltip = ({ children, tooltipContent }: PropsType) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
};

export default AddTooltip;
