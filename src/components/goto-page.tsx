import { useState } from "react";
import { Button } from "@/components/ui/button";

type PropsType = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: number) => void;
};
const GoToPage = ({ totalPages, setCurrentPage }: PropsType) => {
  const [inputPage, setInputPage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]*$/.test(value)) {
      setInputPage(value);
    }
  };

  const handleSubmit = () => {
    let page = parseInt(inputPage, 10);

    if (page > totalPages) {
      page = totalPages;
    } else if (page < 1 || isNaN(page)) {
      page = 1;
    }

    setCurrentPage(page);
    const element = document.getElementById("main");
    if (element) {
      const offset = 180;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
    setInputPage("");
  };

  return (
    <div className="flex items-center gap-2 justify-center p-4">
      <input
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        placeholder={`Go to page (1-${totalPages})`}
        className="px-4 py-2 border rounded-lg bg-background "
      />
      <Button onClick={handleSubmit} variant={"default"}>
        Go
      </Button>
    </div>
  );
};

export default GoToPage;
