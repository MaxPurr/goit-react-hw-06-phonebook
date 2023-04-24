import { Phonebook } from './Phonebook';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from '../css/Container.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
