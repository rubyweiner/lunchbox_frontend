import React, { Component } from 'react';
import './App.css';
import FridgeContainer from './containers/FridgeContainer'
import WeekdayContainer from './containers/WeekdayContainer'
import {Grid, Segment, Button} from 'semantic-ui-react'
import NavBar from './components/NavBar'
import DaySpec from './containers/DaySpec'
import MenuBar from './components/MenuBar'

class App extends Component {
  state = {
    groceries: [],
    days: [],
    daySelected: false,
    day: null,
    editMode: false,
    newGrocery: [],
    newGroceryMode: false
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

  renderGroceryForm = () => {
    this.setState(
      {
        newGroceryMode: true
      }
    )
  }

  postGrocery = (inputs) => {
    fetch (`http://localhost:3000/groceries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "appliaction/json"
      },
      body: JSON.stringify(
        {
          name: inputs[0].value,
          calories: inputs[1].value,
          expiration_date: inputs[2].value,
          img_url: inputs[3].value,
          user_id: 1,
          day_id: null
        }
      )
    })
    .then(response => response.json())
    .then(json => this.createNewGrocery(json))

  }

  createNewGrocery = (grocery) => {
    this.setState(
      {newGrocery: grocery}
    )

    let groceries = this.state.groceries
    groceries.push(this.state.newGrocery)
    this.setState(
      {
        groceries: groceries,
        newGroceryMode: false
      }
    )
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

  addGroceries = (day) => {
    this.setState(
      {
        editMode: true,
        day: day
      }
    )
  }

  addGroceryToDay = (grocery) => {
    let groceries= this.state.day.groceries
    groceries.push(grocery)

    this.setState(
      {
        groceries: groceries
      }
    )

    // resolve immediate rendering issues
    this.patchGrocery(grocery)
  }

  patchGrocery = (grocery) => {
    let day_id = this.state.day.id
    fetch (`http://localhost:3000/groceries/${grocery.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          day_id: day_id
        }
      )
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  deleteGrocery = (grocery) => {
    let groceries = this.state.groceries
    groceries.splice(groceries.indexOf(grocery), 1)
    this.setState(
      {groceries: groceries}
    )
    fetch (`http://localhost:3000/groceries/${grocery.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
  }


  render() {
    return (
      <div className="ui segment">
      <MenuBar />
      <NavBar newGroceryMode={this.state.newGroceryMode} postGrocery={this.postGrocery}/>
      <div className="body">
        <Grid columns='equal'>
          <Grid.Column >
            <Segment>
              <FridgeContainer
                groceries={this.state.groceries}
                editMode={this.state.editMode}
                addGroceryToDay={this.addGroceryToDay}
                deleteGrocery={this.deleteGrocery}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment className="ui center aligned segment">
              <Button basic size="huge" onClick={this.renderGroceryForm}>
                New Grocery
              </Button>
            </Segment>
            <Segment>
            {this.state.daySelected ?
              <DaySpec
                day={this.state.day}
                groceries={this.state.day.groceries}
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
