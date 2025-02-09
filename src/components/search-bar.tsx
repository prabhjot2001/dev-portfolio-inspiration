import { Delete, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type PropsType = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};
const SearchBar = ({ searchQuery, setSearchQuery }: PropsType) => {
  return (
    <div className="relative z-0 flex items-center">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 "
        size={20}
      />
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full flex-1 p-4 rounded-lg border bg-background dark:border-slate-300 pl-10 pr-24"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        onClick={() => {
          setSearchQuery("");
        }}
        size={"xs"}
        variant={"secondary"}
        disabled={searchQuery === "" ? true : false}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
      >
        <Delete className="" />
        Clear
      </Button>
    </div>
  );
};

export default SearchBar;
