import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import CountUp from 'react-countup';
import image from '../../images/count.jpg';
import './styleHol.css';
import { Parallax } from 'react-parallax';
import TrackVisibility from 'react-on-screen';


class Counter extends Component {
	render() {
		return (
			<div style={{ width: '100%' }}>
				{/* <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)' }}> */}
				<Parallax bgImage={image} strength={-300} >
					<div style={{ height: '300px' }}>
						<div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.90)', position: 'absolute', top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<TrackVisibility throttleInterval={300} style={{ width: '100%' }}>
								{
									({ isVisible }) => isVisible ?
										<Grid className='counterGrid' style={{ width: '100%', zIndex: '2', color: 'white' }}>
											<GridRow centered>
												<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={4.75} start={0} end={3} /></p> <p>PARTNERS</p>
												</GridColumn>
												<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={3.75} start={0} end={7} /></p> <p> COMPANIES</p></GridColumn>
												<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={4.75} start={0} end={3} /></p>  <p>CONTINETS</p></GridColumn>
												<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={3.75} start={0} end={43} /></p> <p>EMPLOYEES</p></GridColumn>
											</GridRow>
										</Grid> : ''
								}
							</TrackVisibility>
						</div>
					</div>
				</Parallax>
				{/* </div> */}



				{/* <div className='videoDiv' style={{ width: '100%', backgroundPositionY: '-84%', marginBottom: '50px', height: '300px', background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center' }}><div className='shadowDiv'></div>
					<Grid className='counterGrid' style={{ width: '100%', zIndex: '2', color: 'white' }}>
						<GridRow centered>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75} start={0} end={3} /> <br />PARTNERS <br /><br />
							</GridColumn>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75} start={0} end={7} /> <br /> COMPANIES<br /><br /></GridColumn>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75} start={0} end={3} /> <br /> CONTINETS<br /><br /></GridColumn>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75} start={0} end={43} /> <br /> EMPLOYEES<br /><br /></GridColumn>
						</GridRow>
					</Grid>
				</div> */}
			</div>
		)
	}
}

export default Counter;
