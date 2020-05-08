import React from 'react';
import { formatDate } from '../utils';

class Contact extends React.Component {
  render() {
    let contact = this.props.contact;
    if (!contact) {
      contact = {
        name: '',
        company: '',
        admissionDate: new Date(),
        department: '',
        country: '',
        phone: '',
        avatar:''
      };
    }
    const admissionDate = formatDate(contact.admissionDate);
    return (
      <article className='contact' data-testid='contact'>
        <span className='contact__avatar'>
          <img
            src={contact.avatar}
            alt={`ímagem de perfil de ${contact.name}`}
          ></img>
        </span>
        <span className='contact__data'>{contact.name}</span>
        <span className='contact__data'>{contact.phone}</span>
        <span className='contact__data'>{contact.country}</span>
        <span className='contact__data'>{admissionDate}</span>
        <span className='contact__data'>{contact.company}</span>
        <span className='contact__data'>{contact.department}</span>
      </article>
    );
  }
}

export default Contact;
