import React, { Component } from 'react';
import Social from '../../components/Social/Social';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="condiv"><p className="contactP">Thank you for visiting my website.<br></br>My projects are ever changing so check back soon for updates!</p>
        <h1 className="subtopic">Contact Me</h1>
        <h3>Email: najla08@gmail.com</h3>
        <Social />
      </div >
    )
  }
}
export default Contact