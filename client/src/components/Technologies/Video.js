import React, { Component } from 'react';
import movie from '../../images/film.mp4';
import './styleTech.css';
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
							<div className='videoDiv imgTech'>
								<div style={{ flexDirection: 'column', background: 'rgba(0,53,113,0.84)' }} className='shadowDiv'>
									<StyleRoot>
										<h1 style={styles.zoomInDown}>Wellcome to  <span style={{ display: 'inline', fontSize: '50px', fontWeight: '400' }}> Reves Technologies</span></h1>
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