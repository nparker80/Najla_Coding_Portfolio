/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './Social.scss'
class Social extends Component {
  render() {
    return (
      <div class="social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nparker80"><i class="fa fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/najlaparker"><i class="fa fa-linkedin"></i></a>
      </div>
    )
  }
}

export default Social