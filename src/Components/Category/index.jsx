import "./Category.css";
import InputCheckbox from "../Inputs/inputCheckboxs/InputCheckbox";
import { useContext, useState } from "react";
import { CategoryContext } from "../../contexts/categoryContext";
const Category = () => {
    const {setSelectValueCategory}=useContext(CategoryContext)
    const categories = [
        { name: 'Electronics', id: '6748dfa3c9017c78628d4a87' },
        { name: 'Home & Garden', id: '6748dfa3c9017c78628d4a8d' },
        { name: 'Sports', id: '6748dfa3c9017c78628d4a93' },
        { name: 'Books', id: '6748dfa3c9017c78628d4a90' },
        {name: 'Clothing', id:'6748dfa3c9017c78628d4a8a'}
    ];
    const [isChecked,setIsChecked]=useState(false)
    const [checked,setChecked]=useState(new Set())
    const handleCheckboxChange = (name) => {
        setChecked((prev) => {
            const updated = new Set(prev);
            setIsChecked(!isChecked)
            if (updated.has(name)) {
                updated.delete(name);
            } else {
                updated.add(name);
            }
            return updated;
        });
        setSelectValueCategory((prev) => {
            const updated = new Set(prev);
            if (updated.has(name)) {
                updated.delete(name);
            } else {
                updated.add(name);
            }
            return updated;
        });
    };
    
    const isAnyChecked=checked.size > 0
    return (
        <div className="container-category">
            <h2>CATEGORIES</h2>
            {
                categories.map((item) => (
                    <InputCheckbox
                        disabled={isAnyChecked && !checked.has(item.id)}           
                        key={item.id}
                        name={item.name}
                        checked={checked.has(item.id)}
                        isChecked={()=>{handleCheckboxChange(item.id)}}
                    />
                ))
            }
        </div>
    );
};

export default Category;