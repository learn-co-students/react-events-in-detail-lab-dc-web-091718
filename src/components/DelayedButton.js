// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  clickReaction = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }


  render() {
    return(
      <button
        onClick={this.clickReaction}

        />
    )
  }
}
