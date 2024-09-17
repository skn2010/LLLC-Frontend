import cn from "@/app/utils/class-names";

type Props = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  className,
}: Props) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPageNumbersToShow) {
      if (currentPage <= 3) {
        endPage = maxPageNumbersToShow - 2;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - (maxPageNumbersToShow - 3);
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(i);
            }}
            className={cn(
              "flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
              {
                "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700":
                  i === currentPage,
                "text-gray-500 bg-white": i !== currentPage,
              }
            )}
          >
            {i}
          </a>
        </li>
      );
    }

    // Add ellipsis if necessary
    if (startPage > 2) {
      pageNumbers.unshift(
        <li
          key="start-ellipsis"
          className="flex items-center justify-center px-4 h-10 text-gray-500 bg-white"
        >
          ...
        </li>
      );
      pageNumbers.unshift(
        <li key={1}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(1);
            }}
            className={cn(
              "flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
              {
                "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700":
                  currentPage === 1,
                "text-gray-500 bg-white": currentPage !== 1,
              }
            )}
          >
            1
          </a>
        </li>
      );
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <li
          key="end-ellipsis"
          className="flex items-center justify-center px-4 h-10 text-gray-500 bg-white"
        >
          ...
        </li>
      );
      pageNumbers.push(
        <li key={totalPages}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(totalPages);
            }}
            className={cn(
              "flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
              {
                "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700":
                  currentPage === totalPages,
                "text-gray-500 bg-white": currentPage !== totalPages,
              }
            )}
          >
            {totalPages}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav className={cn(className)} aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
