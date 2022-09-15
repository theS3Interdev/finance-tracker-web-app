import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/Navbar';
import Signin from './pages/signin/sign-in';
import Signup from './pages/signup/sign-up';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route index element={<Home />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
