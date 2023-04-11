import classNames from 'classnames';
import { MouseEvent, useMemo } from 'react';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void,
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const numberOfPages = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [total, perPage]);

  const pageItems = useMemo(() => {
    const items = [];

    for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber += 1) {
      const handlePageClick = (event: MouseEvent) => {
        event.preventDefault();
        onPageChange(pageNumber);
      };

      items.push(
        <li
          key={pageNumber}
          className={classNames('page-item', {
            active: currentPage === pageNumber,
          })}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${pageNumber}`}
            onClick={handlePageClick}
          >
            {pageNumber}
          </a>
        </li>,
      );
    }

    return items;
  }, [total, perPage, currentPage]);

  const handlePrevClick = (event: MouseEvent) => {
    event.preventDefault();

    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event: MouseEvent) => {
    event.preventDefault();

    if (currentPage !== numberOfPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination">
      <li
        className={classNames('page-item', {
          disabled: currentPage === 1,
        })}
      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          onClick={handlePrevClick}
        >
          «
        </a>
      </li>
      {pageItems}
      <li
        className={classNames('page-item', {
          disabled: currentPage === numberOfPages,
        })}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === numberOfPages ? 'true' : 'false'}
          onClick={handleNextClick}
        >
          »
        </a>
      </li>
    </ul>
  );
};
