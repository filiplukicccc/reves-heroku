import React, { Component } from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

class ContactTechnologies extends Component {
	render() {
		return (
			<div style={{ height: '800px' }}>
				<h1 style={{ textAlign: 'center' }}>Contact Technologies</h1>
				<Grid>
					<GridRow centered>
						<GridColumn textAlign='center' computer={6} tablet={6} mobile={15}>
							Name <br />
							Subject
						</GridColumn>
						<GridColumn textAlign='center' computer={8} tablet={8} mobile={15}>
							E-mail<br />
							Text
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default ContactTechnologies;
