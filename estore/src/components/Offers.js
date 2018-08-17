import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_OFFERS } from "../actionTypes/offers";

class Offers extends Component {
  componentDidMount() {
    this.props.getOffers();
  }
  render() {
    return (
      <div>
        {this.props.offers.map(o => (
          <li>{o.desc}</li>
        ))}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("mapStateToProps called by Provider with", appState);
  return {
    offers: appState.offersState.offers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOffers: function() {
      dispatch({ type: GET_OFFERS });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offers);
