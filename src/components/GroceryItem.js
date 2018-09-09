import React from 'react';
import {Image, Item, Button} from 'semantic-ui-react'


export default class GroceryItem extends React.Component {
  render() {
    return (
      <Item>
        <Item.Image size='tiny' src={this.props.grocery.img_url} />

        <Item.Content>
          <Item.Header>{this.props.grocery.name}</Item.Header>
          <Item.Description>calories: {this.props.grocery.calories}</Item.Description>
        </Item.Content>
        <div>
        {this.props.editMode ?
          <Button circular icon='delete' onClick={() => this.props.onClick(this.props.grocery)}/>
        :
          ''}
        </div>
      </Item>

    )
  }
}
