import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PrivateRoute;
