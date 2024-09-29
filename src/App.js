import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/user/:id?" element={<UserDetails />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
