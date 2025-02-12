import { useState, useEffect, useMemo } from "react";
import PortfolioCard from "@/components/portfolio-card";
import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/search-bar";
import AddTooltip from "@/components/add-tooltip";
import Tags from "@/components/tags";
import AlphabetFilter from "@/components/alphabet-filter";
import { ArrowDownAZ, ArrowUpZA, LayoutGrid, List } from "lucide-react";

type PropType = {
  name: string;
  url: string;
  tags: string[];
  imageUrl: string;
};
const ITEMS_PER_PAGE = 12;

const Portfolios = ({ portfolioData }: { portfolioData: PropType[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [selectedAlphabets, setSelectedAlphabets] = useState<string[]>([]);

  // toggle layout
  const toggleLayout = () => {
    setIsGridLayout((prev) => !prev);
  };

  // find and set the unique tags from all portfolioData
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    portfolioData.forEach((portfolio) => {
      portfolio.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [portfolioData]);

  // Filter and sort portfolioData
  const filteredportfolioData = useMemo(() => {
    return portfolioData
      .filter((portfolio) => {
        const matchesSearch = portfolio.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.some((tag) => portfolio.tags.includes(tag));
        const matchesAlphabet =
          selectedAlphabets.length === 0 ||
          selectedAlphabets.some((letter) =>
            portfolio.name.toUpperCase().startsWith(letter)
          );

        return matchesSearch && matchesTags && matchesAlphabet;
      })
      .sort((a, b) => {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
  }, [
    searchQuery,
    selectedTags,
    sortDirection,
    selectedAlphabets,
    portfolioData,
  ]);

  const totalPages = Math.ceil(filteredportfolioData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentportfolioData = filteredportfolioData.slice(
    startIndex,
    endIndex
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTags, sortDirection]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="py-6 w-full">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl text-center mb-12">
        Find your next inspiration here! ✨
      </h2>
      <div className="mb-6 space-y-2">
        {/* Search Bar */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex-1">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <Tags
            allTags={allTags}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            setSelectedTags={setSelectedTags}
          />
        </div>
        {/* Alphabet finlter */}
        <AlphabetFilter
          selectedAlphabets={selectedAlphabets}
          setSelectedAlphabets={setSelectedAlphabets}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Toggle view */}
      <div className="flex justify-end w-full mb-6 gap-2">
        <AddTooltip tooltipContent="Change layout">
          <Button variant={"outline"} onClick={toggleLayout}>
            {isGridLayout ? <List /> : <LayoutGrid />}
          </Button>
        </AddTooltip>

        {/* Sort Direction */}
        <Button
          variant={"outline"}
          onClick={() =>
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
          }
          className="dark:border-slate-300"
        >
          Sort{" "}
          {sortDirection === "asc" ? (
            <ArrowUpZA className="w-4" />
          ) : (
            <ArrowDownAZ className="w-4" />
          )}
        </Button>
      </div>

      {/* Portfolio Grid */}
      <div
        id="main"
        className={`${
          isGridLayout
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            : "flex flex-col gap-6 mb-16"
        } flex-1`}
      >
        {currentportfolioData.map((portfolio) => (
          <PortfolioCard
            key={portfolio.url}
            portfolio={portfolio}
            isGridLayout={isGridLayout}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Portfolios;
