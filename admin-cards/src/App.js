import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {

    state = {
        spots: []
    }

    componentDidMount() {
        axios.get(`https://airgara.ge/api/spots/`)
          .then(res => {
            const spots = res.data;
            this.setState({ spots });
          })
    }
  render() {
    return (
      <div className="App">
      { this.state.spots.map(spot => <Card 

            name={spot.name} 
            streetAddress={spot.address.address_line1} 
            city={spot.address.city}
            state={spot.address.state}
            zip={spot.address.zipcode}
            quantity={spot.quantity}
            price={spot.price}
            availableAlways={spot.available_24_7}

            />)}
      </div>
    );
  }
}

export default App;
