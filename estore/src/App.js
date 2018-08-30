import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Offers from "./components/Offers";

import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Product from "./components/Product";

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
    // let rootClassName = "App c1 c2 c4 c5";
    let isLoggedIn = true;
    return (
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/add" component={AddProduct} />
          <Route
            exact
            path="/products/:pid"
            render={props => {
              return isLoggedIn ? (
                <ProductDetail {...props} someAdditionalProp={"extra"} />
              ) : (
                <Redirect to="/offers" />
              );
            }}
          />
          <Route path="/offers" component={Offers} />
          <Route render={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;

// [
//   <Counter start={10} incBy={5} decBy={5} />,
//   <Counter start={100} incBy={25} decBy={5} />,
//   <Counter start={500} incBy={50} decBy={25} />
// ];
// <div
//         className={rootClassName}
//         data-id="main1"
//         something-unknown="no"
//         style={{
//           backgroundColor: "maroon",
//           color: "white",
//           border: "10px solid black"
//         }}
//         title="this is a react app"
//       >
//         {this._renderList()}
//         {this._renderExpressionExamples()}
//         <Header />
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Footer />
//       </div>
