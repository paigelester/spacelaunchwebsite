import React from 'react';
import { RequestProvider } from 'react-request-hook';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axiosInstance from 'api/Client';

import 'styles/index.scss';

import HomePage from 'pages/Home/Home';
import AgencyPage from 'pages/Agency/Agency';
import LaunchPage from 'pages/Launch/Launch';

function App() {
	return (
		<RequestProvider value={axiosInstance}>
			<Router>
				<Switch>
					<Route path='/agency/:id' component={AgencyPage} />
					<Route path='/launch/:id' component={LaunchPage} />
					<Route exact={true} path='/' component={HomePage} />
				</Switch>
			</Router>
		</RequestProvider>
	);
}

export default App;