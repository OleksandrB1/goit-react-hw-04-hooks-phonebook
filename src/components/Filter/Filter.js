import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, change }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.input} type="text" value={value} onChange={change} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;
