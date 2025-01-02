import { useContext, useState } from "react";
import "./style.css"
import { SearchContext } from "../../../../Contexts/searchContext";
const Body = () => {
    const [textValue,setTextValue]=useState("")
    const { setSearchValue }=useContext(SearchContext)
    const searchHandele=(e)=>{
        e.preventDefault();
        setSearchValue(textValue)
    }
    
    return(
        <div className="header__body">
            <div className="__global-container">
                <div className="header__shop-name">
                    <h1 className="header__shop-title">Electro</h1>
                </div>
                <form onSubmit={searchHandele} className="header__search-box">
                    <select className="header__search-select">
                        <option value="All">All categories</option>
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                    </select>
                    <input type="text" onChange={(e)=>{setTextValue(e.target.value)}} className="header__search-input" />
                    <button type="submit" className="header__search-button">Search</button>
                </form>
                <div className="header__route-btn">
                    <button className="header__btn header__btn--cart">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                        </svg>
                        <small className="header__btn-text">Your Cart</small>
                    </button>
                    <button className="header__btn header__btn--favorite">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                        </svg>
                        <small className="header__btn-text">Your Wishlist</small>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Body;