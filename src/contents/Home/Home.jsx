import React, { Component } from 'react';
// import profilepic from '../../assets/najla.png';
import './Home.scss';
import Social from '../../components/Social/Social';

class Home extends Component {
  render() {
    return (
      <div className="condiv-home" id="app__container">
        {/* <img src={profilepic} alt='Najlapic' /> */}
        <div className="greeting">
          <p className="p-text-home">Welcome to my portfolio!</p><h1>Hey and hi,<span>
            <br></br>
            My name is Najla and I am a full stack web developer.</span></h1>
          <Social />
        </div></div >

    )
  }
}

export default Home