import React, { Component } from 'react';
import './App.css';
import FridgeContainer from './FridgeContainer'

class App extends Component {
  state = {
    groceries: []
  }

  fetchGroceries = () => {
  
  }

  componentDidMount() {
    this.fetchGroceries()
  }
  render() {
    return (
      <div className="App">
        <FridgeContainer groceries={this.state.groceries}/>
      </div>
    );
  }
}

export default App;
