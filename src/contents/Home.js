import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import portfolioPic from '../img/najla.JPG';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={portfolioPic} className="portfolioPic"></img>
        <ReactTypingEffect className="typingeffect" text={['Welcome To My Portfolio!']} speed={100} eraseDelay={700} />
      </div>
    )
  }
}

export default Home;