import React, { Component } from 'react';
import './App.css';
import FridgeContainer from './containers/FridgeContainer'
import WeekdayContainer from './containers/WeekdayContainer'
import {Grid, Segment, Image} from 'semantic-ui-react'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    groceries: [],
    days: []
  }

  fetchGroceries = () => {
   fetch('http://localhost:3000/groceries')
   .then(response => response.json())
   .then(json =>
     this.setState(
       {groceries: json}
     )
   )
  }

  fetchDays = () => {
    fetch('http://localhost:3000/days')
    .then(response => response.json())
    .then(json =>
      this.setState(
        {days: json}
      )
    )
  }

  componentDidMount() {
    this.fetchGroceries()
    this.fetchDays()
  }
  render() {
    return (
      <div className="ui segment">
      <NavBar />
        <Grid columns='equal'>
          <Grid.Column >
            <Segment>
              <FridgeContainer groceries={this.state.groceries}/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <WeekdayContainer days={this.state.days}/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
