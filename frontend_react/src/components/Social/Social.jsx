/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './Social.scss'
class Social extends Component {
  render() {
    return (
      <div class="social">
        <a href="https://github.com/nparker80" target="_blank"><i class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/najlaparker" target="_blank"><i class="fa fa-linkedin"></i></a>
      </div>
    )
  }
}

export default Social