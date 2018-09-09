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

  removeGrocery = (day) => {
    let groceries = this.state.groceries
    groceries.splice( groceries.indexOf(day), 1 )
    this.setState({
      groceries: groceries
    })
  }

  render() {

    return (
      this.state.editMode ?
        <DayForm day={this.props.day} editMode={this.state.editMode} removeGrocery={this.removeGrocery}/>
      :
        <DayCard_detailed day={this.props.day} editDay={this.editDay} deselectDay={() => this.deselectDay()} removeGrocery={this.removeGrocery}/>
    )
  }
}
