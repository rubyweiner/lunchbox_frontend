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

  handleAdd = (day) => {
    this.props.addGroceries(day)
  }

  handleSave = () => {

  }


  render() {

    return (
      this.state.editMode ?
        <DayForm
          day={this.props.day}
          groceries={this.props.groceries}
          editMode={this.state.editMode}
          removeGrocery={this.removeGrocery}
          onAdd={(day) => this.handleAdd(day)}
          onSave={() => this.handleSave()}
        />
      :
        <DayCardDetailed
          day={this.props.day}
          groceries={this.props.groceries}
          editDay={this.editDay}
          deselectDay={() => this.deselectDay()}
          removeGrocery={this.removeGrocery}
          groceryToAdd={this.props.groceryToAdd}
        />
    )
  }
}
