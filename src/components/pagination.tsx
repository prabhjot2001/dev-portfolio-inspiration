import React from "react";
import { Button } from "@/components/ui/button";
import GoToPage from "./goto-page";

type PropsType = {
  setCurrentPage: (value: number) => void;
  currentPage: number;
  totalPages: number;
};
const Pagination = ({ setCurrentPage, currentPage, totalPages }: PropsType) => {
  const handlePageChange = (page: number) => {
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
  };

  return (
    <div>
      <div className="flex justify-center gap-2 flex-wrap">
        <Button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          variant={"secondary"}
          disabled={currentPage === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(
            (page) =>
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 2 && page <= currentPage + 2)
          )
          .map((page, index, array) => (
            <React.Fragment key={page}>
              {index > 0 && array[index - 1] !== page - 1 && (
                <span className="px-4 py-2">...</span>
              )}
              <Button
                variant={"outline"}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page
                    ? "border bg-primary text-white dark:text-black dark:hover:text-white"
                    : ""
                }`}
              >
                {page}
              </Button>
            </React.Fragment>
          ))}

        <Button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          variant={"secondary"}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
      <div className="">
        <GoToPage
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
