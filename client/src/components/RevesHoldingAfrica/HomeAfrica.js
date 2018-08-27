import React, { Component } from 'react';
import '../../index.css';
import NavbarAfr from './NavbarAfr';
import Slider from './Slider';
import AboutAfr from './AboutAfr';
import TeamAfr from './TeamAfr'
import Contact from './Contact'
import ContactNew from './ContactNew'
import VideoAfr from './VideoAfr'
import Icons from './Icons';
import Mission from './Mission';
import Counter from './Counter';
import Footer from './Footer';



class HomeAfrica extends Component {
	componentWillMount() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<div>
				<NavbarAfr />
				{/* <Slider /> */}
				<VideoAfr />
				<AboutAfr />
				<Icons />
				<Mission />
				<Counter />
				<TeamAfr />
				{/* <Contact /> */}
				<ContactNew />
				<Footer />
			</div>
		)
	}
}
export default HomeAfrica;