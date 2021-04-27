import React from 'react';
import {Dashboard} from 'src/components/Dashboard/Dashboard';
import {widgets} from 'src/mocks/dashboard.data';

import 'src/components/Dashboard/styles/main.scss';

const App = () => {
	return (
		<div className="App">
			<Dashboard title="My Awesome Dashboard" widgets={widgets} />
		</div>
	);
};

export default App;
