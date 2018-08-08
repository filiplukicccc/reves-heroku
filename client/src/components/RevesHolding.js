import React, { Component } from 'react';
import HomeHolding from './Holding/HomeHolding';

class RevesHolding extends Component {
componentDidMount(){
	console.log('jajajja :',this.props);

}
	render() {
		return (
			<div>
				<HomeHolding />
			</div>
		)
	}
}

export default RevesHolding;

