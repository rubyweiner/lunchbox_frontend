import React from 'react';
import DayCard from '../components/DayCard'
import {Container, Header, Grid} from 'semantic-ui-react'


export default class WeekdayContainer extends React.Component {

  handleClick = (day) => {
    this.props.dayDetails(day)
  }

  render() {
    return (
      <Container >
        <Container textAlign='center'><Header as='h2'>This Week</Header></Container>
        <Grid columns={1} padded>
          {this.props.days.map(day =>
            <DayCard day={day} onClick={() => this.handleClick(day)}/>
          )}
        </Grid>
      </Container>
    )
  }
}
