import React from 'react';
import GroceryItem from '../components/GroceryItem'
import {Card, Item, Button} from 'semantic-ui-react'


export default class DayCard_detailed extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.day.name}</Card.Header>
          <Card.Meta>{this.props.day.meal_name}</Card.Meta>
          <Card.Description>
            <Item.Group >
              {this.props.day.groceries.map(grocery =>
                <GroceryItem grocery={grocery}/>
              )}
            </Item.Group>

          </Card.Description>
        </Card.Content>

        <Card.Content extra textAlign='center'>
          <div>
            <Button basic onClick={() => this.props.editDay()}>
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
