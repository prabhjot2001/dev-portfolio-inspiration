import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Delete, Filter } from "lucide-react";

type PropsType = {
  selectedAlphabets: string[];
  setSelectedAlphabets: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = ({
  selectedAlphabets,
  setSelectedAlphabets,
  setCurrentPage,
}: PropsType) => {
  const toggleAlphabet = (letter: string) => {
    setCurrentPage(1);
    setSelectedAlphabets((prev: string[]) =>
      prev.includes(letter)
        ? prev.filter((l: string) => l !== letter)
        : [...prev, letter]
    );
  };

  const [toggleAlphabetFilter, setToggleAlphabetFilter] =
    useState<boolean>(false);

  return (
    <div className="flex flex-wrap gap-2 rounded-lg p-2 border">
      <div className="py-2 flex items-center justify-between w-full">
        <p className="text-muted-foreground ">Filter By Alphabets</p>
        <Button
          size={"sm"}
          onClick={() => setToggleAlphabetFilter((prev) => !prev)}
        >
          <Filter />
          {toggleAlphabetFilter ? "Close filter" : "Open filter"}
        </Button>
      </div>
      <section
        className={`transition-all duration-500 ease-in-out flex flex-wrap gap-2 ${
          toggleAlphabetFilter ? "max-h-max" : "hidden"
        }`}
      >
        {ALPHABETS.map((letter: string) => (
          <Button
            key={letter}
            variant={selectedAlphabets.includes(letter) ? "default" : "outline"}
            onClick={() => toggleAlphabet(letter)}
            size={"icon"}
          >
            {letter}
          </Button>
        ))}
        <Button
          variant={"destructive"}
          onClick={() => setSelectedAlphabets([])}
        >
          Clear all <Delete className="w-4" />
        </Button>
      </section>
    </div>
  );
};

export default AlphabetFilter;
