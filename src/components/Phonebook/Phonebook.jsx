import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            name: '',
            number: '',
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const contactName = form.elements.name.value;
        const phoneNumber = form.elements.number.value;
        this.setState({
            ...this.state,
            contacts: [
                ...this.state.contacts,
                {
                    name: contactName,
                    number: phoneNumber,
                    id: nanoid(),
                },
            ],
            name: '',
        });

        console.log(e);
    };

    renderContacts = (filterValue, contactsArray) => {
        if (!filterValue) return contactsArray.map(contact => {
            return (
                <li key={contact.id}>{contact.name} : {contact.number}</li>
            );
        });
        return contactsArray.filter((el, id) => el.name.toLowerCase().includes(filterValue.toLowerCase())).map(contact => {
            return (
                <li key={contact.id}>{contact.name} : {contact.number}</li>
            );
        });
        // console.log(contactsArray.filter((el, id) => el.name.toLowerCase().includes(filterValue.toLowerCase())))
    };
    
    render() {
        const {filter, contacts } = this.state;     
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <br />
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <button onClick={() => {}}>Add contact</button>
            <br />
          </form>
        </div>
        <div>
                <p>Contacts</p>
                <input onChange={e => {
                    console.log(e.target.value);
                    this.setState({...this.state, filter: e.target.value});
                }}/>
          <ul>
            {this.renderContacts(filter, contacts)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Phonebook;
