import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import { flipInY, fadeIn, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Grid, Icon} from 'semantic-ui-react';
import zepter from '../../images/zepter.png'
import aerodrom from '../../images/aerodrom.png'
import avanglion from '../../images/avanglion.png'
import eli from '../../images/miss-eli.png'
import galenika from '../../images/galenika.png'
import gecko from '../../images/gecko.png'
import koddace from '../../images/koddace.png'
import optiplaza from '../../images/optiplaza.png'
import osce from '../../images/osce.png'
import hilton from '../../images/hilton.png'
import tritacke from '../../images/tritacke.png'

const styles = {
	flipInY: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(flipInY, 'flipInY')
	},
	fadeIn: {
		animation: 'x 3.5s',
		animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},
	fadeIn1: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},
	zoomIn: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	}
}

class Clients extends Component {
	render() {
		return (
			<div style={{background:'white',position:'relative',paddingTop:'1px'}}>
				<TrackVisibility once throttleInterval={100}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.flipInY}>
									<h2>OUR&nbsp;<span style={{color:'#003571'}}>CLIENTS</span></h2>
									<p style={{ textAlign: 'center' }}>Meet our clients</p>
									<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<span className='border'></span>
										<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
										<span className='border'></span>
									</div>
								</div>
							</StyleRoot> : ''
					}
				</TrackVisibility>
				<Grid style={{ margin: '0px' }} className='clientsDiv'>
          <Grid.Row centered>
            <Grid.Column computer={2} tablet={3} mobile={14}>
              <TrackVisibility once throttleInterval={300}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className='iconGreyDiv'>
                        <Icon name='coffee' size='large' className='iconGrey' />
                        <p>DISCUSS</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={700}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className='iconGreyDiv'>
                        <Icon name='write' size='large' className='iconGrey' />
                        <p>CREATIVE CONCEPT</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={1100}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className='iconGreyDiv'>
                        <Icon name='settings' size='large' className='iconGrey' />
                        <p>PRODUCTION</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={1500}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className='iconGreyDiv'>
                        <Icon name='bug' size='large' className='iconGrey' />
                        <p>TESTING</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column computer={2} tablet={3} mobile={7}>
              <TrackVisibility once throttleInterval={1800}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeIn1} className='iconGreyDiv'>
                        <Icon name='smile' size='large' className='iconGrey' />
                        <p>HAPPY CLIENT</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </Grid.Column>

            <Grid style={{ margin: '0px', minHeight: '200px' }}>
              <Grid.Row centered>
                <Grid.Column computer={10} mobile={14}>
                  <TrackVisibility once throttleInterval={1000}>
                    {
                      ({ isVisible }) => isVisible ?
                        <StyleRoot>
                          <div style={styles.fadeIn}>
                            <div style={{ textAlign: "center", color: "#161e25", borderTop: "1px solid #003571", borderBottom: "1px solid #003571", marginBottom: "55px", marginTop: "30px" }}><p style={{ marginTop: "30px", marginBottom: "30px", color: '#414a4c' }}>Our client list speaks for itself. Since our earliest days, our clients list range from start-ups to large companies with that same approach and dedication at the core of every engagement. Our services are appreciated because  our strong technology skills and the capability to translate customer idea into  technology and  sector specific applications. </p></div>
                          </div>
                        </StyleRoot> : ''
                    }
                  </TrackVisibility>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Row>
        </Grid>
				<div>
          <TrackVisibility once throttleInterval={1000}>
            {
              ({ isVisible }) => isVisible ?
                <StyleRoot>
                  <div style={styles.zoomIn} >
                    <Grid style={{ margin: '0px' }}>
                      <Grid.Row centered style={{ padding: "0px", backgroundColor: "#161e25", justifyContent: "centered" }}>
                        <Grid.Column computer={2} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='imgZepter logos' src={zepter} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={2} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='imgAerodrom logos' src={aerodrom} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos' src={galenika} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={2} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos imgHilton' src={hilton} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={2} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='imgEli logos' src={eli} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='imgOsce logos' src={osce} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos' src={gecko} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos' src={avanglion} />
                          </div>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos' src={tritacke} />
                          </div>
                        </Grid.Column >
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos' src={optiplaza} />
                          </div>
                        </Grid.Column >
                        <Grid.Column computer={3} tablet={6} mobile={12} className='gridColumns'>
                          <div className='imgZoom'>
                            <img className='logos imgKodDace' src={koddace} />
                          </div>
                        </Grid.Column >
                      </Grid.Row>
                    </Grid>
                  </div>
                </StyleRoot> : ''
            }
          </TrackVisibility>
        </div>
			</div>
		)
	}
}

export default Clients;
