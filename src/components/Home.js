import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Header } from 'semantic-ui-react';
import movie from '../images/Ferris-wheel.mp4';
import '../index.css';
import About from './About';
import Managment from './Managment';
import Contact from './Contact';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import NavbarHome from './NavbarHome';
import NavbarAbout from './NavbarAbout';
import NavbarManagment from './NavbarManagment';
import NavbarContact from './NavbarContact';


configureAnchors({ offset: -60, scrollDuration: 800 })


class Home extends Component {
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
					<div>
						<div className='videoDiv'>
							<div className='shadowDiv'><h1>HOME REVES GROUP</h1></div>
							<video className='videoCover' autoPlay loop src={movie}>
							</video>
						</div>
						<ScrollableAnchor id={'about'}>
							<About />
						</ScrollableAnchor>
						<ScrollableAnchor id={'managment'}>
							<Managment />
						</ScrollableAnchor>
						<ScrollableAnchor id={'contact'}>
							<Contact />
						</ScrollableAnchor>
					</div>
				</div>
			</div>
		)
	}
}



export default Home;
