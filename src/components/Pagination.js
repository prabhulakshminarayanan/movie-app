import React from 'react';

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="pagination flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          disabled={currentPage === i + 1}
          className={`btn ${currentPage === i + 1 ? 'btn-disabled' : 'btn-secondary'}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;