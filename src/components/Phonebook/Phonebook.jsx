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
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const id = nanoid();
        if (this.state.contacts.filter((el) => el.name === name).length > 0) { return alert("DUUUUUUPA"); } else {
        return (
        this.setState({
            ...this.state,
            contacts: [...this.state.contacts, { id: id, lol: id, name: name, number: number }],
            name: '',
        }))
    }
    };

    removeContatcFromState = (id) => {
        const newContactList = this.state.contacts.filter((el) => el.id !== id);
        this.setState({ ...this.state, contacts: newContactList })
    }

    renderContacts = (filterValue, contactsArray) => {
        if (!filterValue) return contactsArray.map(contact => {
            return (
                <>
                    <li key={contact.id} lol={contact.lol}>{contact.name} : {contact.number}</li>
                    <button key={contact.id + `btn`} onClick={() => { this.removeContatcFromState(contact.id) }}>Delete</button>
                    </>
            );
        });
        return contactsArray.filter((el, id) => el.name.toLowerCase().includes(filterValue.toLowerCase())).map(contact => {
            return (
                <>
                <li key={contact.id} lol={contact.lol}>{contact.name} : {contact.number}</li>
                    <button key={contact.id + `btn`}  onClick={() => { this.removeContatcFromState(contact.id) }}>Delete</button>
                    </>
            );
        });
        // console.log(contactsArray.filter((el, id) => el.name.toLowerCase().includes(filterValue.toLowerCase())))
    };
    
    render() {
        const {filter, contacts } = this.state;     
    return (
      <div>
            <div>
              {/* <ContactForm submitHandler={this.handleSubmit} />   */}
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

                {/* <Filter onFilterChange={ }/> */}
                <input
                    onChange={e => {
                    console.log(e.target.value);
                    this.setState({...this.state, filter: e.target.value});
                }} />
          <ul>
            {this.renderContacts(filter, contacts)}
                </ul>
                

        </div>
      </div>
    );
  }
}

export default Phonebook;
