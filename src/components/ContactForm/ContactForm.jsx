import { React, Component } from 'react';

const INITIAL_STYATE = {
        name: '',
        phone: '',
    }

class ContactForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    
    handleChangeForm = ({ target }) => {
        const {name, value} = targetthis.setState({[nmame]: value})
    }

    handleFormSubmit = e => {
        e.preventDefault()

        const { name, phone } = this.state;
        const { onAdd } = this.props;

        const isValidatedForm = this.validateForm()

        if (!isValidatedForm) return
        onAdd({name, phone})
    }

    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckUnique } = this.props
        if (!name || !phone) {
            alert(`${name} is already in contacts`);
            return false
        }
        return onCheckUnique(name)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.props.submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Enter name'
                        value={name}
                        onChange
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
                        placeholder='Enter phone number'
                        value={phone}
                        onChange
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button
                        type='submit'
                        onClick={() => { }}>Add contact</button>
                    <br />
                </form>
            </div>
        )
    }
}

    export default ContactForm;