import React, { Component } from 'react';
import './About.scss'
class About extends Component {
  render() {
    return (
      <div className="condiv">
        <div className="about__content">
          <h1 className="subtopic">About Me</h1>
          <br></br>
          <p> Hi, I am Najla Parker! In April 2022 I received my certificate from the University of Denver after completing a 24-week Coding Bootcamp.</p>

          <p> I acquired skills in the fundamental concepts of web development (HTML, CSS, and JavaScript), as
            well as command line fundamentals and APIs. In addition, my final team project was a full stack web
            application, working with servers, databases, and other back end technologies, and connecting them to the
            front end.
          </p>

          <p>
            My goal is to code daily. Since completing bootcamp, I have revisited some concepts and built on my existing knowledge. My first solo project will be an E-Commerce site to showcase my knowledge of full stack web development. Upon completion, I will study Python. I am excited to land my first job in tech and look forward to the learning ahead of me!
          </p>
        </div >
      </div >
    )
  }
}
export default About

