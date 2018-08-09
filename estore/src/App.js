import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  _renderList() {
    return (
      <ul>
        {[1, 2, 3, 4, 5].map(n => (
          <li>{n}</li>
        ))}
      </ul>
    );
  }

  _renderExpressionExamples() {
    return (
      <div>
        {new Date().toISOString()}
        <p>{2 * 2}</p>
        <p>{"a" + "b"}</p>
        <p>{"hello".toUpperCase()}</p>
        <p>{1 == 1 ? "one" : "two"}</p>
        {1 == 2 && <p>you are seeing this</p>}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this._renderList()}
        {this._renderExpressionExamples()}
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
