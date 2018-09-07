import React from 'react';
import GroceryItem from '../components/GroceryItem'
import DayForm from '../components/DayForm'
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

  render() {
    return (
      this.state.editMode ?
        <DayForm day={this.props.day}/>
      :
        <Card>
          <Card.Content>
            <Card.Header>{this.props.day.name}</Card.Header>
            <Card.Meta>{this.props.day.meal_name}</Card.Meta>
            <Card.Description>
              <Item.Group link>
                {this.props.day.groceries.map(grocery =>
                  <GroceryItem grocery={grocery}/>
                )}
              </Item.Group>

            </Card.Description>
          </Card.Content>

          <Card.Content extra textAlign='center'>
            <div>
              <Button basic onClick={this.editDay}>
                Edit
              </Button>
              <Button basic onClick={() => this.props.deselectDay()}>
                Back
              </Button>
            </div>
          </Card.Content>
        </Card>

    )
  }
}
