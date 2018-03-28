import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Card.css';

class Card extends Component {
    
  render() {
    var photoStyle = null;

    if(this.props.photoURL != null && this.props.photoURL != "" && this.props.photoURL != "None") {
        photoStyle = {
          backgroundImage: 'url(' + this.props.photoURL+ ')'
        };
    }

    return (
            <div className="Card">
              <div className="spotinfo clearfix">
                <p className="spotnametext">{this.props.name}</p>
                <p className="spotavailabilitytext">{this.props.availableAlways ? "Available 24/7" : "Not Available 24/7"}</p>
                <p className="spotaddresstext spotaddresstext-1">{this.props.streetAddress}</p>
                <p className="spotaddresstext spotaddresstext-2">{this.props.city}, {this.props.state}</p>
                <p className="spotaddresstext spotaddresstext-3">{this.props.zip}</p>
                <p className="spotpricetext">${this.props.price} per month</p>
                <p className="spotdetailstext">{this.props.quantity == 1 ? this.props.quantity + ' spot' : this.props.quantity + ' spots'} available</p>
              </div>
              <div className="spotphoto" style={photoStyle}></div>
            </div>
    );
  }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    availableAlways: PropTypes.bool.isRequired,
    photoURL: PropTypes.string.isRequired
};

export default Card;
