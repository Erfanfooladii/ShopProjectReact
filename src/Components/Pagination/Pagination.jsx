import { useContext } from "react";
import "./Pagination.css"
import { PaginationContext } from "../../contexts/paginationContext";
const Pagination=() => {
    const listNumbers10=[1,2,3,4,5,6,7,8,9,10]
    const {setSelectPagination}=useContext(PaginationContext)
    return (
        <div className="container-pagination">
            {
                listNumbers10.map((item,index)=>{
                    return <button key={index} onClick={()=>{setSelectPagination(item)}} >{item}</button>
                })
            }
        </div>
    )
};
export default Pagination;