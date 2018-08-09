import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.start };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
    if (e.target.textContent === "INC") {
      this.setState({ counter: this.state.counter + this.props.incBy });
    } else {
      this.setState({ counter: this.state.counter - this.props.decBy });
    }
  }
  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props)}</p>
        <button onClick={this.handleClick}>INC</button>
        <span>{this.state.counter}</span>
        <button onClick={this.handleClick}>DEC</button>
      </div>
    );
  }
}

export default Counter;
