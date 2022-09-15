import { Link } from 'react-router-dom';

const Navbar = () => {
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
			</ul>
		</nav>
	);
};

export default Navbar;
