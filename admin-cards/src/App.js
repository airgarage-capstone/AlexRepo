import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
            name="Lorraine's parking spot" 
            streetAddress="699 S Mill Ave."
            city="Tempe"
            state="AZ"
            zip={85281}
            quantity={3}
            price={50}
            availableAlways={false}
        />
        <Card 
            name="Alex's covered space" 
            streetAddress="818 W Laird St."
            city="Tempe"
            state="AZ"
            zip={85281}
            quantity={1}
            price={75}
            availableAlways={false}
        />
        <Card 
            name="Jeremy's alleyway" 
            streetAddress="707 E Encanto Dr."
            city="Tempe"
            state="AZ"
            zip={85281}
            quantity={2}
            price={35}
            availableAlways={true}
        />
        <Card 
            name="Emily's driveway" 
            streetAddress="1201 E Alameda Dr."
            city="Tempe"
            state="AZ"
            zip={85281}
            quantity={7}
            price={40}
            availableAlways={false}
        />
        <Card 
            name="Luke's tree-shaded spot" 
            streetAddress="304 E. Concorda Dr."
            city="Tempe"
            state="AZ"
            zip={85281}
            quantity={1}
            price={60}
            availableAlways={true}
        />
      </div>
    );
  }
}

export default App;
