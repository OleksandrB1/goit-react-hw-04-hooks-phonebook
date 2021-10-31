import s from "./Contacts.module.css";
import PropTypes from "prop-types";

const Contacts = ({ list, remove }) => {
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <span className={s.item}>{name}:</span>
          <span className={s.item}>{number}</span>
          <button
            onClick={() => {
              remove(id);
            }}
            type="button"
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Contacts;
