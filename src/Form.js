import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Dan",
      lastName: "Levy",
      email: "danlevy@asu.edu",
      pass: "",
      host: false,
      driver: false,
      dob: "",
      phone: 6025551000
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

   handleInputSubmit(event) {
    alert(this.state.firstName + ' ' + this.state.lastName + " you're all signed up!\n");
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      
      <form onSubmit={this.handleInputSubmit}>
        
        <h1><br />Sign Up</h1>
        <label>
          <div>First Name</div>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          <div>Last Name</div>
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          <div>Email</div>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          <div>Password</div>
          <input
            name="pass"
            type="password"
            value={this.state.pass}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        I will be using AirGarage to...
        <br />
        <div id="AccountTypeInput">
            <label>
              Find Parking
              <input
                name="driver"
                type="checkbox"
                checked={this.state.driver}
                onChange={this.handleInputChange} />
            </label>
            &nbsp;&nbsp;
            <label>
              List a Spot
              <input
                name="host"
                type="checkbox"
                checked={this.state.host}
                onChange={this.handleInputChange} />
            </label>
        </div>
        <br />
        <br />
        <label>
          <div>Date of Birth</div>
          <input
            name="dob"
            type="date"
            value={this.state.dob}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <div>Phone</div>
          <input
            name="phone"
            type="number"
            value={this.state.phone}
            onChange={this.handleInputChange} />
        </label>
        <br /><br />
        <button> Submit </button>
        <br /><br />
      </form>
    );
  }
}

export default Form;
