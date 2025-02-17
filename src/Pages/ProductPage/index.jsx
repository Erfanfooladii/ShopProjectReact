import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductId } from '../../utils/fetchProducts';
import ImagesProduct from './Components/ImagesProduct';
import ItemProduct from './Components/ItmeProduct';
import { LoadingProduct } from '../../Components/Loading';

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const handeleTitleName = (name) => {
    document.title = name;
  };
  const getApi = async () => {
    setIsLoading(true);
    try {
      const dataApi = await getProductId(id);
      setData(dataApi);
      handeleTitleName(dataApi.name);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApi();
    console.log('data eff', data);
  }, []);

  const [image, setImage] = useState(false);
  const imageHandler = () => {
    setImage(!image);
  };

  if (isLoading) {
    return <LoadingProduct />;
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
