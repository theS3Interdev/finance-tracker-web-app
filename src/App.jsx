import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/home';
import Navbar from './components/Navbar';
import Signin from './pages/signin/sign-in';
import Signup from './pages/signup/sign-up';

const App = () => {
	const { authIsReady, user } = useAuthContext();

	return (
		<div className="app">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
						<Route path="/signin" element={user ? <Navigate to="/" /> : <Signin />} />
						<Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
};

export default App;
