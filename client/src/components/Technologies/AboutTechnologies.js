import React, { Component } from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import './styleTech.css';
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
			<div style={{ marginTop: '700px', position: 'relative', background: 'white', paddingBottom: '60px' }}>
				<TrackVisibility once throttleInterval={100}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.zoomIn}>
									<h2 style={{ textAlign: 'center', paddingTop: '70px' }}>ABOUT <span style={{ color: '#003571' }}>REVES Technologies</span></h2>
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
						<GridColumn computer={6} tablet={7} mobile={14}>
							<TrackVisibility once throttleInterval={100}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.fadeInLeft}>
												<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span> Who we are</h3>
												<p>We were established in April 2017 with desire to offer our customers the best possible services. We are a young company which, thanks to our highly competent personnel and immense enthusiasm, is in the position to meet all your expectations!</p>
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
												<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span> Our mission</h3>
												<p>Let’s grow together! We are constantly following the trends in the dynamic world of information technologies in order to provide our customers with the best service and that is exactly what distinguishes us from others.</p>
												<h3 style={{ color: '#003571' }}><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}>&nbsp;</span> Our vision</h3>
												<p>Reves is going to rise over Silicon Valley and conquer (not divide) like we are supposed to. 2020 Our vision is becoming reality.</p>
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

