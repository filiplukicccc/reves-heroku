import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react';
import david from '../../images/F5.jpg';
import tobias from '../../images/F4.png'
import gabriel from '../../images/gabriel.png'
import alex from '../../images/F1.jpg'
import john from '../../images/F2.jpg'
import './styleHol.css';

class Managment extends Component {
	render() {
		return (
			<div style={{ marginBottom: '75px', width: '100%' }}>
				<h2 style={{ marginBottom: '25px' }}>MANAGMENT</h2>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid style={{ width: '100%' }}>
					<GridRow centered>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={david} circular></Image>
							<h3 className='employers'>David Veselinović, B.Sc.</h3>
							<h4 className='employersH4'>Founder and Chief Executive Officer</h4>
							<p>Born in Vienna, Austria, David Veselinović has acquired a broad work experience in different industries. David is a highly recognised and experienced sports betting expert. Prior to founding REVES Holding, he worked for SKS 365 Malta Ltd. in Vienna, where he was responsible for business and product development. Moreover, David worked in several management positions within the sports industry and holds a Bachelor’s degree in sports management. His expertise in analytical business model assessment, market analysis, sports modelling and business development are an essential resource for REVES Holding.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={tobias} circular />
							<h3 className='employers'>Tobias Reiter, MSc.</h3>
							<h4 className='employersH4'>Founder and Chairman</h4>
							<p>While studying International Business Administration at Vienna University of Economics and Business, Tobias developed an arbitrage alert service. His academic experience in St. Petersburg, Russia, at the Graduate School of Management and at the University of Groningen in the Netherlands, where Tobias earned a Master‘s degree in International Business and Management, has enabled him to build an international business network. Tobias Reiter’s work experience in Africa, the U.S. and Asia as well as his various entrepreneurial activities allowed him to acquire experience in a number of different industries.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={gabriel} circular />
							<h3 className='employers'>Gabriel Nguyen</h3>
							<h4 className='employersH4'>Founder and Chief Financial Officer</h4>
							<p>Born in Vienna, Gabriel Nguyen studied Business Administration at the University of Edinburgh. Gabriel has been a passionate entrepreneur from the outset of his career. In 2014, together with his business partners, Gabriel developed his own arbitrage trading software. As a result of his various entrepreneurial activities in Europe and Asia, Gabriel has built a strong global business network. His expertise in market analysis and project management are a valuable resource for REVES Holding’s clients.</p>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={john} circular />
							<h3 className='employers'>Johannes Castner, PhD.</h3>
							<h4 className='employersH4'>Head of Software Development</h4>
							<p>Before joining REVES Holding, Johannes was a research assistant at the Federal Reserve Bank in Boston. He also worked as a Data Scientist for eBay Inc. in San Jose, California. Johannes Castner holds a PhD in Sustainable Development and a BA in Economics from Columbia University. Johannes brings a strong background in software development and finance. He has built an extensive network across the globe and his business contacts in the Silicon Valley are of the utmost importance to REVES Holding.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }} className='imgHol' computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={alex} circular />
							<h3 className='employers'>Alex Musyoka, BSc.</h3>
							<h4 className='employersH4'>Director of Corporate Development, Africa</h4>
							<p>Born in Nairobi, Kenya, Alex Musyoka has acquired a deep understanding of the pharmaceutical industry. Before joining VIEBEG MEDICAL, Alex worked as a manager for more than 8 years for several companies engaging in pharmaceutical distribution in East Africa. He holds a Bachelor’s degree in Business Administration. Alex’ received valuable training abroad, such as in Dubai, where he worked closely with experts on finding high quality products that suit the East African market. Besides his precious product know-how and market knowledge, Alex is extremely skilled when it comes to analyse the market, business development and networking.</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Managment;
