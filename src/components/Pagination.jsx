// Pagination.jsx
import PropTypes from "prop-types";
import "../assets/styles/Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) paginate(currentPage + 1);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            &laquo;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.node,
  totalItems: PropTypes.node,
  paginate: PropTypes.node,
  currentPage: PropTypes.node,
};

export default Pagination;
