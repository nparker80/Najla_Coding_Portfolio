import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../../assets/najla.jpg';
import './Home.scss';
import Social from '../../components/Social/Social';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">

        <img src={profilepic} className='profilepic' alt='Najlapic' />
        <h1 className="introduction">Hey and hi,<span>
          <br></br>
          My name is Najla and I am a full stack web developer.</span></h1>
        <ReactTypingEffect className="typingeffect" text={['Welcome to my portfolio!']} speed={100} eraseDelay={2000} />
        <Social />
      </div>
    )
  }
}

export default Home