import { useContext } from "react";
import "./Pagination.css";
import { PaginationContext } from "../../../../contexts/paginationContext";

const Pagination = ({ totalPages }) => {
    const { selectPagination , setSelectPagination} = useContext(PaginationContext);


    const handeleChangePage=(index)=>{
     setSelectPagination(index + 1)
    }
  return (
    <div className="pagination">
      {
        Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination--button ${selectPagination === index+1 ? 'active' : ''}`}
            onClick={ () => handeleChangePage(index)}
          >
            {index + 1}
          </button>
        ))
      }
    </div>
  );
};

export default Pagination;
