import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import CountUp from 'react-countup';
import image from '../../images/count.jpg';

class Counter extends Component {
	render() {
		return (
			<div style={{ width: '100%' }}>
				<div className='videoDiv' style={{ width: '100%', backgroundPositionY: '-84%', marginBottom: '50px', height: '300px', background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center' }}><div className='shadowDiv'></div>
					<Grid style={{ width: '100%', zIndex: '2', color: 'white', fontSize: '30px' }}>
						<GridRow centered>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75}  start={0} end={3} /> <br /><br />PARTNERS
							</GridColumn>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75}  start={0} end={7} /> <br /><br /> COMPANIES</GridColumn>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75}  start={0} end={3} /> <br /><br /> CONTINETS</GridColumn>
							<GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><CountUp duration={3.75}  start={0} end={43} /> <br /><br /> EMPLOYEES</GridColumn>
						</GridRow>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Counter;
