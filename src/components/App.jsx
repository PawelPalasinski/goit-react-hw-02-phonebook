import { React, Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUnique = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert(`${name} is already in contacts`);

    return !isExistContact;
  };

  handleremoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />

        {/* <Filter filter={filter} onChange={this.handleFilterChange} /> */}
        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleremoveContact}>
          <Filter filter={filter} onChange={this.handleFilterChange} />
          </ContactList>
      </>
    );
  }
}

export default App;
