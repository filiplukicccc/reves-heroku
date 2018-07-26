import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form } from 'semantic-ui-react';
import axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: ""
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	async handleSubmit(e) {
		e.preventDefault();
		const { name, email, subject, message } = this.state

		const form = await axios.post('api/form', {
			name,
			email,
			subject,
			message,
		})


		// this.setState({
		// 	name: '',
		// 	email: '',
		// 	subject: '',
		// 	message: ''
		// })
	}
	render() {
		console.log('this.state :', this.state);
		const { name, email, subject, message } = this.state
		return (
			<div style={{ marginBottom: '150px', width: '100%' }}>
				<h2 style={{ marginBottom: '25px' }}>CONTACT</h2>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid>
					<GridRow>
						<GridColumn computer={8}>
							<Grid>
								<GridRow>
									<GridColumn computer={8}>
										<Form onSubmit={() => this.handleSubmit}>
											<Form.Input
												placeholder='Name'
												name='name'
												value={name}
												onChange={this.handleChange} />
											<Form.Input
												placeholder='Email'
												name='email'
												value={email}
												onChange={this.handleChange}
											/>
											<Form.Input
												placeholder='Subject'
												name='subject'
												value={subject}
												onChange={this.handleChange}
											/>
											<Form.TextArea
												placeholder='Message...'
												name='message'
												value={message}
												onChange={this.handleChange}
											/>
											<Form.Button content='Submit' />
										</Form>
									</GridColumn>
									<GridColumn computer={8}>bbbbbbbbb
									</GridColumn>
								</GridRow>
							</Grid>
						</GridColumn>
						<GridColumn computer={8}>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Contact;
