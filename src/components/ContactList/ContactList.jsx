const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li key={id}>
      {name} : {number}
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        ⛌
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactList;
