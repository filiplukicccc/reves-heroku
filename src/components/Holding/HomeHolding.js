import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import Sidebar from './Sidebar';
import './styleHol.css';
import finance from '../../images/finance.png';
import commerce from '../../images/commerce.png';
import cogwheel from '../../images/cogwheel.png';
import house from '../../images/house.png';
import Footer from './Footer';
import Slider from "react-slick";
import NavbarHol from './NavbarHol';
import movie from '../../images/City-Nights.mp4';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutHolding from './AboutHolding';
import Counter from './Counter';
import Managment from './Managment';
import Portfolio from './Portfolio';
import Contact from './Contact';


class HomeHolding extends Component {
	componentWillMount() {
		window.scroll(0, 0);
	}
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2500,
			autoplaySpeed: 4000
		};
		return (
			<div>
				{/* <Sidebar /> */}

				<NavbarHol />
				<Grid>
					<GridRow centered>
						<GridColumn width={16}>
							<div style={{ position: 'fixed', width: '100%' }}>
								<div className='videoDiv'>
									<div className='shadowDiv'><h1>OUR SECRET OF SUCCESS IS <br /><span>ENTHUSIASM</span></h1></div>
									<video className='videoCover' autoPlay loop src={movie}>
									</video>
									<div></div>
								</div>
							</div>
						</GridColumn>
					</GridRow>
				</Grid>
				<Grid centered style={{ marginTop: '700px', position: 'relative', background: 'white' }}>
					<h2>IT’S THE FUEL THAT KEEPS OUR BUSINESSES AFLOAT.</h2>
					<GridRow centered className='homeText'>
						<GridColumn computer={5} tablet={7} mobile={14}>
							<p>
								REVES Holding is a leading investment holding company investing and operating in Central and Eastern Europe. Our mission is to bring convenience to our clients through innovation, efficient service delivery, competence and flexibility.
							</p>
						</GridColumn>
						<GridColumn computer={5} tablet={7} mobile={14}>
							<p>
								We offer customer convenience and customer satisfaction by providing innovative top-quality products and effectively processing high speed and high volume transactions, whilst adhering to principles of integrity, transparency and fairness.
							</p>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn textAlign='center' className='flatDiv' computer={3} tablet={7} mobile={12}>
							<div className='flatBack'>
								<img src={finance} />
								<h3>FINANCE</h3>
							</div>
						</GridColumn>
						<GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={12}>
							<div className='flatBack'>
								<img src={commerce} />
								<h3>COMMERCE</h3>
							</div>
						</GridColumn>
						<GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={12}>
							<div className='flatBack'>
								<img src={cogwheel} />
								<h3>SOFTWARE DEVELOPMENT</h3>
							</div>
						</GridColumn>
						<GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={12}>
							<div className='flatBack'>
								<img src={house} />
								<h3>REAL ESTATE</h3>
							</div>
						</GridColumn>
					</GridRow>
					<h2 className='partnersH2'>WHAT OUR PARTNERS SAY ABOUT US</h2>
					<GridRow style={{ marginBottom: '65px' }} centered>
						<GridColumn computer={8} mobile={12}>
							<div style={{ textAlign: 'center' }}>
								<Slider {...settings}>
									<div>
										<p>The deep understanding of the sectors in which REVES Holding operates, its extensive business network as well as the proximity to its customers allowed us to speed up our international business expansion and to increase our market share in Central Eastern Europe.</p><br />
										<p>Andre Ringdorfer, B.Sc.<br />Finance</p>
									</div>
									<div>
										<p>REVES Holding’s long experience in commerce and its strong supplier network across Eastern European countries has been extremely supportive and has increased our performance tremendously. The high level of professional competence, quality awareness and customer focus amongst its employees is outstanding.</p><br />
										<p>Matej Matic<br />
											Stanica Piva Ltd. (Commerce)</p>
									</div>
									<div>
										<p>We greatly value our long and productive relationship with REVES Holding. Their drive and strong commitment to innovation have helped us to improve our capabilities and to build cutting-edge technology.</p><br />
										<p>Johannes Castner, Ph.D.<br />Software Development</p>
									</div>
								</Slider>
							</div>
						</GridColumn>
					</GridRow>
					<AboutHolding />
					<Counter />
					<Managment />
					<Portfolio />
					<Contact />
				</Grid>
				<Footer />

			</div>
		)
	}
}

export default HomeHolding;
