import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Header } from 'semantic-ui-react';
import movie from '../images/Ferris-wheel.mp4';
import '../index.css';
import About from './About';
import Managment from './Managment';
// import Contact from './Contact';
import ContactNew from './ContactNew';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import NavbarHome from './NavbarHome';
import NavbarAbout from './NavbarAbout';
import NavbarManagment from './NavbarManagment';
import NavbarContact from './NavbarContact';
import Counter from './Counter';
import Footer from './Footer';


configureAnchors({ offset: -60, scrollDuration: 800 })


class Home extends Component {
	componentWillMount() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<div>
				<div>
					<ScrollableAnchor id={'home'}>
						{window.location.href === 'http://localhost:3000/#home' ? <NavbarHome /> : window.location.href === 'http://localhost:3000/' ? <NavbarHome /> :
							window.location.href === 'http://localhost:3000/#about' ? <NavbarAbout /> :
								window.location.href === 'http://localhost:3000/#managment' ? <NavbarManagment /> :
									window.location.href === 'http://localhost:3000/#contact' ? <NavbarContact /> : <NavbarHome />
						}
					</ScrollableAnchor>
					<div className='res'>
						<Grid>
							<GridRow centered>
								<GridColumn width={16}>
									<div style={{ position: 'fixed', width: '100%' }}>
										<div className='videoDiv imgHome'>
											<div className='shadowDiv'><h1 style={{ fontSize: '40px' }}>WELCOME TO <span style={{ fontSize: '60px', fontWeight: '400' }}>REVES GROUP</span></h1></div>
											<video className='videoCover' autoPlay loop src={movie}>
											</video>
										</div>
									</div>
								</GridColumn>
							</GridRow>
						</Grid>
						<ScrollableAnchor id={'about'}>
							<About />
						</ScrollableAnchor>
						<Counter />

						<ScrollableAnchor id={'managment'}>
							<Managment />
						</ScrollableAnchor>
						<ScrollableAnchor id={'contact'}>
							{/* <Contact /> */}
							<ContactNew />
						</ScrollableAnchor>
						<Footer />
					</div>
				</div>
			</div>
		)
	}
}



export default Home;
