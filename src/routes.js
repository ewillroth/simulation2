import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import House from './components/House/House';

export default (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/new/1" component={StepOne} />
		<Route path="/new/2" component={StepTwo} />
		<Route path="/new/3" component={StepThree} />
		<Route path="/houses/:id" component={House}/>
	</Switch>
);

