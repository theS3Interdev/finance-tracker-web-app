import { Link } from 'react-router-dom';
import { useSignout } from '../hooks/useSignout';

const Navbar = () => {
	const { signout } = useSignout();

	return (
		<nav className="navbar">
			<ul>
				<li className="title">
					<Link to="/">Finance Tracker</Link>
				</li>
				<li>
					<Link to="/signin">Sign In</Link>
				</li>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<button className="btn" onClick={signout}>
						Sign Out
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
