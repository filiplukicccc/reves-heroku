import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Managment from './Managment';
import RevesTechnologies from './RevesTechnologies';
import RevesHoldingsAfrica from './RevesHoldingsAfrica';
import RevesHolding from './RevesHolding';
import Contact from './Contact';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='#about' component={About} />
			<Route exact path='#managment' component={Managment} />
			<Route exact path='/reves_technologies' component={RevesTechnologies} />
			<Route exact path='/reves_medical' component={RevesHoldingsAfrica} />
			<Route exact path='/reves_holding' component={RevesHolding} />
			<Route exact path='#contact' component={Contact} />
		</Switch>
	</main>
)

export default Main;