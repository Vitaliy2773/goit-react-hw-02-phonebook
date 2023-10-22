import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/Contacts/ContactForm';
import Filter from './components/Contacts/Filter';
import ContactList from './components/Contacts/ContactList';
import css from './components/Contacts/Contacts.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { name, number, contacts } = this.state;

    const presentContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (presentContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  inputId = nanoid();

  render() {
    const { name, number, filter, contacts } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          OnChangeName={this.handleChange}
          onChangeNumber={this.handleChange}
          onSubmit={this.handleSubmit}
          name={name}
          number={number}
        />
        <h2 className={css.title}>Contacts</h2>

        <Filter onChange={this.changeFilter} value={filter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteItem={this.handleDeleteContact}
        />
      </div>
    );
  }
}
