import PropTypes from 'prop-types';
import './style.css';

const InputCategory = ({
  name = 'name product',
  isChecked = () => {},
  checked = false,
  disabled = false,
}) => {
  return (
    <div className="item-check">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={isChecked}
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

InputCategory.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isChecked: PropTypes.func,
};

export default InputCategory;
