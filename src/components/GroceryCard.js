import React from 'react';
import {Card, Image} from 'semantic-ui-react'


export default class FridgeContainer extends React.Component {
  render() {
    return (
      <Card href='#'>
        <Image src={this.props.grocery.img_url} />
        <Card.Content>
          <Card.Header>{this.props.grocery.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Expires: {this.props.grocery.expiration_date}</span>
          </Card.Meta>
          <Card.Description>Calories: {this.props.grocery.calories}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>

          </a>
        </Card.Content>
     </Card>
    )
  }
}
