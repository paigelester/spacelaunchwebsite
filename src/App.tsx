import { Suspense } from 'react';
import { CacheProvider } from 'rest-hooks';
import { NetworkErrorBoundary } from 'rest-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from 'pages/Home/Home';
import AgencyPage from 'pages/Agency/Agency';
import LaunchPage from 'pages/Launch/Launch';

function App() {
	return (
		<CacheProvider>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<NetworkErrorBoundary>
						<Switch>
							<Route path='/agency/:id' component={AgencyPage} />
							<Route path='/launch/:id' component={LaunchPage} />
							<Route exact={true} path='/' component={HomePage} />
						</Switch>
					</NetworkErrorBoundary>
				</Suspense>
			</Router>
		</CacheProvider>
	);
}

export default App;