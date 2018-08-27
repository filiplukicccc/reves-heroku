import React, { Component } from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';
import logo from '../images/RRR.png';

class Footer extends Component {
	render() {
		return (
			<div>
				<Grid style={{ margin: '0px' }}>
					<GridRow centered style={{ background: 'rgba(14,39,81,1)', color: 'white', padding: '40px 0' }}>
						<GridColumn computer={4} tablet={7} mobile={12}>
							<img width='180px' src={logo} />
						</GridColumn>
						<GridColumn computer={4} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>OFFICE</h4>
							<p>REVES Technologies AG<br />
								Sonnmattstrasse 2 9430<br />
								St.Margarethen SG Switzerland</p>
						</GridColumn>
						<GridColumn computer={4} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>CONTACT US</h4>
							<p>info@revesgroup.com<br /><br />
								{/* office@reves-holding.com */}
							</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}
export default Footer;
