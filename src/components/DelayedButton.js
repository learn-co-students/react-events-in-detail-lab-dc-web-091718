import React, {Component} from 'react'

class DelayedButton extends Component {
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Delayed Button</button>
      </div>
    )
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => { this.props.onDelayedClick(event)}, this.props.delay)
  }
}

export default DelayedButton