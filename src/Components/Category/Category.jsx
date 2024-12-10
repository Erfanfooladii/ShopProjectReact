import "./Category.css";
import InputCheckbox from "../Inputs/inputCheckboxs/InputCheckbox";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/fetchProducts";
const Category = () => {
    const categories = [
        { name: 'laptops', id: 1 },
        { name: 'smartphones', id: 2 },
        { name: 'cameras', id: 3 },
        { name: 'accessories', id: 4 }
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

    //console.log([...selectedCategories]);
    useEffect(() => {
    const getApi = async () => {
        try {
            const data = await fetchProducts();
            if (data && data.category && data.category.name) {
                const categoryType = data.category.name;
                console.log(categoryType);
            } else {
                console.error('Unexpected data structure:', data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    getApi();
}, []);
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