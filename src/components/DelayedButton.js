// Code DelayedButton Component Here

import React, {Component} from 'react'

class DelayedButton extends Component {
  render() {
//Create a button that, when clicked,
//will pass the click event to the onDelayedClick prop within a setTimeout().
//The setTimeout() should be set to this.props.delay.
    return (
      <button onClick={this.delayedClick}>Delayed Click</button>
    )
  }

  delayedClick = (event) => {
    event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
 }
}
export default DelayedButton;
