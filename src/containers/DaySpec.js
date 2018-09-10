import React from 'react';
import DayForm from '../components/DayForm'
import DayCard_detailed from '../components/DayCard_detailed'
import {Card, Button,  Image as ImageComponent, Item} from 'semantic-ui-react'


export default class DaySpec extends React.Component {

  state = {
    editMode: false,
    groceries: this.props.day.groceries,
    currentDay: null
  }

  editDay = (day) => {
    this.setState({
      editMode: true,
      currentDay: day
    })
  }

  deselectDay = () => {
    this.props.deselectDay()
  }

  removeGrocery = (grocery) => {
    let groceries = this.state.groceries
    groceries.splice( groceries.indexOf(grocery), 1 )
    this.setState({
      groceries: groceries
    })

    this.patchDay()
  }

  patchDay = () => {
    // DOESNT WORK~! maybe because no internet connection
    debugger
    fetch (`http://localhost:3000/days/${this.state.currentDay.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {groceries: this.state.groceries}
      )
    })

  }

  handleClick = () => {
    this.props.addGroceries()
  }



  render() {

    return (
      this.state.editMode ?
        <DayForm day={this.props.day} editMode={this.state.editMode} removeGrocery={this.removeGrocery} onClick={() => this.handleClick()}/>
      :
        <DayCard_detailed
          day={this.props.day}
          editDay={this.editDay}
          deselectDay={() => this.deselectDay()}
          removeGrocery={this.removeGrocery}
          groceryToAdd={this.props.groceryToAdd}
        />
    )
  }
}
