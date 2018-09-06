import React from 'react';
import GroceryCard from '../components/GroceryCard'
import {Container, Header} from 'semantic-ui-react'


export default class FridgeContainer extends React.Component {


  render() {

    return (
      <Container >
        <Container textAlign='center'><Header as='h2'>Fridge</Header></Container>
        {this.props.groceries.map(grocery =>
          <GroceryCard grocery={grocery}/>
        )}
      </Container>
    )
  }
}
