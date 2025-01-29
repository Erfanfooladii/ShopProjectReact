import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../utils/fetchProducts";
import ImagesProduct from "./Components/ImagesProduct";
import ItemProduct from "./Components/ItmeProduct";

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
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
    };

    useEffect(() => {
        getApi();
    }, []);

    const [image,setImage]=useState(false)
    const imageHandler=()=>{
        setImage(!image)
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="product __global-container">
                <ImagesProduct imageHandler={imageHandler} image={image} data={data} />
                <ItemProduct image={image} data={data} />
        </div>
    );
};

export default ProductPage;