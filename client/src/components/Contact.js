import React, { Component } from 'react';
import '../index.css'
import { Grid, Icon, Input, TextArea, Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import { rotateInUpLeft, rotateInUpRight, fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TrackVisibility from 'react-on-screen';
import Axios from 'axios';

const styles = {
	rotateInUpLeft: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(rotateInUpLeft, 'rotateInUpLeft')
	},
	rotateInUpRight: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(rotateInUpRight, 'rotateInUpRight')
	},
	fadeInDown: {
		animation: 'x 2s',
		animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
	}
}

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			serverMessage: "",
			loader: 'none'
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	validate = () => {
		let condition;
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (this.state.name !== "" && this.state.email !== "" && this.state.email.match(emailRegex) && this.state.subject !== "" && this.state.message !== "") {
			return condition = true
		} else {
			return condition = false
		}
	}

	handleSubmit = async (e) => {
		let condition = this.validate();
		if (condition) {
			this.setState({
				loader: 'block'
			})
			const { name, email, subject, message } = this.state

			const form = await Axios.post('/api/groupForm', {
				name: name,
				email: email,
				subject: subject,
				message: message,
			})
				.then(res => this.setState({
					serverMessage: res.data,
					loader: 'none'
				}));
		}
		else {
			this.setState({
				serverMessage: 'Fill out all field correctlly!'
			})
		}
	}

	cleanState = (e) => {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: ''
		})
	}


	render() {
		const { name, email, subject, message } = this.state
		return (
			<div style={{ paddingBottom: "20px", overflow: 'hidden', position: 'relative', background: 'white', minHeight: '950px' }}>
				<TrackVisibility once throttleInterval={800}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.fadeInDown}>
									<h2 className='conUs'>CONTACT <span style={{ color: '#003571' }}> US</span></h2>
									<p style={{ textAlign: 'center' }}>We'd love to hear your feedback.</p>
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
					<Grid.Row>
						<Grid.Column computer={6} tablet={6} mobile={15} className='contactColumn' >
							<TrackVisibility once throttleInterval={800}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.rotateInUpLeft}>
												<div style={{ marginTop: '100px' }} className='contact'>
													<div className='contactDiv'>
														<span style={{ color: '#003571' }}>ADDRESS</span><br />
														<span style={{ color: '#414a4c' }}>REVES Technologies AG Sonnmattstrasse 2 9430<br /> St.Margarethen SG Switzerland</span>
													</div>
													<Icon name='location arrow' size='big' className='iconWhite' />
												</div>
												<div className='contact'>
													<div className='contactDiv' >
														<span style={{ color: '#003571' }}>SAY HELLO </span><br />
														<span style={{ color: '#414a4c' }}>info@revesgroup.com</span>
													</div>
													<Icon name='mail' size='big' className='iconWhite' />
												</div>
											</div>
										</StyleRoot> : ''
								}
							</TrackVisibility>
						</Grid.Column>
						<Grid.Column className='formDiv' computer={8} tablet={8} mobile={15} >
							<TrackVisibility once throttleInterval={800}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.rotateInUpRight}>
												<Form onSubmit={(e) => { this.handleSubmit(); this.cleanState(); }}>
													<Input name="name" onChange={this.handleChange} className='inputs' placeholder='Name' value={name} style={{ marginRight: '20px' }} />
													<Input name="email" type="email" onChange={this.handleChange} className='inputs' placeholder='Email' value={email} />
													<div className='inputs'>
														<Input name="subject" onChange={this.handleChange} className='subjectInput' placeholder='Subject' value={subject} />
													</div>
													<div className='inputs'>
														<TextArea name="message" onChange={this.handleChange} rows={10} placeholder='Message...' value={message} />
														<div style={{ textAlign: 'center', fontSize: '15px' }}>{this.state.serverMessage}</div>
														<div style={{ display: `${this.state.loader}` }}>
															<Dimmer active style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '5px' }}>
																<Loader size='big'>Loading</Loader>
															</Dimmer>
														</div>
													</div>
													<div>
														<Button className='sendButton' >Send</Button>
													</div>
												</Form>

											</div>
										</StyleRoot> : ''
								}
							</TrackVisibility>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<div>
					<p style={{ marginTop: "80px", textAlign: "center", fontSize: '14px', color: '#003571' }}>© Reves Group 2018 | All right reserved</p>
				</div>
			</div>
		)
	}
}
export default Contact;