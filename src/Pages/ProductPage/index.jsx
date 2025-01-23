import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../utils/fetchProducts";
import Stars from "../../Components/Stars";

const ProductPage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const getApi = async () => {
            setIsLoading(true);
            try {
                const data = await getProductId(id);
                setData(data);
                console.log('data', data)

            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
    };

    useEffect(() => {
        getApi();
    }, []);
    console.log(data);
    
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="product __global-container">
            <div className="product__iamges">
                    
                </div>
                <div className="product__item">
                    <div className="product__item-image">
                    {data?.images?.length > 0 && <img src={data.images[0]} className="product__itme-img" alt={data.name} />}
                    </div>
                    <div className="product__item-detail">
                        <h1 className="product__title">{data.name}</h1>
                        <div className="product__reviews">
                            <div className="product__reviews-stars">
                                <Stars value={2} />
                            </div>
                            <p className="product__reviews-title">
                            10 Review(s) | Add your review
                            </p>
                        </div>
                        <div className="product__price">
                            <p className="product__price--original">${Math.round(data.price)}</p>
                            <p className="product__price--discounted">$999</p>
                            <p className="product__price--stock">IN STOCK</p>
                        </div>
                        <p className="product__item-description">
                            {data.description}
                        </p>
                        <form className="product__form">
                            <div className="product__options">
                                <div>
                                    <label htmlFor="size_product">size:</label>
                                    <select id="size_product" className="product__option--size">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="color_product">color:</label>
                                    <select id="color_product" className="product__option--sise">
                                        <option value="1">Red</option>
                                        <option value="2">green</option>
                                        <option value="3">black</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product__buy">
                                <div className="product__buy_quantity">
                                    <label htmlFor="" className="product__buy_quantity-label">Qyt:</label>
                                    <input type="number" className="product__buy_quantity-input" />
                                    <button className="product__button--add">Add to cart</button>
                                </div>
                            </div>
                        </form>
                        <div className="product__actions">
                            <button className="product__wishlist"></button>
                            <button className="product__compare"></button>
                            <div className="product__category"></div>
                        </div>
                        <div className="product__share">
                            <a className="product__share-link"></a>
                            <a className="product__share-link"></a>
                            <a className="product__share-link"></a>
                            <a className="product__share-link"></a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductPage;