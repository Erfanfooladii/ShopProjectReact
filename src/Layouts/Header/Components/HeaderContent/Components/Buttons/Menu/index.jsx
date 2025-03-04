import { useEffect, useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
const MenuButton = ({ funcHandeleMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenu, setIsMenu] = useState(false);
  const [isIcon, setIsIcon] = useState(false);
  const handeleButtonMenu = () => {
    funcHandeleMenu();
    setIsIcon(!isIcon);
  };
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
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  }, [width]);
  return (
    isMenu && (
      <button onClick={handeleButtonMenu} className="header__menu--button">
        {!isIcon ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="#EA3323"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        )}
      </button>
    )
  );
};
MenuButton.propTypes = {
  funcHandeleMenu: PropTypes.func,
};
export default MenuButton;
