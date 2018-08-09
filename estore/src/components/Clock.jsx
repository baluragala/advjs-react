import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDateTime: new Date().toISOString(),
      counter: 0,
      counters: []
    };
    setInterval(() => {
      this.setState({
        currentDateTime: new Date().toISOString(),
        counter: this.state.counter + 1,
        counters: [...this.state.counters, this.state.counter + 1]
      });
      //this.state.currentDateTime = new Date().toISOString();
      //console.log(this.state.currentDateTime);
    }, 1000);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.currentDateTime}</h1>
        <h2>{this.state.counter}</h2>

        {this.state.counters.map(c => (
          <li>{c}</li>
        ))}
      </div>
    );
  }
}

export default Clock;
