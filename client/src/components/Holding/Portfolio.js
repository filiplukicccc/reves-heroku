import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Progress } from 'semantic-ui-react';

class Portfolio extends Component {
	render() {
		return (
			<div>
				<h2 style={{ marginBottom: '25px' }}>INVESTMENT PORTFOLIO</h2>
				<div style={{ textAlign: 'center',display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid>
					<GridRow centered>
						<GridColumn computer={12} tablet={7} mobile={14}>
							<h3 style={{ color: '#003571',textAlign:'center' }}>REVES HOLDING BELIEVES IN STRONG NETWORKS, LONG-TERM RELATIONSHIPS AND MUTUAL TRUST.</h3>
							<p>We believe that capitalizing on global opportunities is essential for sustained growth. Thus, we only invest if we can boost the value of your firm by providing you with our knowledge and our global network. Our expertise and resources help companies increase market share and expand into new markets.</p>
						</GridColumn>
					</GridRow>
					<GridRow style={{ marginBottom: '60px' }} centered>
						<GridColumn computer={4} tablet={12} mobile={14}>
							<p>REVES Holding has built extensive private equity investment experience in four sectors:</p>
						</GridColumn>
						<GridColumn computer={6} tablet={12} mobile={14}>
							<Progress percent={90} content='Finance' color='green' progress />
							<Progress percent={84} content='Commerce' color='blue' progress />
							<Progress percent={78} content='Information Technology' color='orange' progress />
							<Progress percent={74} content='Gastronomy' color='red' progress />
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Portfolio;
