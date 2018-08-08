import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import CountUp from 'react-countup';
import countImg from '../../images/countUpBG.jpg'
import './styleTech.css';
import { Parallax } from 'react-parallax';
import TrackVisibility from 'react-on-screen';


class Counter extends Component {
	render() {
		return (
			<div style={{ width: "100%" }}>
        <div style={{ background: 'rgba(0,0,0,0.85)', width: "100%", height: "100%" }}>
          <Parallax bgImage={countImg} strength={-500} className='bgImg'>
            <Grid style={{ margin: '0px' }}>
              <Grid.Row className='countUpRow'>
                <Grid.Column >
                  <TrackVisibility once throttleInterval={100}>
                    {
                      ({ isVisible }) => isVisible ?
                        <Grid className='countDiv'>
                          <Grid.Column computer={2} mobile={8} tablet={4}>
                            <div style={{ textAlign: "center" }}>
                              <CountUp className='countUp' start={0} end={82} duration={4.75} useEasing={true} />
                              <p>HAPPY CLIENTS</p>
                            </div>
                          </Grid.Column >
                          <Grid.Column computer={3} mobile={8} tablet={5}>
                            <div style={{ textAlign: "center" }}>
                              <CountUp className='countUp' start={0} end={45} duration={4.75} useEasing={true} />
                              <p>CUPS OF COFFEE (per day)</p>
                            </div>
                          </Grid.Column>
                          <Grid.Column computer={2} mobile={8} tablet={4}>
                            <div style={{ textAlign: "center" }}>
                              <CountUp className='countUp' start={0} end={180} duration={4.75} useEasing={true} />
                              <p>POSITIVE FEEDBACK</p>
                            </div>
                          </Grid.Column>
                          <Grid.Column computer={2} mobile={8} tablet={4}>
                            <div style={{ textAlign: "center" }}>
                              <CountUp className='countUp' start={0} end={63} duration={4.75} useEasing={true} />
                              <p>FINISHED PROJECTS</p>
                            </div>
                          </Grid.Column>
                          <Grid.Column computer={2} mobile={8} tablet={4}>
                            <div style={{ textAlign: "center" }}>
                              <CountUp className='countUp' start={0} end={8} duration={4.75} useEasing={true} />
                              <p>OWN PROJECTS</p>
                            </div>
                          </Grid.Column>
                          <Grid.Column computer={2} mobile={8} tablet={4}>
                            <div style={{ textAlign: "center" }}>
                              <CountUp className='countUp' start={0} end={12} duration={4.75} useEasing={true} />
                              <p>WINNING AWARDS</p>
                            </div>
                          </Grid.Column>
                          {/* </div> */}
                        </Grid>
                        : ""}
                  </TrackVisibility>
                </Grid.Column >
              </Grid.Row>
            </Grid>
          </Parallax>
        </div>
      </div>
		)
	}
}

export default Counter;
