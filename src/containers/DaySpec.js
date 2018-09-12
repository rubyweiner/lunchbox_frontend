import React from 'react';
import DayForm from '../components/DayForm'
import DayCardDetailed from '../components/DayCardDetailed'



export default class DaySpec extends React.Component {

  state = {
    editMode: false,
    groceries: this.props.day.groceries,
    currentDay: null,
    currentGrocery: this.props.groceryToAdd
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
      groceries: groceries,
      currentGrocery: grocery
    })

    this.patchDeleteGrocery(grocery)
  }

  patchDeleteGrocery = (grocery) => {
    fetch (`http://localhost:3000/groceries/${grocery.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          day_id: null
        }
      )
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  patchUpdateDay = (meal_name, day) => {
    fetch (`http://localhost:3000/days/${day.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          meal_name: meal_name
        }
      )
    })
      .then(response => response.json())
      .then(json => this.setState(
          {
            day: json,
            editMode: false
      })
    )
  }

  handleAdd = (day) => {
    this.props.addGroceries(day)
  }

  handleSave = (event, day) => {
    let meal_name = event.currentTarget.form[0].value
    this.patchUpdateDay(meal_name, day)
  }

  render() {

    return (
      this.state.editMode ?
        <DayForm
          day={this.props.day}
          editMode={this.state.editMode}
          removeGrocery={this.removeGrocery}
          onAdd={(day) => this.handleAdd(day)}
          onSave={this.handleSave}
        />
      :
        <DayCardDetailed
          day={this.props.day}
          editDay={this.editDay}
          deselectDay={() => this.deselectDay()}
          removeGrocery={this.removeGrocery}
          groceryToAdd={this.props.groceryToAdd}
        />
    )
  }
}
