import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react'
import '../index.css'

class Profiles extends Component {
	render() {
		return (
			<GridColumn className='peoples' computer={4} mobile={13}>
				<Image style={{ width: '280px', margin: '0 auto' }} src={this.props.item.picture} circular />
				<h3 className='employers'>{this.props.item.name}</h3>
				<h4 className='employersH4'>{this.props.item.job}</h4>
				<p>{this.props.item.desc}</p>
			</GridColumn>
		)
	}
}

export default Profiles;
