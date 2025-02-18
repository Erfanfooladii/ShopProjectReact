import PropTypes from 'prop-types';
import HeaderContent from './Components/HeaderContent';
import HeaderTop from './Components/HeaderTop';
import './style.css';
const Header = ({ setAuth, auth }) => {
  return (
    <header className="header">
      <HeaderTop setAuth={setAuth} auth={auth} />
      <HeaderContent auth={auth} />
    </header>
  );
};
Header.propTypes = {
  setAuth: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};
export default Header;
