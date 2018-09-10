import React, { Component } from 'react';
import './App.css';
import FridgeContainer from './containers/FridgeContainer'
import WeekdayContainer from './containers/WeekdayContainer'
import {Grid, Segment, Image} from 'semantic-ui-react'
import NavBar from './components/NavBar'
import DaySpec from './containers/DaySpec'

class App extends Component {
  state = {
    groceries: [],
    days: [],
    daySelected: false,
    day: null,
    editMode: false,
    groceryToAdd: null
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

  dayDetails = (day) => {
    this.setState(
      {
        daySelected: true,
        day: day
      }
    )
  }

  deselectDay = () => {
    this.setState(
      {
        daySelected: false,
        day: null
      }
    )
  }

  addGroceries = () => {
    this.setState(
      {editMode: true}
    )
  }

  addGroceryToDay = (grocery) => {
    this.setState(
      {groceryToAdd: grocery}
    )
    //Patch fetch ?????????
  }

  render() {
    return (
      <div className="ui segment">
      <NavBar />
      <div className="body">
        <Grid columns='equal'>
          <Grid.Column >
            <Segment>
              <FridgeContainer groceries={this.state.groceries} editMode={this.state.editMode} addGroceryToDay={this.addGroceryToDay}/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
            {this.state.daySelected ?
              <DaySpec
                day={this.state.day}
                deselectDay={() => this.deselectDay()}
                addGroceries={this.addGroceries}
                groceryToAdd={this.state.groceryToAdd}
              />
            :
              <WeekdayContainer days={this.state.days} dayDetails={this.dayDetails} />
            }
            </Segment>
          </Grid.Column>
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;
