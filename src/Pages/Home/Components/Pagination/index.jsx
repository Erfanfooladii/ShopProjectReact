import PropTypes from 'prop-types';
import './style.css';

const Pagination = ({ totalPages, setPagination, pagination }) => {
  const handeleChangePage = (index) => {
    setPagination(index + 1);
  };
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`pagination--button ${pagination === index + 1 ? 'active' : ''}`}
          onClick={() => handeleChangePage(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
Pagination.propTypes = {
  totalPages: PropTypes.number,
  setPagination: PropTypes.func.isRequired,
  pagination: PropTypes.number.isRequired,
};

export default Pagination;
