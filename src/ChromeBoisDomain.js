import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
      // clientX and clientY are the read only properties of the mouseEvent interfact
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY
  }

  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas   // The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}    we need to call the function on the click
        // onClick={() => {toggleCycling()}} - called using an inline function
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
