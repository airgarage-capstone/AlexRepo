import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      pass: "",
      host: false,
      driver: false,
      dob: "",
      phone: ""
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

      <div className="dualForms">
      <form onSubmit={this.handleInputSubmit}>
      
        <div className="signupheader clearfix">
        <div className="signuptitle clearfix">Sign Up</div>
        </div>

        <div className="container clearfix">
        <label>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleInputChange} 
            className="_input"     />
        </label>
        
        <label>
          <input
            name="pass"
            type="password"
            placeholder="Create a password"
            value={this.state.pass}
            onChange={this.handleInputChange} 
            className="_input"     />
        </label>
        
        <label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleInputChange} 
            className="_input"  />
        </label>
        
        <label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleInputChange} 
            className="_input"     />
        </label>
        <div className="optionSelect">
        I will be using AirGarage to...
        <br />
        <div className="AccountTypeInput">
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
        </div>
        
        
        <label>
          <input
            name="dob"
            type="date"
    
            value={this.state.dob}
            onChange={this.handleInputChange} 
            className="_input"     />
        </label>
        <div className="enforcedFields">Date of Birth</div>
        <label>
          <input
            name="phone"
            type="number"
            value={this.state.phone}
            onChange={this.handleInputChange} 
            className="_input"     />
        </label>
        <div className="enforcedFields">Phone Number</div>
        <div className="submitArea">
        <button>Submit</button>
        </div>
        
        </div>
        
      </form>
      </div>

    );
  }
}

export default Form;
