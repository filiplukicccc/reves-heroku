import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Mapa extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					initialCenter={{
						lat: 47.446660,
						lng: 9.644360
					}}
					zoom={15}
					style={{ height: '700px' }}
				>

					<Marker onClick={this.onMarkerClick}
						name={'Current location'} />

					<InfoWindow onClose={this.onInfoWindowClose}>
						{/* <div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div> */}
					</InfoWindow>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyCbJZbH-qlI9Uk5likGPuOUqraqALJHj3s")
})(Mapa)        