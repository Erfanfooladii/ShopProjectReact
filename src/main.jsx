import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import MainLayouts from './Layouts/MainLayouts';
import { GetApiProvider } from './Contexts/getApiContext';
import { SearchProvider } from './Contexts/searchContext';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CategoryProvider } from './Contexts/categoryContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GetApiProvider>
          <SearchProvider>
            <CategoryProvider>
              <MainLayouts />
            </CategoryProvider>
          </SearchProvider>
        </GetApiProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
