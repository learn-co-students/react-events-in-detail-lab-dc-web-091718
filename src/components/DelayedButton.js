import React, {Component} from 'react'

export default class DelayedButton extends Component {

	handleClick = (e) => {
		e.persist();
		setInterval(() =>this.props.onDelayedClick(e), this.props.delay)
	}
  

  render() {
    return (
      <button onClick={this.handleClick}> DelayedButton </button>
    )
  }

}
