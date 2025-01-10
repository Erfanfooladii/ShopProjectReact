import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductApi } from "../../utils/fetchProducts";

const ProductPage = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    
    useEffect(() => {
        const getApi = async () => {
            setIsLoading(true);
            try {
                const data = await fetchProductApi(id);
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        getApi();
    }, [id]);
    console.log(data);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="product">
            <div className="product__container ">
                <div className="product__iamges">
                </div>
                <div className="product__item">
                    <div className="product__item-image">
                    </div>
                    <div className="product__item-detail">
                        <h1 className="product__item-title"></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;