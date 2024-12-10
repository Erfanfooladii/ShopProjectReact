import "./Category.css";
import InputCheckbox from "../Inputs/inputCheckboxs/InputCheckbox";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/fetchProducts";
const Category = () => {
    const categories = [
        { name: 'Electronics', id: 1 },
        { name: 'Home & Garden', id: 2 },
        { name: 'Sports', id: 3 },
        { name: 'Books', id: 4 },
        {name: 'Clothing', id:5}
    ];

    const [selectedCategories, setSelectedCategories] = useState(new Set());

    const handleCheckboxChange = (name) => {
        setSelectedCategories((prev) => {
            const updated = new Set(prev);
            if (updated.has(name)) {
                updated.delete(name);
            } else {
                updated.add(name);
            }
            return updated;
        });
    };

    console.log([...selectedCategories]);
    
    return (
        <div className="container-category">
            <h2>CATEGORIES</h2>
            {
                categories.map((item) => (
                    <InputCheckbox
                        checked={selectedCategories.has(item.name)}
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