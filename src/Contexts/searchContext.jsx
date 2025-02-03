import PropTypes from 'prop-types';
import { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const value = useMemo(() => ({ searchValue, setSearchValue }), [searchValue]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
