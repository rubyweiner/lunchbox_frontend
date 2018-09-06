import React from 'react';
import DayCard from '../components/DayCard'
import {Container, Header} from 'semantic-ui-react'


export default class WeekdayContainer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Container >
        <Container textAlign='center'><Header as='h2'>This Week</Header></Container>
        {this.props.days.map(day =>
          <DayCard day={day}/>
        )}
      </Container>
    )
  }
}
