import React from 'react';
import css from './Contacts.module.css';

export default function ContactForm({
  OnChangeName,
  onChangeNumber,
  onSubmit,
  number,
  name,
}) {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={OnChangeName}
          value={name}
          className={css.input}
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
          className={css.input}
          required
        />
      </label>
      <button type="submit" className={css.buttonAddContact}>
        Add contact
      </button>
    </form>
  );
}
