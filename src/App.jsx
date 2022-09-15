import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route index element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
