import React from 'react';
import DayForm from '../components/DayForm'
import DayCard_detailed from '../components/DayCard_detailed'
import {Card, Button,  Image as ImageComponent, Item} from 'semantic-ui-react'


export default class DaySpec extends React.Component {

  state = {
    editMode: false
  }

  editDay = () => {
    this.setState({
      editMode: true
    })
  }

  handleClick = () => {
    this.props.deselectDay()
  }

  render() {
    return (
      this.state.editMode ?
        <DayForm day={this.props.day}/>
      :
        <DayCard_detailed day={this.props.day} editDay={this.editDay} deselectDay={() => this.handleClick()}/>
    )
  }
}
