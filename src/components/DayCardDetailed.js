import React from 'react';
import GroceryItem from '../components/GroceryItem'
import {Card, Item, Button} from 'semantic-ui-react'


export default class DayCardDetailed extends React.Component {

  handleClick = (grocery) => {
    this.props.removeGrocery(grocery)
  }


  render() {

    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.day.name}</Card.Header>
          <Card.Meta>{this.props.day.meal_name}</Card.Meta>
          <Card.Description>
            <Item.Group >
              {this.props.groceries.map(grocery =>
                <GroceryItem grocery={grocery} onClick={() => this.handleClick(grocery)} editMode={this.props.editMode}/>
              )}
            </Item.Group>

          </Card.Description>
        </Card.Content>

        <Card.Content extra textAlign='center'>
          <div>
            <Button basic onClick={() => this.props.editDay(this.props.day)}>
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
