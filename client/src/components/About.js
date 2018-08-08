import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'

class About extends Component {
	render() {
		return (
			<div style={{ marginTop: '700px', position: 'relative', background: 'white', paddingBottom: '60px' }}>
				<h2 style={{ textAlign: 'center', paddingTop: '70px' }}>ABOUT <span style={{ color: '#003571' }}>REVES GROUP</span></h2>
				<p style={{ textAlign: 'center' }}>First you should know</p>
				<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid style={{ margin: '0px' }}>
					<GridRow centered>
						<GridColumn computer={6} tablet={7} mobile={14}>
							<div >
								<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span> Lorem ipsum</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique cursus felis sit amet tempor. Sed vel ullamcorper leo, quis varius orci. Sed venenatis finibus purus, sed maximus nisl convallis vitae. In lacinia ornare tempus. Vivamus in mi ut nibh sodales fermentum. Nulla a dolor magna. </p>
							</div>
						</GridColumn>
						<GridColumn computer={6} tablet={7} mobile={14}>

							<div >
								<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span> Lorem ipsum</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique cursus felis sit amet tempor. Sed vel ullamcorper leo, quis varius orci. Sed venenatis finibus purus, sed maximus nisl convallis vitae. In lacinia ornare tempus. Vivamus in mi ut nibh sodales fermentum. Nulla a dolor magna. </p>
							</div>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}

}



export default About;
