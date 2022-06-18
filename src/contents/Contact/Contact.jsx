import React, { Component } from 'react';
import Social from '../../components/Social/Social';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div class="condiv-contact" id="app__container">
        <div className="contact__content">
          <p>Thank you for visiting my website.<br></br>My projects are ever changing so check back soon for updates!</p>
          <h1 className="subtopic">Contact Me</h1>
          <h3 className="email">Email: najla08@gmail.com</h3>
          <Social />
        </div >
      </div >
    )
  }
}
export default Contact