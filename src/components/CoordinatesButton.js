import React, {Component} from 'react'

export default class CoordinateButton extends Component {

 
  render() {
    return (
        <button onClick={this.props.onReceiveCoordinates}> Button </button>
    )
  }

}
