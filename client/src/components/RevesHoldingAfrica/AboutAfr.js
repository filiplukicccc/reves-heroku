import React, { Component } from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
// import './styleTech.css';
import { fadeInLeft, fadeInRight, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TrackVisibility from 'react-on-screen';

const styles = {
	fadeInLeft: {
		animation: 'x 3.5s',
		animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
	},
	fadeInRight: {
		animation: 'x 3.5s',
		animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
	},
	zoomIn: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	}
}

class AboutTechnologies extends Component {
	render() {
		return (
			<div style={{ position: 'relative', background: 'white', paddingBottom: '60px' }}>
				<TrackVisibility once throttleInterval={100}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.zoomIn}>
									<h2 style={{ textAlign: 'center' }}>About <span style={{ color: '#003571' }}>Reves Holdings Africa</span></h2>
									<p style={{ textAlign: 'center' }}>First you should know</p>
									<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
										<span className='border'></span>
										<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
										<span className='border'></span>
									</div>
								</div>
							</StyleRoot> : ''
					}
				</TrackVisibility>
				<Grid style={{ margin: '0px' }}>
					<GridRow centered>
						<GridColumn computer={12}>
							<p>REVES Holdings Africa is a holding company based in Rwanda, East Africa. It focuses mainly on the energy and pharmaceutical industry. </p>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn computer={6} tablet={7} mobile={14}>
							<TrackVisibility once throttleInterval={100}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.fadeInLeft}>
												<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span> AFRECON Gas </h3>
												<p>AFRECON Gas is an East African energy company based in Kigali, Rwanda which focuses on the sales of gas. Our mission is to ensure reliable and efficient supply of Liquefied petroleum gas (LPG). AFRECON gas is the preferred cooking gas in East Africa because of our large network, constant supply and high product safety features as well as our competitive pricing.<br /><br />
													We operate under strict compliance with AFRECON operating procedures to ensure that the product sold is safe, of the highest quality and fit for use. Moreover, our company puts huge efforts into educating the public on LPG use, including trainings on how to safely use the product.
												 </p>
												<h4 style={{ color: '#003571' }}><span style={{ height: '15px', background: '#003571', display: 'inline-block', width: '2px' }}></span> Our vision</h4>
												<p>AFRECON's vision is to become a leader among global energy companies by ensuring reliable and efficient supplies and diversifying our sales markets. Our strong network across Central and Eastern African countries is key to our success and stimulates continuous business development. </p>
											</div>
										</StyleRoot> : ''
								}
							</TrackVisibility>
						</GridColumn>
						<GridColumn computer={6} tablet={7} mobile={14}>
							<TrackVisibility once throttleInterval={100}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.fadeInRight}>
												<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span> VIEBEG Medical and Dental Supplies Ltd. </h3>
												<p>VIEBEG Medical and Dental Supplies Ltd. is a leading medical supplies and equipment provider in East Africa. We offer high quality medical and dental supplies and equipment at the most attractive prices. VIEBEG was founded on the principles of quality, value and service. Our mission is to bring convenience to our clients through innovation, efficient service delivery, competence and flexibility. We are dedicated to ensuring that our clients’ needs are met with the highest level of satisfaction.<br /><br />
													Our long-term goals are to help companies realising their growth potential by providing them with outstanding operational support. We are striving to make each customer experience with our business one that exceeds their expectations and brings value to their business. VIEBEG Medical and Dental Supplies Ltd. has over 15 years combined experience servicing the Pharmaceutical and Diagnostic sectors throughout Central and East Africa. Our sales representatives are fully up to date and knowledgeable about the fields we support. All our sales representatives attend regular training with our key suppliers ensuring they have the knowledge to support our customers.  </p>
											</div>
										</StyleRoot> : ''
								}
							</TrackVisibility>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default AboutTechnologies;

