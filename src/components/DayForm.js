import React from 'react'
import GroceryItem from '../components/GroceryItem'
import {Form, Item} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class DayForm extends React.Component {
  state = {}

  handleChange = (e, { value }) => {
    this.setState(
      { value }
    )
  }

  render() {
    return(
      <Form>
        <h1>{this.props.day.name}</h1>
        <Form.Input fluid label='Meal Name' placeholder={this.props.day.meal_name} />
          <Item.Group >
            {this.props.day.groceries.map(grocery =>
              <GroceryItem grocery={grocery} editMode={this.props.editMode} onClick={this.props.removeGrocery}/>
            )}
          </Item.Group>

          <Form.Button basic onClick={() => this.props.onClick()}>
          Add Grocery
          </Form.Button>

          <Form.Button basic>
          Save
          </Form.Button>

      </Form>
    )
  }
}
