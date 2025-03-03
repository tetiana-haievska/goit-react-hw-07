import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <span>
            {name}: {phone}
          </span>
          <button
            className={styles.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
