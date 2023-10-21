import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({ contacts, onDeleteItem }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
