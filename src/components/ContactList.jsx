import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import css from '../css/ContactList.module.css';
import { ContactListItem } from './ContactListItem';

const filterContacts = (contacts, filter) => {
  if (filter) {
    filter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  } else return contacts;
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <ul className={css.contacts_container}>
      {filteredContacts.map(contact => (
        <li className={css.contacts_item} key={contact.id} htmlFor={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
