import React, { Component } from 'react'
import AboutTechnologies from './AboutTechnologies';
import ContactTechnologies from './ContactTechnologies';
import TeamTechnologies from './TeamTechnologies';
import SidebarTech from './Sidebar';
import { Grid, GridRow } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './styleTech.css';
import NavbarTech from './NavbarTech';
import movie from '../../images/Working-Space.mp4';


configureAnchors({ offset: -60, scrollDuration: 800 })



class HomeTechnologies extends Component {
	componentWillMount() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<div>
				<NavbarTech />
				<div className='videoDiv'>
					<div className='shadowDiv'><h1>HOME REVES technologies</h1></div>
					<video className='videoCover' autoPlay loop src={movie}>
					</video>
				</div>
				{/* <div className='divBack'>
					<div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', background: 'rgba(0,53,113,0.52)' }}>
					</div>
					<h1 style={{ textAlign: 'center' }}>Some quote about reves technologies</h1>
				</div> */}
				<AboutTechnologies />
				<TeamTechnologies />
				<ContactTechnologies />
			</div>
		)
	}
}
export default HomeTechnologies;