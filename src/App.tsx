import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Store from './routes/Store';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/:storeId'
					Component={Store}
				/>
			</Routes>
		</Router>
	);
}
