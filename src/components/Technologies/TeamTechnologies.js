import React, { Component } from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

class TeamTechnologies extends Component {
	render() {
		return (
			<div style={{ height: '800px' }}>
				<h1 style={{ textAlign: 'center' }}>Team Technologies</h1>
				<Grid>
					<GridRow centered>
						<GridColumn textAlign='center' computer={3} tablet={8} mobile={14}>
							Some photo
						</GridColumn>
						<GridColumn textAlign='center' computer={3} tablet={8} mobile={14}>
							Some photo
						</GridColumn>
						<GridColumn textAlign='center' computer={3} tablet={8} mobile={14}>
							Some photo
						</GridColumn>
						<GridColumn textAlign='center' computer={3} tablet={8} mobile={14}>
							Some photo
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}
export default TeamTechnologies;

