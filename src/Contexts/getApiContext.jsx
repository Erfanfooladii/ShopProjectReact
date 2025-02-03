import PropTypes from 'prop-types';
import { createContext, useState, useMemo } from 'react';

export const GetApiContext = createContext();

export const GetApiProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState(10);

  const value = useMemo(() => ({ dataApi, setDataApi }), [dataApi]);

  return (
    <GetApiContext.Provider value={value}>{children}</GetApiContext.Provider>
  );
};

GetApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
