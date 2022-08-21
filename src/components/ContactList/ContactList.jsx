const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
          {contacts.map(contact => {
              return (
                  <li key={contact.id}>
                      {contact.name} : {contact.number}
                      <button onClick={() => {
                          onRemove(contact.id);
                      }}>⛌</button>
                  </li>
              )
          })}
    </ul>
  );
};

export default ContactList;
