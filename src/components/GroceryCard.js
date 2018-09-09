import React from 'react';
import {Card, Image, Grid, Button} from 'semantic-ui-react'


export default class FridgeContainer extends React.Component {
  render() {
    return (
      <Grid.Column>
        <Card href='#'>
          <Image src={this.props.grocery.img_url} />
          <Card.Content>
            <Card.Header>{this.props.grocery.name}</Card.Header>
            <Card.Meta>
              <span className='date'>Expires: {this.props.grocery.expiration_date}</span>
            </Card.Meta>
            <Card.Description>Calories: {this.props.grocery.calories}</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
          {this.props.editMode?
            <div>
              <Button basic onClick={() => this.props.onClick(this.props.grocery)}>
                Add
              </Button>
            </div>
          :
            ''
          }

          </Card.Content>
       </Card>
      </Grid.Column>
    )
  }
}
