import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductId } from '../../utils/fetchProducts';
import ItemProduct from './Components/ItmeProduct';
import { LoadingProduct } from '../../Components/Loading';
import PropTypes from 'prop-types';
import SliderImage from './Components/SliderImage';

const ProductPage = ({ auth }) => {
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
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const [image, setImage] = useState([]);
  const imageHandler = (value = 0) => {
    setImage([value]);
  };

  if (isLoading) {
    return <LoadingProduct />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!data || !data.images || data.images.length === 0) {
    return <div>No images in slider available</div>;
  }
  return (
    <div className="product __global-container">
      <SliderImage images={data?.images} imageHandler={imageHandler} />
      <ItemProduct auth={auth} image={image} data={data} />
    </div>
  );
};
ProductPage.propTypes = {
  auth: PropTypes.bool.isRequired,
};
export default ProductPage;
