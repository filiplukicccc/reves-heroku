import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Input, TextArea, Dimmer, Loader, Icon } from 'semantic-ui-react';
import Axios from 'axios';
import MapGroup from './MapGroup';
import '../index.css'

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
				serverMessage: 'Fill out all fields correctlly!'
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
			<div style={{ width: '100%', background: 'white', position: 'relative', paddingTop: '90px' }}>
				<h2 className='contactH2Gr'>CONTACT<span style={{ color: '#003571' }}> US</span></h2>
				<p style={{ textAlign: 'center', marginBottom: '20px' }}>Feel free to contact us</p>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid>
					<Grid.Row centered>
						<GridColumn computer={10} tablet={12} moble={16}>
							<div>
								<Form onSubmit={(e) => { this.handleSubmit(); this.cleanState(); }}>
									<div className='inputsDiv'>
										<Input
											placeholder='Name'
											name='name'
											value={name}
											onChange={this.handleChange}
											className='inputs'
										/>
										<Input
											placeholder='Email'
											name='email'
											value={email}
											onChange={this.handleChange}
											className='inputs'
										/>
										<Input
											placeholder='Subject'
											name='subject'
											value={subject}
											onChange={this.handleChange}
											className='inputs'
										/>
									</div>
									<TextArea
										placeholder='Message...'
										name='message'
										value={message}
										onChange={this.handleChange}
									/>
									<div style={{ display: `${this.state.loader}` }}>
										<Dimmer active style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '5px' }}>
											<Loader size='big'>Loading</Loader>
										</Dimmer>
									</div>
									<Form.Button className='buttonCon' content='Send' />
								</Form>
								<div style={{ textAlign: 'center' }}>{this.state.serverMessage}</div>
							</div>
						</GridColumn>
					</Grid.Row>
				</Grid>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px', marginTop: '30px' }}>
					<span className='borderCon'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='borderCon'></span>
				</div>
				<Grid style={{ margin: '0px' }}>
					<GridRow>
						<GridColumn computer={8} tablet={16} mobile={16}>
							<Grid>
								<GridRow className='branch' centered>
									<GridColumn computer={8} >
										{/* <div style={{ textAlign: 'left' }}>
											<h3 style={{ color: 'rgb(0, 53, 113)', textAlign: 'center', marginBottom: '60px' }}>BRANCH OFFICE</h3>
											<p>Praska 36/8<br />
												11131 Beograd (Čukarica)<br />
												Serbia</p>
											<p>
												Mail: office@reves-holding.com<br />
												Phone: +381 11 405 1672</p>
										</div> */}
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
									</GridColumn>
								</GridRow>
							</Grid>
						</GridColumn>
						<GridColumn style={{ padding: '0px' }} computer={8} tablet={16} mobile={16}>
							<div className='map'>
								<MapGroup />
							</div>
						</GridColumn>
					</GridRow>
				</Grid>

			</div>
		)
	}
}

export default Contact;
