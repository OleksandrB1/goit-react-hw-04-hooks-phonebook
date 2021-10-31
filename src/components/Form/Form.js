import { useState } from "react";
import s from "./Form.module.css";
import PropTypes from "prop-types";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const submit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={submit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.currentTarget.value);
            }}
          />
        </label>

        <button className={s.button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
