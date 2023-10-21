import React from 'react';

export default function ContactItem({ contact, onDeleteItem }) {
  const handleDelete = () => {
    onDeleteItem(contact.id);
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
