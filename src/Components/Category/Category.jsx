import "./Category.css";
import InputCheckbox from "../Inputs/inputCheckboxs/InputCheckbox";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../contexts/categoryContext";
const Category = () => {
    const categories = [
        { name: 'Electronics', id: 1 },
        { name: 'Home & Garden', id: 2 },
        { name: 'Sports', id: 3 },
        { name: 'Books', id: 4 },
        {name: 'Clothing', id:5}
    ];
    
    const {selectValue,setSelectValue}=useContext(CategoryContext)
    const handleCheckboxChange = (name) => {
        setSelectValue((prev) => {
            const updated = new Set(prev);
            if (updated.has(name)) {
                updated.delete(name);
            } else {
                updated.add(name);
            }
            return updated;
        });
    };

    


    return (
        <div className="container-category">
            <h2>CATEGORIES</h2>
            {
                categories.map((item) => (
                    <InputCheckbox
                        checked={selectValue.has(item.name)}
                        isChecked={() => handleCheckboxChange(item.name)}
                        key={item.id}
                        name={item.name}
                    />
                ))
            }
        </div>
    );
};

export default Category;