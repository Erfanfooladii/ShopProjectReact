import PropTypes from 'prop-types';
import './style.css';
const InputCategory = ({ name, isChecked, checked, disabled }) => {
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
};

InputCategory.defaultProps = {
  disabled: false,
};
export default InputCategory;
