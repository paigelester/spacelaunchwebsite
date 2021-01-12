import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'pages/Home/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact={true} path='/' render={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;