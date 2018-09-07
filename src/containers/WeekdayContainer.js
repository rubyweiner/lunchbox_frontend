import React from 'react';
import DayCard from '../components/DayCard'
import {Container, Header, Grid} from 'semantic-ui-react'


export default class WeekdayContainer extends React.Component {
  render() {
    return (
      <Container >
        <Container textAlign='center'><Header as='h2'>This Week</Header></Container>
        <Grid columns={1} padded>
          {this.props.days.map(day =>
            <DayCard day={day}/>
          )}
        </Grid>
      </Container>
    )
  }
}
