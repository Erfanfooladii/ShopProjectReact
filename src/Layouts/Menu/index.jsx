import PropTypes from 'prop-types';
import './style.css';
import { useContext, useEffect, useState } from 'react';
import Category from '../../Pages/Home/Components/Category';
import { CategoryContext } from '../../Contexts/categoryContext';
const Menu = ({ isMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(isMenu);
  const { setCategory } = useContext(CategoryContext);
  const handeleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handeleResize);
    return () => {
      window.removeEventListener('resize', handeleResize);
    };
  }, []);
  useEffect(() => {
    if (width < 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  return (
    isOpen &&
    isMenu && (
      <div className="menu">
        <div className="menu__category">
          <Category setCategory={setCategory} />
        </div>
      </div>
    )
  );
};
Menu.propTypes = {
  isMenu: PropTypes.bool.isRequired,
};
export default Menu;
