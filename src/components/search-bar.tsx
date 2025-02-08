import { Search } from "lucide-react";

type PropsType = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};
const SearchBar = ({ searchQuery, setSearchQuery }: PropsType) => {
  return (
    <div className="relative z-0">
      <Search
        className="absolute  right-3 top-1/2 transform -translate-y-1/2 "
        size={20}
      />
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-4 rounded-lg border bg-background dark:border-slate-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
