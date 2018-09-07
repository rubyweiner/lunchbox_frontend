import React from 'react';
import {Card, Button} from 'semantic-ui-react'


export default class DaySpec extends React.Component {
  render() {
    
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.day.name}</Card.Header>
          <Card.Meta>{this.props.day.meal_name}</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
