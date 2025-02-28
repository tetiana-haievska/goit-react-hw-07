import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcpntact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventdefault();
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert("${name} is already in contacts");
      return;
    }

    dispatch(addContact({ name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </form>
  );
};
