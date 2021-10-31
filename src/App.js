import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const pars = JSON.parse(localStorage.getItem("contacts"));
    if (pars) {
      setContacts(pars);
    }
  }, []);

  useEffect(() => {
    if (!contacts) {
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const short = require("short-uuid");
    const id = short.generate();
    if (!contacts.find((contact) => contact.name === name)) {
      setContacts((contacts) => [
        ...contacts,
        { id: id, name: name, number: number },
      ]);
    } else alert(`${name} is already in contacts.`);
  };

  const removeContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const renderList = () => {
    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  const filterState = (event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} change={filterState} />
      <Contacts list={renderList()} remove={removeContact} />
    </div>
  );
}
