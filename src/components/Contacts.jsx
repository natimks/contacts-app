import React from 'react';
import Contact from './Contact';
import ContactHeader from './ContactHeader';

class Contacts extends React.Component {
  render() {
    let contactsarray =
      this.props.contacts && this.props.contacts.length > 0
        ? this.props.contacts
        : [];
    return (
      <div className='container' data-testid='contacts'>
        <section className='contacts'>
          <ContactHeader />
          {contactsarray.map((contact) => (
            <Contact contact={contact} key={contact.name} />
          ))}
        </section>
      </div>
    );
  }
}

export default Contacts;
