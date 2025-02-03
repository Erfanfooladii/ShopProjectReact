import './ProductPage.css';
import ProductList from './Components/ProductList';
import Pagination from './Components/Pagination';
import ShowPage from './Components/Show';
import { useContext, useEffect, useState } from 'react';
import { GetApiContext } from '../../Contexts/getApiContext';
import TopSelling from './Components/TopSellins';
import Category from './Components/Category';
import { SearchContext } from '../../Contexts/searchContext';
const HomePage = () => {
  const { dataApi } = useContext(GetApiContext);
  const { searchValue } = useContext(SearchContext);
  const [category, setCategory] = useState(new Set());
  const [limitShowPage, setLimitShowPage] = useState();
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    setPagination(1);
  }, [limitShowPage, category, searchValue]);

  return (
    <div className="home __global-container">
      <div className="home__section">
        <div className="home__section--right">
          <Category setCategory={setCategory} />
          <TopSelling />
        </div>
        <div className="home__section--list">
          <ShowPage setLimitShowPage={setLimitShowPage} />
          <ProductList
            category={category}
            limitShowPage={limitShowPage}
            pagination={pagination}
          />
        </div>
      </div>
      <div className="home__footer">
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          totalPages={dataApi.data?.pagination.totalPages}
        />
      </div>
    </div>
  );
};
export default HomePage;
