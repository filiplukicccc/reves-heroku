import React, { Component } from 'react';
// import css from './main.scss';
import movie from '../../images/Very-Open-Space.mp4';
import logo from "../../images/REVES_TECHNOLOGIES.png";
import './styleAfr.css';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { zoomInDown, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
	zoomInDown: {
		animation: 'x 3s',
		animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
	}
}


class Video extends Component {
	render() {
		return (
			<Grid>
				<GridRow centered>
					<GridColumn width={16}>
						<div style={{ position: 'fixed', width: '100%' }}>
							<div className='videoDiv'>
								<div style={{ flexDirection: 'column' }} className='shadowDiv'>
									<StyleRoot>
										<h1 style={styles.zoomInDown}>WELLCOME TO  <span style={{ display: 'inline', fontSize: '50px', fontWeight: '400' }}> REVES</span></h1>
									</StyleRoot>
									<p><i>Creativity is intelligence having fun</i></p>
								</div>
								<video className='videoCover' autoPlay loop src={movie}>
								</video>
								<div></div>
							</div>
						</div>
					</GridColumn>
				</GridRow>
			</Grid>
		)
	}
}
export default Video;