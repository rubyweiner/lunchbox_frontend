import React from 'react'
import { Form , Segment, Card, Container, Header, Button} from 'semantic-ui-react'


export default class GroceryForm extends React.Component {

	render() {
		return (
    <div className="form">
    <Card >
      <Header as='h3' block >
        New Grocery
      </Header>
      <Card.Content>
    		<Form size={"mini"}>
          <Form.Field id="name">
            <label>Name</label>
            <input />
          </Form.Field>
          <Form.Group >
            <Form.Field id="calories" width={4}>
              <label>Calories</label>
              <input  />
            </Form.Field>
            <Form.Field id="expiration_date">
              <label>Exipration Date</label>
              <input  placeholder="ex. 2018-09-17"/>
            </Form.Field>
          </Form.Group>
          <Form.Field id="image_url">
            <label>Image URL</label>
            <input  />
          </Form.Field>
          <Button type='submit' onClick={(event) => this.props.onClick(event)}>Submit</Button>
    		</Form>
      </Card.Content>
    </Card>
    </div>
		)
	}
}
