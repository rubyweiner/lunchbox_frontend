import React from 'react'
import GroceryForm from '../components/GroceryForm'


export default class NavBar extends React.Component {

	render() {
		return (
		<div className="topheader">
	    <div className="main-page-title">
	    </div>
			{this.props.newGroceryMode ?
				<GroceryForm />
			:
				null
			}
		</div>
		)
	}
}
