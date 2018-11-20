import React, {Component} from 'react'

class CoordinatesButton extends Component {
  render() {
    //Within CoordinatesButton, render a button. On click of the button, create an array with two elements:
    //the X and Y coordinates of the mouse. Find these using the event data.
    return(
      <button onClick={this.handleClick}>Click</button>
    )
  }
//Pass this event data in as the argument for the onReceiveCoordinates prop.
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
}

export default CoordinatesButton;
