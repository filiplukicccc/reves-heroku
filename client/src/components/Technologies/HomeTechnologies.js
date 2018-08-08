import React, { Component } from 'react'
import AboutTechnologies from './AboutTechnologies';
import ContactTechnologies from './ContactTechnologies';
import TeamTechnologies from './TeamTechnologies';
import SidebarTech from './Sidebar';
import { Grid, GridRow } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import '../../index.css';
import './styleTech.css';
import NavbarTech from './NavbarTech';
import Video from './Video';
import Services from './Services';
import Clients from './Clients';
import Counter from './Counter';


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
			</div>
		)
	}
}
export default HomeTechnologies;