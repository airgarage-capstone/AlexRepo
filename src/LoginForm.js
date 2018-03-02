import React, { Component } from 'react';
import './Form.css';

class LoginForm extends React.Component {
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
    alert("Account not found!\n");
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (

      <div className="dualForms">
      <form onSubmit={this.handleInputSubmit}>
      
        <div className="signupheader clearfix">
        <div className="signuptitle clearfix">Log In</div>
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
            placeholder="Password"
            value={this.state.pass}
            onChange={this.handleInputChange} 
            className="_input"     />
        </label>
        
        <div className="submitArea">
        <button>Submit</button>
        </div>
        
        </div>
        
      </form>
      </div>

    );
  }
}

export default LoginForm;
