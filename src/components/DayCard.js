import React from 'react';
import {Card, Grid} from 'semantic-ui-react'


export default class DayCard extends React.Component {
  render() {
    return (
      <Grid.Column>
      <Card.Group>
        <Card href="#" onClick={() => this.props.onClick(this.props.day)}>
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
