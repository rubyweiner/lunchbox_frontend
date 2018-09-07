import React from 'react';
import {Card, Image, Grid} from 'semantic-ui-react'


export default class DayCard extends React.Component {
  render() {
    return (
      <Grid.Column>
      <Card.Group>
        <Card href="#">
          <Card.Content>
          <Card.Header>{this.props.day.name}</Card.Header>
          <Card.Meta>{this.props.day.meal_name}</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
      </Grid.Column>
    )
  }
}
