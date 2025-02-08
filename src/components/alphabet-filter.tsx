import { useState } from "react";
import { Button } from "./ui/button";
import { Delete, Filter } from "lucide-react";

type PropsType = {
  selectedAlphabets: string[];
  setSelectedAlphabets: (value: string[]) => void;
  setCurrentPage: (value: number) => void;
};

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = ({
  selectedAlphabets,
  setSelectedAlphabets,
  setCurrentPage,
}: PropsType) => {
  const toggleAlphabet = (letter: string) => {
    setCurrentPage(1);
    setSelectedAlphabets((prev) =>
      prev.includes(letter)
        ? prev.filter((l) => l !== letter)
        : [...prev, letter]
    );
  };

  const [toggleAlphabetFilter, setToggleAlphabetFilter] =
    useState<boolean>(false);

  return (
    <div className="flex flex-wrap gap-2 mb-4 border rounded-lg p-2 ">
      <div className="py-2 flex items-center justify-between w-full">
        <p className="text-muted-foreground ">Filter By Alphabets</p>
        <Button
          size={"sm"}
          onClick={() => setToggleAlphabetFilter((prev) => !prev)}
        >
          <Filter />
          {toggleAlphabetFilter ? "Close" : "Open"}
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
        <Button variant={"secondary"} onClick={() => setSelectedAlphabets([])}>
          Clear all <Delete className="w-4" />
        </Button>
      </section>
    </div>
  );
};

export default AlphabetFilter;
