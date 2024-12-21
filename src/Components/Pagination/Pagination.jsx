import { useContext } from "react";
import "./Pagination.css";
import { PaginationContext } from "../../contexts/paginationContext";

const Pagination = ({ totalPages }) => {
    const { setSelectPagination, selectPagination } = useContext(PaginationContext);
    const handeleChangePage=()=>{

    }
  return (
    <div className="container-pagination">
      {
        Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${selectPagination === index+1 ? 'active' : ''}`}
            onClick={handeleChangePage}
          >
            {index + 1}
          </button>
        ))
      }
    </div>
  );
};

export default Pagination;
