import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";

export default function ContactList() {
  // const contacts = useSelector((state) => state.contacts.items);
  const contacts = useSelector(selectContacts);
  // const filters = useSelector((state) => state.filters.name);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filters.toLowerCase())
  // );

  return (
    <div>
      <ul className={css.contactUl}>
        {contacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
