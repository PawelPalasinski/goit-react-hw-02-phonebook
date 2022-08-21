import styles from './ContactList.module.css';



const ContactList = ({ contacts, onRemove, children }) => {
  if (contacts.length === 0) return null;
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <p><span>{contact.name} : </span>{contact.number}</p>
              <button
                onClick={() => {
                  onRemove(contact.id);
                }}
              >
                ⛌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
