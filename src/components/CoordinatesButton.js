import React, {Component} from 'react'

class CoordinatesButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coordinates Button</button>
      </div>
    )
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
}

export default CoordinatesButton