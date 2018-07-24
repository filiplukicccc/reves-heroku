import React from 'react';
import SidebarHol from './Sidebar';
import Footer from './Footer';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import image from '../../images/blured.jpg';
import '../../App.css';

const AboutHolding = () => (
	<div>
		<div className='videoDiv' style={{ height: '400px', background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPositionY: '14%', backgroundSize: 'cover', backgroundPositionX: 'center' }}>
			<div className='shadowDiv'><h1 className='rotated' style={{ paddingTop: '0px' }}>REVES <div>HOLDING</div></h1></div>
		</div>
		<Grid>
			<GridRow  centered>
				<GridColumn computer={4} tablet={7} mobile={14}>
					<h2 style={{ textAlign: 'center' }}>ABOUT US</h2>
					<p>REVES Holding is a leading investment holding company based in Belgrade, Serbia. Our long-term goals are to further diversify our holding portfolio and to help companies realising their growth potential by providing them with patient capital and outstanding operational support.</p>
				</GridColumn>
				<GridColumn computer={6} tablet={7} mobile={14}>
					<h2 style={{ textAlign: 'center' }}>OUR VISION</h2>
					<p>Our strategic emphasis is on identifying the most promising business opportunities to invest and realize value from undervalued assets. We have a profound understanding of a variety of sectors, including finance, trading, commerce, real estate and gastronomy. Our strong network across Central and Eastern European Countries is key to our success and stimulates continuous business development and diversification.</p>
				</GridColumn>
			</GridRow>
			<GridRow style={{ marginBottom: '60px' }} centered>
				<GridColumn computer={10} tablet={12} mobile={14}>
					<h2 className='corporate' style={{ textAlign: 'center' }}>CORPORATE DEVELOPMENT</h2>
					<p>Our investments span a wide range of industries across Central and Eastern European countries. REVES Holding provides more than just capital.<br />We provide our portfolio companies with our global network and strategic guidance on operational improvements, such as turnover growth, IT optimization and market expansion.</p>
				</GridColumn>
			</GridRow>
		</Grid>
	</div>
)

export default AboutHolding;
