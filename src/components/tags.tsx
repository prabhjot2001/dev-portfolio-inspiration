import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Delete, TagsIcon } from "lucide-react";

type PropsType = {
  toggleTag: (tag: string) => void;
  allTags: string[];
  setSelectedTags: (value: string[]) => void;
  selectedTags: string[];
};

const Tags = ({
  allTags,
  selectedTags,
  toggleTag,
  setSelectedTags,
}: PropsType) => {
  const [openTags, setOpenTags] = useState(false);
  return (
    <div className="border rounded-lg p-2">
      <div className="py-2 flex items-center justify-between w-full">
        <p className="text-muted-foreground ">Filter By Tags</p>
        <Button size={"sm"} onClick={() => setOpenTags((prev) => !prev)}>
          <TagsIcon />
          {openTags ? "Close tags" : "Open tags"}
        </Button>
      </div>
      <section
        className={`overflow-auto transition-all duration-500 ease-in-out ${
          openTags ? "max-h-max" : "max-h-0"
        }`}
      >
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                variant={"outline"}
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-xs hover:cursor-pointer dark:border dark:border-slate-500 ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-white dark:text-black"
                    : ""
                }`}
              >
                {tag}
              </Badge>
            ))}

            {/* -- Clear all tags button -- */}
            <Button
              variant={"destructive"}
              onClick={() => setSelectedTags([])}
              className="flex items-center gap-2"
            >
              Clear all tags
              <Delete className="w-4" />
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Tags;
