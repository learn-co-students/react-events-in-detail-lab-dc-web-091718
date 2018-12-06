// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  array = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.array} />
    )
  }
}

export default CoordinatesButton;
