import React, { Component } from 'react';
import './App.css';
import FridgeContainer from './containers/FridgeContainer'
import WeekdayContainer from './containers/WeekdayContainer'
import {Grid, Segment} from 'semantic-ui-react'

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

        <Grid columns='equal'>
          <Grid.Column width={5}>
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
    );
  }
}

export default App;
