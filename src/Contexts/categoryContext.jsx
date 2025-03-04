import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(new Set());
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
