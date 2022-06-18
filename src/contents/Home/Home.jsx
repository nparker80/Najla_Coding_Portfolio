import React, { Component } from 'react';
import profilepic from '../../assets/najla.jpg';
import './Home.scss';
import Social from '../../components/Social/Social';

class Home extends Component {
  render() {
    return (
      <div className="condiv-home" id="app__container">
        <div className="home__content">
          <img src={profilepic} alt='Najlapic' />
          <h1 className="introduction">Hey and hi,<span>
            <br></br>
            My name is Najla and I am a full stack web developer.</span></h1>
          <p>Welcome to my portfolio!</p>
          <Social />
        </div>
      </div >
    )
  }
}

export default Home