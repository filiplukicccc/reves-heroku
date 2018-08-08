import React, { Component } from 'react';
import NavbarAfr from './NavbarAfr';
import Video from './VideoAfr';
import Slider from './Slider';
import AboutAfr from './AboutAfr';
import TeamAfr from './TeamAfr'
import Contact from './Contact'


class HomeAfrica extends Component {
	componentWillMount() {
		window.scroll(0, 0);
	}
	render() {
		return (
			<div>
				<NavbarAfr />
				{/* <Video /> */}
				<Slider />
				<AboutAfr />
				<TeamAfr />
				<Contact />
			</div>
		)
	}
}
export default HomeAfrica;