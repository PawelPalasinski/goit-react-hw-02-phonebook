import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactName = form.elements.name.value;
    // const phoneNumber = form.elements.number.value;
    this.setState({
      ...this.state,
      contacts: [
        ...this.state.contacts,
        {
          name: contactName,
          id: nanoid(),
        },
      ],
      name: '',
    });

    console.log(e);
  };

    render() {
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
                <input onChange={e => {}}/>
          <ul>
            {this.state.contacts.map(contact => {
              return <li key={contact.id}>{contact.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Phonebook;
