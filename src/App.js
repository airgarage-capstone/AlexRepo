import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import LoginForm from './LoginForm';

class App extends React.Component {
  render() {
    return (
        <div>
        <Form></Form>
        <LoginForm></LoginForm>
        </div>
        );
    }
}

export default App;

