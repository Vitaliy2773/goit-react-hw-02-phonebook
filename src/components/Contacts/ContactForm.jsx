import React from 'react';

export default function ContactForm({
  OnChangeName,
  onChangeNumber,
  onSubmit,
  number,
  name,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={OnChangeName}
          value={name}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          onChange={onChangeNumber}
          value={number}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
