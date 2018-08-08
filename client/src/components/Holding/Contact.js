import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Input, TextArea, Dimmer, Loader } from 'semantic-ui-react';
import Axios from 'axios';
import Map from './Map';
import './styleHol.css'

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

      const form = await Axios.post('/api/form', {
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
    console.log('this.state :', this.state);
    const { name, email, subject, message } = this.state
    return (
      <div style={{ width: '100%' }}>
        <h2 style={{ marginBottom: '25px' }}>CONTACT</h2>
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
                  <h3 style={{ color: 'rgb(0, 53, 113)', textAlign: 'center' }}>FEEL FREE TO CONTACT US</h3>
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
                    <Dimmer active style={{background:'rgba(0,0,0,0.25)',borderRadius:'5px'}}>
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
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ color: 'rgb(0, 53, 113)', textAlign: 'center', marginBottom: '60px' }}>BRANCH OFFICE</h3>
                      <p>Praska 36/8<br />
                        11131 Beograd (Čukarica)<br />
                        Serbia</p>
                      <p>
                        Mail: office@reves-holding.com<br />
                        Phone: +381 11 405 1672</p>
                    </div>
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
            <GridColumn style={{ padding: '0px' }} computer={8} tablet={16} mobile={16}>
              <div className='map'>
                <Map />
              </div>
            </GridColumn>
          </GridRow>
        </Grid>

      </div>
    )
  }
}

export default Contact;
