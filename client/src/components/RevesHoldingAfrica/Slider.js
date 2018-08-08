import React, { Component } from 'react'
import Slider from "react-slick"

class SliderJs extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2500,
			autoplaySpeed: 6000
		};
		return (
			<div className='niht'>
				<div className='headerAfr'>
					<Slider {...settings}>
						<div className='pic0'><div style={{ position: 'absolute', fontSize: '30px', color: 'white', width: '100%', height: '100%', left: '0px', top: '0px', zIndex: '2', backgroundColor: 'rgba(0,53,113,0.34)' }}></div><p>Prva slika</p></div>
						<div className='pic1'><div style={{ position: 'absolute', fontSize: '30px', color: 'white', width: '100%', height: '100%', left: '0px', top: '0px', backgroundColor: 'rgba(0,53,113,0.34)' }}></div><p>Druga slika</p></div>
						<div className='pic2'><div style={{ position: 'absolute', fontSize: '30px', color: 'white', width: '100%', height: '100%', left: '0px', top: '0px', backgroundColor: 'rgba(0,53,113,0.34)' }}></div><p >Treca slika</p></div>
						<div className='pic3'><div style={{ position: 'absolute', fontSize: '30px', color: 'white', width: '100%', height: '100%', left: '0px', top: '0px', backgroundColor: 'rgba(0,53,113,0.34)' }}></div><p >Cetvrta slika</p></div>
					</Slider>
				</div>
			</div>
		)
	}
}

export default SliderJs;
