import React from 'react'
import { Menu , Button} from 'semantic-ui-react'

export default class NavBar extends React.Component {
	state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	render() {
    const { activeItem } = this.state

    return (
     <Menu >
      <Menu.Item>
        <img src='https://cdn3.vectorstock.com/i/1000x1000/61/97/lunch-box-icon-flat-style-vector-20186197.jpg' />
      </Menu.Item>

      <Menu.Item header>LUNCHBOX</Menu.Item>


      <Menu.Item  position='right'>
        <Button>Log-in</Button>
      </Menu.Item>
     </Menu>
   )
	}
}
// 
// <Menu.Item
//   name='New Grocery'
//   active={activeItem === 'reviews'}
//   onClick={this.handleItemClick}
// />
