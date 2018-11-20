import React from "react"

class CoordinatesButton extends React.Component {

  render() {
    return <button onClick={this.handleClick}>Click</button>
  }

  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
}

export default CoordinatesButton
