import PropTypes from 'prop-types';
import './style.css';
const ShowPage = ({ setLimitShowPage }) => {
  return (
    <div className="show">
      <div className="show__body">
        <span>show</span>
        <select
          className="show__body--select"
          onChange={(e) => {
            setLimitShowPage(e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};
ShowPage.propTypes = {
  setLimitShowPage: PropTypes.func.isRequired,
};
export default ShowPage;
