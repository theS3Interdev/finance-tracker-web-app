import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li className="title">
					<Link to="/">Finance Tracker</Link>
				</li>
				<li>
					<Link to="/signin">Signin</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
