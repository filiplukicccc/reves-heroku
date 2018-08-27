import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react'
import david from '../images/F5.jpg'
import gabriel from '../images/gabriel.png'
import dejana from '../images/F3.jpg'
import tobias from '../images/F4.png'
import alex from '../images/F1.jpg'
import Profiles from './Profiles';


class Managment extends Component {
	render() {
		let arr = [
			{
				name: 'Tobias Reiter, MSc.',
				picture: tobias,
				job: 'Founder and Chairman',
				desc: 'While studying International Business Administration at Vienna University of Economics and Business, Tobias developed an arbitrage alert service. His academic experience in St. Petersburg, Russia, at the Graduate School of Management and at the University of Groningen in the Netherlands, where Tobias earned a Master‘s degree in International Business and Management, has enabled him to build an international business network. Tobias Reiter’s work experience in Africa, the U.S. and Asia as well as his various entrepreneurial activities allowed him to acquire experience in a number of different industries.'
			},
			{
				name: 'David Veselinović, B.Sc.',
				picture: david,
				job: 'Founder and Chief Executive Officer',
				desc: 'Born in Vienna, Austria, David Veselinović has acquired a broad work experience in different industries. David is a highly recognised and experienced sports betting expert. Prior to founding REVES Holding, he worked for SKS 365 Malta Ltd. in Vienna, where he was responsible for business and product development. Moreover, David worked in several management positions within the sports industry and holds a Bachelor’s degree in sports management. His expertise in analytical business model assessment, market analysis, sports modelling and business development are an essential resource for REVES Holding.'
			},
			{
				name: 'Jelena Scepanovic',
				picture: gabriel,
				job: 'Founder and Chief Executive Officer',
				desc: 'Born in Vienna, Austria, David Veselinović has acquired a broad work experience in different industries. David is a highly recognised and experienced sports betting expert. Prior to founding REVES Holding, he worked for SKS 365 Malta Ltd. in Vienna, where he was responsible for business and product development. Moreover, David worked in several management positions within the sports industry and holds a Bachelor’s degree in sports management. His expertise in analytical business model assessment, market analysis, sports modelling and business development are an essential resource for REVES Holding.'
			},
			{
				name: 'Gabriel Nguyen',
				picture: gabriel,
				job: 'Founder and Chief Financial Officer',
				desc: 'Born in Vienna, Gabriel Nguyen studied Business Administration at the University of Edinburgh. Gabriel has been a passionate entrepreneur from the outset of his career. In 2014, together with his business partners, Gabriel developed his own arbitrage trading software. As a result of his various entrepreneurial activities in Europe and Asia, Gabriel has built a strong global business network. His expertise in market analysis and project management are a valuable resource for REVES Holding’s clients.'
			},
			{
				name: 'Dejana Kuzmanovic',
				picture: dejana,
				job: 'Project Manager',
				desc: 'Dejana can leverage her experience in project management, marketing and venture capital. She joined REVES Group as project manager in 2017, being responsible for Corporate Development. After studying Public relations at the University of Belgrade, Dejana gained valuable experience in marketing and public relations by working for many multinational companies. Dejana has built an extensive network in Eastern Europe which is of the utmost importance for REVES Group and she is one of the driving forces behind key operations and scaling. Known for her common business sense, she is able to define business wise solutions.'
			},
			{
				name: 'Alex Musyoka, BSc.',
				picture: alex,
				job: 'Managing Director',
				desc: 'Born in Nairobi, Kenya, Alex Musyoka has acquired a deep understanding of the pharmaceutical industry. Before joining VIEBEG MEDICAL, Alex worked as a manager for more than 8 years for several companies engaging in pharmaceutical distribution in East Africa. He holds a Bachelor’s degree in Business Administration. Alex’ received valuable training abroad, such as in Dubai, where he worked closely with experts on finding high quality products that suit the East African market. Besides his precious product know-how and market knowledge, Alex is extremely skilled when it comes to analyse the market, business development and networking.'
			},
		]
		let peopleItems = arr.map((people, i) => {
			return (
				<Profiles item={people} />
			)
		})
		console.log('this.state :', this.state);
		return (
			<div className='managmentWrap' style={{ position: 'relative', background: 'white' }}>
				<h2 style={{ marginBottom: '25px' }}>MANAGMENT</h2>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid style={{ width: '100%' }}>
					<GridRow centered>
						{peopleItems}
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Managment;
