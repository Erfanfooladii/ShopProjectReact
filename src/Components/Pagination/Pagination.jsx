import { useContext } from "react";
import "./Pagination.css";
import { PaginationContext } from "../../contexts/paginationContext";

const Pagination = ({ totalPages }) => {
  const { setSelectPagination, selectPagination } = useContext(PaginationContext);

  return (
    <div className="container-pagination">
      {
        Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${selectPagination === index ? 'active' : ''}`}
            onClick={() => { console.log(index)
             setSelectPagination(index+1); }}
          >
            {index + 1}
          </button>
        ))
      }
    </div>
  );
};

export default Pagination;
