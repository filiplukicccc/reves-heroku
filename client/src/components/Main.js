import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Managment from './Managment';
import RevesTechnologies from './RevesTechnologies';
import RevesHoldingsAfrica from './RevesHoldingsAfrica';
import RevesHolding from './RevesHolding';
import Contact from './Contact';
import HomeHolding from './Holding/HomeHolding';
import AboutHolding from './Holding/AboutHolding';
import TeamHolding from './Holding/TeamHolding';
import HomeTechnologies from './Technologies/HomeTechnologies';
import AboutTechnologies from './Technologies/AboutTechnologies';
import TeamTechnologies from './Technologies/TeamTechnologies';
import ContactTechnologies from './Technologies/ContactTechnologies';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='#about' component={About} />
			<Route exact path='#managment' component={Managment} />
			<Route exact path='/reves_technologies' component={RevesTechnologies} />
			<Route exact path='/reves_holdings_africa' component={RevesHoldingsAfrica} />
			<Route exact path='/reves_holding' component={RevesHolding} />
			<Route exact path='#contact' component={Contact} />
			{/* <Route exact path='/reves_holding/home' component={HomeHolding} />
			<Route exact path='/reves_holding/about' component={AboutHolding} />
			<Route exact path='/reves_holding/team' component={TeamHolding} />
			<Route exact path='/reves_holding/contact' component={ContactHolding} /> */}
			{/* <Route exact path='/reves_technologies/home' component={HomeTechnologies} />
			<Route exact path='/reves_technologies/about' component={AboutTechnologies} />
			<Route exact path='/reves_technologies/team' component={TeamTechnologies} />
			<Route exact path='/reves_technologies/contact' component={ContactTechnologies} /> */}
		</Switch>
	</main>
)

export default Main;