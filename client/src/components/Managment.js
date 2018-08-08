import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react'
import david from '../images/daav.jpg'
import tobi from '../images/tobi.jpg'
import gabriel from '../images/gabriel.png'
import dejana from '../images/dejana.jpg'

class Managment extends Component {
	render() {
		return (
			<div style={{ position: 'relative', background: 'white',paddingTop:'70px' }}>
				<h2 style={{ marginBottom: '25px' }}>MANAGMENT</h2>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className='border'></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className='border'></span>
				</div>
				<Grid style={{ width: '100%' }}>
					<GridRow centered>
						<GridColumn computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={tobi} circular></Image>
							<h3 className='employers'>Tobias Reiter, MSc.</h3>
							<h4 className='employersH4'>Founder and Chairman</h4>
							<p>While studying International Business Administration at Vienna University of Economics and Business, Tobias developed an arbitrage alert service. His academic experience in St. Petersburg, Russia, at the Graduate School of Management and at the University of Groningen in the Netherlands, where Tobias earned a Master‘s degree in International Business and Management, has enabled him to build an international business network. Tobias Reiter’s work experience in Africa, the U.S. and Asia as well as his various entrepreneurial activities allowed him to acquire experience in a number of different industries. </p>
						</GridColumn>
						<GridColumn computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={david} circular />
							<h3 className='employers'>David Veselinović, B.Sc.</h3>
							<h4 className='employersH4'>Founder and Chief Executive Officer</h4>
							<p>Born in Vienna, Austria, David Veselinović has acquired a broad work experience in different industries. David is a highly recognised and experienced sports betting expert. Prior to founding REVES Holding, he worked for SKS 365 Malta Ltd. in Vienna, where he was responsible for business and product development. Moreover, David worked in several management positions within the sports industry and holds a Bachelor’s degree in sports management. His expertise in analytical business model assessment, market analysis, sports modelling and business development are an essential resource for REVES Holding.</p>

						</GridColumn>
						<GridColumn computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={gabriel} circular />
							<h3 className='employers'>Jelena Scepanovic</h3>
							<h4 className='employersH4'>Founder</h4>
							<p>Born in Vienna, Gabriel Nguyen studied Business Administration at the University of Edinburgh. Gabriel has been a passionate entrepreneur from the outset of his career. In 2014, together with his business partners, Gabriel developed his own arbitrage trading software. As a result of his various entrepreneurial activities in Europe and Asia, Gabriel has built a strong global business network. His expertise in market analysis and project management are a valuable resource for REVES Holding’s clients.</p>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={gabriel} circular />
							<h3 className='employers'>Gabriel Nguyen</h3>
							<h4 className='employersH4'>Founder and Chief Financial Officer</h4>
							<p>Born in Vienna, Gabriel Nguyen studied Business Administration at the University of Edinburgh. Gabriel has been a passionate entrepreneur from the outset of his career. In 2014, together with his business partners, Gabriel developed his own arbitrage trading software. As a result of his various entrepreneurial activities in Europe and Asia, Gabriel has built a strong global business network. His expertise in market analysis and project management are a valuable resource for REVES Holding’s clients.</p>
						</GridColumn>
						<GridColumn computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={dejana} circular />
							<h3 className='employers'>Dejana Kuzmanovic</h3>
							<h4 className='employersH4'>Project Manager</h4>
							<p>Dejana can leverage her experience in project management, marketing and venture capital. She joined REVES Group as project manager in 2017, being responsible for Corporate Development. After studying Public relations at the University of Belgrade, Dejana gained valuable experience in marketing and public relations by working for many multinational companies. Dejana has built an extensive network in Eastern Europe which is of the utmost importance for REVES Group and she is one of the driving forces behind key operations and scaling. Known for her common business sense, she is able to define business wise solutions. </p>
						</GridColumn>
						<GridColumn computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={david} circular />
							<h3 className='employers'>Ernest Kayinamura, MSc.</h3>
							<h4 className='employersH4'>Director of Corporate Development, Africa</h4>
							<p>Ernest Kayinamura is responsible for Corporate Development in Africa. Together with the team of our branch office in Rwanda, East Africa, he is devoted to deliver solutions to our institutional and high net worth clients. Before joining REVES Holding, Ernest studied in Uganda and worked for various companies across different East African countries, which enabled him to build a strong business network in East Africa. Ernest can leverage his extensive experience in M&A and project management to support REVES Holding’s clients to gain a foothold in the African market as well as to expand their already existing market share in Africa.</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Managment;
