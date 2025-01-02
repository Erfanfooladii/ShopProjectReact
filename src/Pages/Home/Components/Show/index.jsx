import { useContext } from "react";
import "./ShowPage.css"
import { ShowPageContext } from "../../../../contexts/showPageContext";
const ShowPage=()=>{
    const {setSelectLimitShowPage}=useContext(ShowPageContext)
    return(
        <div className="show">
            <div className="show__body">
                <span>show</span>
                <select className="show__body--select" onChange={(e)=>{setSelectLimitShowPage(e.target.value)}} >
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    )
}

export default ShowPage;