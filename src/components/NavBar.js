import React from 'react'
import GroceryForm from '../components/GroceryForm'


export default class NavBar extends React.Component {
	handleClick = (event) => {
		event.preventDefault()
		let inputs = event.currentTarget.form
		this.props.postGrocery(inputs)
	}
	render() {
		return (
		<div className="topheader">
	    <div className="main-page-title">
	    </div>
			{this.props.newGroceryMode ?
				<GroceryForm onClick={this.handleClick}/>
			:
				null
			}
		</div>
		)
	}
}
