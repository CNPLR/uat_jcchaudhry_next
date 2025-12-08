import { useState, ReactNode, JSX } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

interface CommonPaginationProps {
  data: ReactNode[];
  itemsPerPage?: number;
}

export default function CommonPagination({
  data,
  itemsPerPage = 8,
}: CommonPaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = (): JSX.Element[] => {
    const pageNumbers: JSX.Element[] = [];

    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`mx-2 text-black px-3 py-2 border border-slate-300 text-xs rounded-sm font-semibold ${
              currentPage === i ? "text_over" : ""
            }`}
            onClick={() => handleChangePage(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      const leftEllipsis = currentPage > 4;
      const rightEllipsis = currentPage < totalPages - 3;

      pageNumbers.push(
        <button
          key={1}
          className={`mx-2 text-black px-3 py-2 border border-slate-300 text-xs rounded-sm font-semibold ${
            currentPage === 1 ? "text_over" : ""
          }`}
          onClick={() => handleChangePage(1)}
        >
          1
        </button>
      );

      if (leftEllipsis) {
        pageNumbers.push(
          <span key="leftEllipsis" className="mx-2 text-gray-500">
            ...
          </span>
        );
      }

      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < totalPages) {
          pageNumbers.push(
            <button
              key={i}
              className={`mx-2 text-black px-3 py-2 border border-slate-300 text-xs rounded-sm font-semibold ${
                currentPage === i ? "text_over" : ""
              }`}
              onClick={() => handleChangePage(i)}
            >
              {i}
            </button>
          );
        }
      }

      if (rightEllipsis) {
        pageNumbers.push(
          <span key="rightEllipsis" className="mx-2 text-gray-500">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <button
          key={totalPages}
          className={`mx-2 text-black px-3 py-2 border border-slate-300 text-xs rounded-sm font-semibold ${
            currentPage === totalPages ? "text_over" : ""
          }`}
          onClick={() => handleChangePage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  const visibleData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-10">
      <ul className="flex justify-center flex-wrap">
        {visibleData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {data.length > itemsPerPage && (
        <div className="text-center my-5 flex justify-center items-center flex-wrap gap-2">
          <button
            className="font-semibold text-[#fd7e14] flex items-center"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <GrFormPreviousLink />
            <span>Previous</span>
          </button>

          {renderPageNumbers()}

          <button
            className="font-semibold text-[#fd7e14] flex items-center"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <GrFormNextLink />
          </button>
        </div>
      )}
    </div>
  );
}
