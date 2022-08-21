import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
// import ListItem from 'components/ListItem/ListItem';
// import Filter from '../Filter/Filter';

class Phonebook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    if (this.state.contacts.filter(el => el.name === name).length > 0) {
      return alert(`${name} is already in contacts`);
    } else {
      return this.setState({
        ...this.state,
        contacts: [
          ...this.state.contacts,
          { id: id, name: name, number: number },
        ],
        name: '',
      });
    }
  };

  removeContatcFromState = id => {
    const newContactList = this.state.contacts.filter(el => el.id !== id);
    this.setState({ ...this.state, contacts: newContactList });
  };

  renderContacts = (filterValue, contactsArray) => {
    if (!filterValue)
      return contactsArray.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button
              onClick={() => {
                this.removeContatcFromState(contact.id);
              }}
            >
              ⛌
            </button>
          </li>
        );
      });
    return contactsArray
      .filter((el, id) =>
        el.name.toLowerCase().includes(filterValue.toLowerCase())
      )
      .map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button
              onClick={() => {
                this.removeContatcFromState(contact.id);
              }}
            >
              ⛌
            </button>
          </li>
        );
      });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <ContactForm submitHandler={this.handleSubmit} />

        <div>
          <p>Contacts</p>

                {/* <Filter onFilterChange={e => {
                    this.setState({ ...this.state, filter: e.target.value });
                }} /> */}
          <label>
            Find contacts by name
            <input
              onChange={e => {
                this.setState({ ...this.state, filter: e.target.value });
              }}
            />
          </label>
          <ContactList>
            {this.renderContacts(filter, contacts)}
            {/* <ListItem renderItem={this.renderContacts(filter, contacts)}/> */}
          </ContactList>
        </div>
      </div>
    );
  }
}

export default Phonebook;
