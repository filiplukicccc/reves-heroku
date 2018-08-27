import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'

class About extends Component {
	render() {
		return (
			<div style={{ marginTop: '700px', position: 'relative', background: 'white', paddingBottom: '60px' }}>
				<h2 style={{ textAlign: 'center', paddingTop: '70px' }}>ABOUT <span style={{ color: '#003571' }}>US</span></h2>
				<p style={{ textAlign: 'center' }}>First you should know</p>
				<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid style={{ margin: '0px' }}>
					<GridRow centered>
						<GridColumn computer={12} tablet={14} mobile={15}>
							<div>
								<p style={{ fontSize: '16px' }}>
									<span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span>
									<span style={{ color: '#003571', fontSize: '21px', paddingLeft: '4px' }}>REVES</span> is privately managed and commercially active industrial group consisting of a collection of corporations that function as a single economic entity. Our companies are engaged in the business sectors of Information Technology, gaming technology, pharmaceutical and gastronomy. REVES Group is based in St. Gallen, Swziterland and employs approximately <span style={{ color: 'rgba(30,53,113,0.74)' }}>150 people</span> in offices in <span style={{ color: 'rgba(30,53,113,0.74)' }}>Switzerland, Serbia, Malta, Curacao and Rwanda</span>. The Group is organised in three independent divisions:
								</p>
							</div>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn computer={6} tablet={7} mobile={14}>
							<div>
								<p>
									<span style={{ height: '16px', background: '#003571', display: 'inline-block', width: '2px' }}></span>
									<span style={{ color: '#003571', fontSize: '16px', paddingLeft: '4px' }}>REVES Holding</span> is a leading investment holding company investing and operating in Central and Eastern Europe. The company mainly invests in four sectors, namely <span style={{ color: 'rgba(30,53,113,0.74)' }}>Finance, Commerce, Information Technology and Gastronomy</span>, providing the portfolio companies with REVES’ global network, patient capital and strategic guidance on operational improvements.
								</p>
							</div>
						</GridColumn>
						<GridColumn computer={6} tablet={7} mobile={14}>
							<div>
								<p>
									<span style={{ height: '16px', background: '#003571', display: 'inline-block', width: '2px' }}></span>
									<span style={{ color: '#003571', fontSize: '16px', paddingLeft: '4px' }}>REVES Technologies</span> is a Software Development company which offers IT related services such as <span style={{ color: 'rgba(30,53,113,0.74)' }}>Web Development, Graphic Design, Software Engineering and Internet Marketing</span>. Among our clients are both, start-ups as well as well renowned companies such as Hilton Hotels &amp; Resorts and Belgrade Nikola Tesla Airport.
								</p>
							</div>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn computer={12} tablet={7} mobile={14}>
							<div>
								<p>
									<span style={{ height: '16px', background: '#003571', display: 'inline-block', width: '2px' }}></span>
									<span style={{ color: '#003571', fontSize: '16px', paddingLeft: '4px' }}>REVES Medical</span>, which operates under the brand <span style={{ color: 'rgba(30,53,113,0.74)' }}>VIEBEG Medical and Dental Supplies</span> is a leading medical supplies and equipment provider based in <span style={{ color: 'rgba(30,53,113,0.74)' }}>Kigali, Rwanda</span>. The company offers high quality medical and dental supplies as well as equipment at the most attractive prices. VIEBEG was founded on the principles of <span style={{ color: 'rgba(30,53,113,0.74)' }}>quality, value and service</span>. The company imports pharmaceutical products from reliable suppliers from Europe and Asia and distributes them in East Africa.
								</p>
							</div>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}

}



export default About;
