import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card clearfix">
        <div className="spotinfo clearfix">
          <p className="spotnametext">{this.props.name}</p>
          <p className="spotaddresstext spottext-top">{this.props.streetAddress}</p>
          <p className="spotaddresstext">{this.props.city}, {this.props.state}</p>
          <p className="spotaddresstext">{this.props.zip}</p>
          <p className="spotdetailstext spottext-top">{this.props.quantity} spots available</p>
          <p className="spotdetailstext">${this.props.price} per month</p>
          <p className="spotdetailstext">Available 24/7: {this.props.availableAlways ? "True" : "False"}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    availableAlways: PropTypes.bool.isRequired
};

export default Card;
