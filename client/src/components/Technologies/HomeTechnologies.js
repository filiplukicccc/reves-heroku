import React, { Component } from 'react'
import AboutTechnologies from './AboutTechnologies';
import ContactTechnologies from './ContactTechnologies';
import TeamTechnologies from './TeamTechnologies';
import { configureAnchors } from 'react-scrollable-anchor';
import '../../index.css';
import './styleTech.css';
import NavbarTech from './NavbarTech';
import Video from './Video';
import Services from './Services';
import Clients from './Clients';
import Counter from './Counter';
import Footer from './Footer';


configureAnchors({ offset: -60, scrollDuration: 800 })



class HomeTechnologies extends Component {
	componentWillMount() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<div>
				<NavbarTech />
				<Video />
				<AboutTechnologies />
				<Services />
				<Clients />
				<TeamTechnologies />
				<Counter />
				<ContactTechnologies />
				<Footer />
			</div>
		)
	}
}
export default HomeTechnologies;